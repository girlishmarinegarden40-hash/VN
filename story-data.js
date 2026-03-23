(function () {
  const chapterFiles = Array.isArray(window.AliceCourtyardChapterFiles)
    ? window.AliceCourtyardChapterFiles.slice()
    : [];

  const chapters = chapterFiles.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    subtitle: chapter.subtitle,
    location: chapter.location
  }));

  const lines = chapterFiles.flatMap((chapter) =>
    (chapter.lines || []).map((line) => ({
      chapterId: line.chapterId || chapter.id,
      ...line
    }))
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
    title: "爱丽丝庭院",
    chapters,
    lines
  };
})();
