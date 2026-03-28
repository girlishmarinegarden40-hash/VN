(function () {
  const chapterFiles = Array.isArray(window.AliceCourtyardChapterFiles)
    ? window.AliceCourtyardChapterFiles.slice()
    : [];
  const localization = window.AliceCourtyardLocalization || null;
  const storyLocalization = localization?.story || {};
  const chapterLocalization = localization?.chapters || {};
  const lineLocalization = localization?.lines || {};

  function toLineId(chapterId, index) {
    return `${chapterId}:${String(index + 1).padStart(3, "0")}`;
  }

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function mergeLocalizedRecord(source, override) {
    if (!override || typeof override !== "object") {
      return source;
    }

    const next = {
      ...source,
      ...override
    };

    if (isPlainObject(source.prop) && isPlainObject(override.prop)) {
      next.prop = {
        ...source.prop,
        ...override.prop
      };
    }

    return next;
  }

  const chapters = chapterFiles.map((chapter) => {
    const localizedChapter = mergeLocalizedRecord(chapter, chapterLocalization[chapter.id]);
    return {
      id: chapter.id,
      title: localizedChapter.title,
      subtitle: localizedChapter.subtitle,
      location: localizedChapter.location
    };
  });

  const lines = chapterFiles.flatMap((chapter) =>
    (chapter.lines || []).map((line, index) => {
      const lineId = line.lineId || toLineId(chapter.id, index);
      const localizedLine = mergeLocalizedRecord(
        {
          ...line,
          chapterId: line.chapterId || chapter.id,
          lineId
        },
        lineLocalization[lineId]
      );

      return {
        ...localizedLine,
        chapterId: localizedLine.chapterId || chapter.id,
        lineId
      };
    })
  );

  // Future-ready line fields:
  // voice: "./assets/voice/ch03/ch03_001_hana.wav"
  // voiceVolume: 0.9
  // video: "./assets/video/op_main.webm"
  // videoLabel: "Opening Movie"
  // videoSkippable: true
  // videoVolume: 1
  // videoMuted: false
  // videoKeepBgm: false
  // videoLoop: false
  // poster: "./assets/bg/bg_garden_night.webp"
  // pauseAfterVideo: 300

  window.AliceCourtyardStory = {
    title: storyLocalization.title || "爱丽丝庭院",
    locale: localization?.locale || "zh-CN",
    chapters,
    lines
  };
})();
