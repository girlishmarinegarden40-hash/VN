import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(process.cwd());
const outputDir = path.join(root, "translation");
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scriptMatches = [
  ...indexHtml.matchAll(/<script src="\.\/chapters\/([^"?]+)\?[^"]*"><\/script>/g)
];
const chapterFiles = scriptMatches.map((match) => match[1]);

const context = {
  window: {
    AliceCourtyardChapterFiles: []
  },
  console
};

vm.createContext(context);

for (const file of chapterFiles) {
  const code = fs.readFileSync(path.join(root, "chapters", file), "utf8");
  vm.runInContext(code, context, { filename: file });
}

vm.runInContext(fs.readFileSync(path.join(root, "story-data.js"), "utf8"), context, {
  filename: "story-data.js"
});

const story = context.window.AliceCourtyardStory;
const chapterFileById = Object.fromEntries(
  context.window.AliceCourtyardChapterFiles.map((chapter, index) => [chapter.id, chapterFiles[index]])
);

const rows = [];
let order = 0;

function pushRow(row) {
  rows.push({
    order,
    ...row
  });
  order += 1;
}

pushRow({
  chapterId: "__story__",
  chapterTitle: story.title,
  lineId: "",
  kind: "story_title",
  key: "story:title",
  file: "story-data.js",
  source: story.title
});

story.chapters.forEach((chapter, chapterOrder) => {
  const chapterFile = chapterFileById[chapter.id] || "";

  if (chapter.title) {
    pushRow({
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      lineId: "",
      kind: "chapter_title",
      key: `${chapter.id}:title`,
      file: chapterFile,
      source: chapter.title
    });
  }

  if (chapter.subtitle) {
    pushRow({
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      lineId: "",
      kind: "chapter_subtitle",
      key: `${chapter.id}:subtitle`,
      file: chapterFile,
      source: chapter.subtitle
    });
  }

  if (chapter.location) {
    pushRow({
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      lineId: "",
      kind: "chapter_location",
      key: `${chapter.id}:location`,
      file: chapterFile,
      source: chapter.location
    });
  }

  story.lines
    .filter((line) => line.chapterId === chapter.id)
    .forEach((line, lineOrder) => {
      const translatableFields = [
        ["eyebrow", line.eyebrow],
        ["title", line.title],
        ["subtitle", line.subtitle],
        ["location", line.location],
        ["speaker", line.speaker],
        ["bgmName", line.bgmName],
        ["videoLabel", line.videoLabel],
        ["text", line.text]
      ];

      translatableFields.forEach(([field, value]) => {
        if (typeof value !== "string" || !value.trim()) {
          return;
        }

        pushRow({
          chapterOrder,
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          lineOrder,
          lineId: line.lineId || "",
          kind: `line_${field}`,
          key: `${line.lineId}:${field}`,
          file: chapterFile,
          source: value
        });
      });
    });
});

fs.mkdirSync(outputDir, { recursive: true });

const workbook = {
  generatedAt: new Date().toISOString(),
  chapterCount: story.chapters.length,
  lineCount: story.lines.length,
  rowCount: rows.length,
  rows
};

fs.writeFileSync(
  path.join(outputDir, "story_workbook.json"),
  `${JSON.stringify(workbook, null, 2)}\n`,
  "utf8"
);

const header = [
  "order",
  "chapterOrder",
  "chapterId",
  "chapterTitle",
  "lineOrder",
  "lineId",
  "kind",
  "key",
  "file",
  "source"
];

const tsv = [
  header.join("\t"),
  ...rows.map((row) =>
    header
      .map((column) =>
        String(row[column] ?? "")
          .replace(/\t/g, " ")
          .replace(/\r?\n/g, "\\n")
      )
      .join("\t")
  )
].join("\n");

fs.writeFileSync(path.join(outputDir, "story_workbook.tsv"), `${tsv}\n`, "utf8");

console.log(`Exported ${rows.length} rows to ${outputDir}`);
