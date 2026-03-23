(function () {
  const story = window.AliceCourtyardStory;
  if (!story || !Array.isArray(story.lines) || !story.lines.length) {
    return;
  }

  const storageKey = "alice-courtyard-web-progress";
  const typingSpeed = 18;
  const autoDelay = 1800;

  const ui = {
    chapterName: document.getElementById("chapterName"),
    locationName: document.getElementById("locationName"),
    bgmName: document.getElementById("bgmName"),
    voiceName: document.getElementById("voiceName"),
    speakerTag: document.getElementById("speakerTag"),
    sceneMeta: document.getElementById("sceneMeta"),
    dialogueText: document.getElementById("dialogueText"),
    textboxHint: document.getElementById("textboxHint"),
    backgroundLayer: document.getElementById("backgroundLayer"),
    cgFrame: document.getElementById("cgFrame"),
    cgLayer: document.getElementById("cgLayer"),
    spriteLeft: document.getElementById("spriteLeft"),
    spriteCenter: document.getElementById("spriteCenter"),
    spriteRight: document.getElementById("spriteRight"),
    chapterCard: document.getElementById("chapterCard"),
    chapterCardEyebrow: document.getElementById("chapterCardEyebrow"),
    chapterCardTitle: document.getElementById("chapterCardTitle"),
    chapterCardSubtitle: document.getElementById("chapterCardSubtitle"),
    autoButton: document.getElementById("autoButton"),
    hideTextboxButton: document.getElementById("hideTextboxButton"),
    showTextboxButton: document.getElementById("showTextboxButton"),
    settingButton: document.getElementById("settingButton"),
    muteButton: document.getElementById("muteButton"),
    backlogButton: document.getElementById("backlogButton"),
    resetButton: document.getElementById("resetButton"),
    settingOverlay: document.getElementById("settingOverlay"),
    backlogOverlay: document.getElementById("backlogOverlay"),
    chapterList: document.getElementById("chapterList"),
    backlogList: document.getElementById("backlogList"),
    closeSettingButton: document.getElementById("closeSettingButton"),
    closeBacklogButton: document.getElementById("closeBacklogButton"),
    stageShell: document.getElementById("stageShell"),
    textboxShell: document.getElementById("textboxShell")
  };

  const spriteMap = {
    left: ui.spriteLeft,
    center: ui.spriteCenter,
    right: ui.spriteRight
  };

  const chapterMeta = story.chapters.map((chapter, index) => {
    const startIndex = story.lines.findIndex((line) => line.chapterId === chapter.id);
    const nextChapter = story.chapters[index + 1];
    const nextStartIndex = nextChapter
      ? story.lines.findIndex((line) => line.chapterId === nextChapter.id)
      : story.lines.length;

    return {
      ...chapter,
      order: index,
      startIndex,
      endIndex: nextStartIndex - 1
    };
  });

  const chapterMetaById = Object.fromEntries(chapterMeta.map((chapter) => [chapter.id, chapter]));
  const preloadedImages = new Map();

  const bgmAudio = new Audio();
  bgmAudio.loop = true;
  bgmAudio.volume = 0.55;

  const voiceAudio = new Audio();
  voiceAudio.loop = false;
  voiceAudio.preload = "auto";
  voiceAudio.volume = 0.92;

  const state = {
    index: 0,
    backlog: [],
    autoMode: false,
    autoTimer: null,
    typingTimer: null,
    typingDone: true,
    pendingOnDone: null,
    audioUnlocked: false,
    muted: false,
    currentBgmSrc: null,
    currentBgmLabel: "Not started",
    currentVoiceSrc: null,
    textboxHidden: false,
    unlockedChapters: new Set(),
    completedChapters: new Set()
  };

  hydrateProgressState();
  preloadVisualAssets();
  buildChapterMenu();
  bindEvents();
  renderCurrentLine(true);

  function saveProgress() {
    const payload = {
      index: state.index,
      unlockedChapters: Array.from(state.unlockedChapters),
      completedChapters: Array.from(state.completedChapters)
    };
    window.localStorage.setItem(storageKey, JSON.stringify(payload));
  }

  function bindEvents() {
    ui.stageShell.addEventListener("click", handleAdvanceClick);
    ui.textboxShell.addEventListener("click", handleAdvanceClick);
    ui.stageShell.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
    ui.textboxShell.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });

    ui.autoButton.addEventListener("click", (event) => {
      event.stopPropagation();
      unlockAudio();
      playUiClick();
      toggleAutoMode();
    });

    ui.hideTextboxButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      setTextboxVisibility(false);
    });

    ui.showTextboxButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      setTextboxVisibility(true);
    });

    ui.settingButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.settingOverlay, true);
    });

    ui.backlogButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      renderBacklog();
      setOverlay(ui.backlogOverlay, true);
    });

    ui.muteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      unlockAudio();
      playUiClick();
      toggleMute();
    });

    ui.resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      unlockAudio();
      playUiClick();
      resetProgress();
    });

    ui.closeSettingButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.settingOverlay, false);
    });

    ui.closeBacklogButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.backlogOverlay, false);
    });

    ui.settingOverlay.addEventListener("click", (event) => {
      if (event.target === ui.settingOverlay) {
        setOverlay(ui.settingOverlay, false);
      }
    });

    ui.backlogOverlay.addEventListener("click", (event) => {
      if (event.target === ui.backlogOverlay) {
        setOverlay(ui.backlogOverlay, false);
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        unlockAudio();
        advanceOrComplete();
      }

      if (event.key.toLowerCase() === "a") {
        unlockAudio();
        toggleAutoMode();
      }

      if (event.key.toLowerCase() === "m") {
        unlockAudio();
        toggleMute();
      }

      if (event.key.toLowerCase() === "b") {
        renderBacklog();
        setOverlay(ui.backlogOverlay, true);
      }

      if (event.key.toLowerCase() === "s") {
        setOverlay(ui.settingOverlay, true);
      }

      if (event.key.toLowerCase() === "h") {
        setTextboxVisibility(state.textboxHidden);
      }

      if (event.key === "Escape") {
        setOverlay(ui.settingOverlay, false);
        setOverlay(ui.backlogOverlay, false);
        setTextboxVisibility(true);
      }
    });
  }

  function handleAdvanceClick(event) {
    if (event.target.closest("button")) {
      return;
    }
    if (state.textboxHidden) {
      setTextboxVisibility(true);
      return;
    }
    unlockAudio();
    advanceOrComplete();
  }

  function buildChapterMenu() {
    ui.chapterList.innerHTML = "";

    chapterMeta.forEach((chapter) => {
      const isUnlocked = state.unlockedChapters.has(chapter.id);
      const isCompleted = state.completedChapters.has(chapter.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chapter-item";
      button.disabled = !isUnlocked;
      if (!isUnlocked) {
        button.classList.add("is-locked");
      }

      let statusText = "Locked";
      if (isUnlocked) {
        statusText = isCompleted ? "Read" : "Unlocked";
      }

      button.innerHTML = `<h3>${chapter.title}</h3><span>${chapter.subtitle} · ${statusText}</span>`;
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        if (!isUnlocked) {
          return;
        }
        unlockAudio();
        playUiClick();
        state.index = Math.max(chapter.startIndex, 0);
        saveProgress();
        setOverlay(ui.settingOverlay, false);
        renderCurrentLine(true);
      });

      ui.chapterList.appendChild(button);
    });
  }

  function renderCurrentLine(forceCard) {
    clearAutoTimer();
    clearTypingTimer();
    stopVoice();

    const line = story.lines[state.index];
    const chapter = story.chapters.find((item) => item.id === line.chapterId);
    const sceneLabel = line.location || chapter?.location || "";
    const chapterLabel = chapter ? `${chapter.title} · ${chapter.subtitle}` : story.title;

    ui.chapterName.textContent = chapterLabel;
    ui.locationName.textContent = sceneLabel;
    ui.sceneMeta.textContent = sceneLabel ? `${chapter?.title || story.title} · ${sceneLabel}` : chapterLabel;
    ui.speakerTag.textContent = line.speaker || "旁白";

    applyBackground(line);
    applyCg(line);
    applySprites(line);
    updateBgm(line);
    updateVoice(line);

    if (forceCard || line.type === "card") {
      showChapterCard(line, chapter);
    }

    typeText(line.text || "", () => {
      if (line.sfx) {
        playSfx(line.sfx);
      }

      if (line.type !== "card" && line.text) {
        state.backlog.push({
          speaker: line.speaker || "旁白",
          text: line.text
        });
      }

      if (state.backlog.length > 160) {
        state.backlog.shift();
      }

      if (state.autoMode) {
        state.autoTimer = window.setTimeout(() => {
          if (!ui.settingOverlay.hidden || !ui.backlogOverlay.hidden) {
            return;
          }
          nextLine();
        }, autoDelay);
      }
    });
  }

  function applyBackground(line) {
    ui.backgroundLayer.className = "background-layer";

    if (line.background) {
      preloadImage(line.background);
      ui.backgroundLayer.style.backgroundImage = `url("${line.background}")`;
      return;
    }

    ui.backgroundLayer.classList.add("void");
    ui.backgroundLayer.style.backgroundImage = "";
  }

  function applyCg(line) {
    if (line.cg) {
      ui.cgFrame.classList.remove("is-landscape", "is-portrait", "is-square");
      setImageSourceWhenReady(ui.cgLayer, line.cg, () => {
        ui.cgLayer.classList.add("is-visible");
      });
      return;
    }

    ui.cgLayer.onload = null;
    ui.cgLayer.removeAttribute("src");
    ui.cgLayer.classList.remove("is-visible");
    ui.cgFrame.classList.remove("is-landscape", "is-portrait", "is-square");
  }

  function applySprites(line) {
    Object.values(spriteMap).forEach((sprite) => {
      sprite.onload = null;
      sprite.removeAttribute("src");
      sprite.classList.remove("is-visible", "is-dim");
    });

    if (line.cg) {
      return;
    }

    if (!Array.isArray(line.sprites)) {
      return;
    }

    line.sprites.forEach((spriteDef) => {
      const target = spriteMap[spriteDef.slot];
      if (!target) {
        return;
      }
      setImageSourceWhenReady(target, spriteDef.src, () => {
        target.classList.add("is-visible");
        if (spriteDef.dim) {
          target.classList.add("is-dim");
        }
      });
    });
  }

  function updateBgm(line) {
    if (!line.bgm) {
      ui.bgmName.textContent = state.currentBgmLabel;
      return;
    }

    state.currentBgmLabel = line.bgmName || "Playing";
    ui.bgmName.textContent = state.currentBgmLabel;

    if (state.currentBgmSrc === line.bgm) {
      return;
    }

    state.currentBgmSrc = line.bgm;
    bgmAudio.src = line.bgm;

    if (state.audioUnlocked && !state.muted) {
      bgmAudio.play().catch(() => {});
    }
  }

  function updateVoice(line) {
    if (!line.voice) {
      state.currentVoiceSrc = null;
      ui.voiceName.textContent = "Not set";
      return;
    }

    state.currentVoiceSrc = line.voice;
    ui.voiceName.textContent = line.speaker ? `${line.speaker} · Ready` : "Ready";
    voiceAudio.src = line.voice;
    voiceAudio.volume = typeof line.voiceVolume === "number" ? line.voiceVolume : 0.92;

    if (state.audioUnlocked && !state.muted) {
      voiceAudio.play().catch(() => {});
    }
  }

  function showChapterCard(line, chapter) {
    ui.chapterCardEyebrow.textContent = line.eyebrow || "Alice Courtyard";
    ui.chapterCardTitle.textContent = line.title || chapter?.title || "";
    ui.chapterCardSubtitle.textContent = line.subtitle || chapter?.subtitle || "";
    ui.chapterCard.classList.add("is-visible");
    window.setTimeout(() => {
      ui.chapterCard.classList.remove("is-visible");
    }, 1650);
  }

  function typeText(text, onDone) {
    ui.dialogueText.textContent = "";
    state.typingDone = false;
    state.pendingOnDone = onDone;
    ui.textboxHint.textContent = state.autoMode ? "Auto playing" : "Tap to continue";

    if (!text) {
      state.typingDone = true;
      const callback = state.pendingOnDone;
      state.pendingOnDone = null;
      callback();
      return;
    }

    let cursor = 0;
    state.typingTimer = window.setInterval(() => {
      cursor += 1;
      ui.dialogueText.textContent = text.slice(0, cursor);
      if (cursor >= text.length) {
        clearTypingTimer();
        state.typingDone = true;
        const callback = state.pendingOnDone;
        state.pendingOnDone = null;
        callback();
      }
    }, typingSpeed);
  }

  function completeTyping() {
    clearTypingTimer();
    const line = story.lines[state.index];
    ui.dialogueText.textContent = line.text || "";
    state.typingDone = true;
    if (state.pendingOnDone) {
      const callback = state.pendingOnDone;
      state.pendingOnDone = null;
      callback();
    }
  }

  function advanceOrComplete() {
    if (!ui.settingOverlay.hidden || !ui.backlogOverlay.hidden) {
      return;
    }

    if (!state.typingDone) {
      completeTyping();
      return;
    }

    playAdvanceSfx();
    nextLine();
  }

  function nextLine() {
    clearAutoTimer();
    const currentLine = story.lines[state.index];
    const currentChapterId = currentLine.chapterId;

    if (state.index >= story.lines.length - 1) {
      markChapterComplete(currentChapterId);
      buildChapterMenu();
      saveProgress();
      return;
    }

    state.index += 1;
    const nextChapterId = story.lines[state.index].chapterId;

    if (nextChapterId !== currentChapterId) {
      markChapterComplete(currentChapterId);
      unlockChapter(nextChapterId);
      buildChapterMenu();
    }

    saveProgress();
    renderCurrentLine();
  }

  function toggleAutoMode() {
    state.autoMode = !state.autoMode;
    ui.autoButton.textContent = state.autoMode ? "Auto On" : "Auto";
    ui.autoButton.classList.toggle("is-active", state.autoMode);

    if (!state.autoMode) {
      clearAutoTimer();
      ui.textboxHint.textContent = "Tap to continue";
      return;
    }

    if (state.typingDone) {
      state.autoTimer = window.setTimeout(nextLine, autoDelay);
    }
  }

  function toggleMute() {
    state.muted = !state.muted;
    ui.muteButton.textContent = state.muted ? "Unmute" : "Mute";
    bgmAudio.muted = state.muted;
    voiceAudio.muted = state.muted;
  }

  function renderBacklog() {
    ui.backlogList.innerHTML = "";
    const fragment = document.createDocumentFragment();

    state.backlog.slice().reverse().forEach((item) => {
      const wrapper = document.createElement("article");
      wrapper.className = "backlog-item";
      wrapper.innerHTML = `<p class="backlog-speaker">${item.speaker}</p><p>${item.text}</p>`;
      fragment.appendChild(wrapper);
    });

    ui.backlogList.appendChild(fragment);
  }

  function setOverlay(target, visible) {
    target.hidden = !visible;
  }

  function setTextboxVisibility(visible) {
    state.textboxHidden = !visible;
    ui.textboxShell.classList.toggle("is-hidden", !visible);
    ui.showTextboxButton.hidden = visible;
    ui.hideTextboxButton.textContent = visible ? "Hide" : "Hidden";
  }

  function playUiClick() {
    playSfx("./assets/sfx/sfx_ui_click.wav", 0.4);
  }

  function playAdvanceSfx() {
    playSfx("./assets/sfx/sfx_ui_advance.wav", 0.45);
  }

  function playSfx(src, volume) {
    if (!state.audioUnlocked || state.muted || !src) {
      return;
    }

    const audio = new Audio(src);
    audio.volume = typeof volume === "number" ? volume : 0.5;
    audio.play().catch(() => {});
  }

  function unlockAudio() {
    if (state.audioUnlocked) {
      return;
    }

    state.audioUnlocked = true;
    if (state.currentBgmSrc && !state.muted) {
      bgmAudio.play().catch(() => {});
    }
    if (state.currentVoiceSrc && !state.muted) {
      voiceAudio.play().catch(() => {});
    }
  }

  function clearTypingTimer() {
    if (state.typingTimer) {
      window.clearInterval(state.typingTimer);
      state.typingTimer = null;
    }
  }

  function clearAutoTimer() {
    if (state.autoTimer) {
      window.clearTimeout(state.autoTimer);
      state.autoTimer = null;
    }
  }

  function stopVoice() {
    if (!voiceAudio.src) {
      return;
    }
    voiceAudio.pause();
    voiceAudio.currentTime = 0;
  }

  function resetProgress() {
    clearAutoTimer();
    clearTypingTimer();
    state.index = 0;
    state.backlog = [];
    state.pendingOnDone = null;
    state.unlockedChapters = new Set([chapterMeta[0]?.id].filter(Boolean));
    state.completedChapters = new Set();
    window.localStorage.removeItem(storageKey);
    setOverlay(ui.settingOverlay, false);
    setOverlay(ui.backlogOverlay, false);
    setTextboxVisibility(true);
    renderCurrentLine(true);
    buildChapterMenu();
    saveProgress();
  }

  ui.cgLayer.addEventListener("load", () => {
    const width = ui.cgLayer.naturalWidth || 0;
    const height = ui.cgLayer.naturalHeight || 0;

    ui.cgFrame.classList.remove("is-landscape", "is-portrait", "is-square");

    if (!width || !height) {
      return;
    }

    if (width > height * 1.08) {
      ui.cgFrame.classList.add("is-landscape");
      return;
    }

    if (height > width * 1.08) {
      ui.cgFrame.classList.add("is-portrait");
      return;
    }

    ui.cgFrame.classList.add("is-square");
  });

  function preloadVisualAssets() {
    const imageSources = new Set();

    story.lines.forEach((line) => {
      if (line.background) {
        imageSources.add(line.background);
      }
      if (line.cg) {
        imageSources.add(line.cg);
      }
      if (Array.isArray(line.sprites)) {
        line.sprites.forEach((sprite) => {
          if (sprite?.src) {
            imageSources.add(sprite.src);
          }
        });
      }
    });

    imageSources.forEach((src) => preloadImage(src));
  }

  function preloadImage(src) {
    if (!src) {
      return null;
    }

    if (preloadedImages.has(src)) {
      return preloadedImages.get(src);
    }

    const img = new Image();
    img.decoding = "async";

    const entry = {
      img,
      loaded: false
    };

    img.addEventListener("load", () => {
      entry.loaded = true;
    });

    img.src = src;
    preloadedImages.set(src, entry);
    return entry;
  }

  function setImageSourceWhenReady(target, src, onReady) {
    const entry = preloadImage(src);
    if (!entry) {
      return;
    }

    const reveal = () => {
      if (target.dataset.assetSrc !== src) {
        return;
      }
      target.onload = null;
      onReady();
    };

    target.dataset.assetSrc = src;
    target.classList.remove("is-visible", "is-dim");

    if (entry.loaded || (entry.img.complete && entry.img.naturalWidth > 0)) {
      target.src = src;
      reveal();
      return;
    }

    target.onload = reveal;
    target.src = src;
  }

  function hydrateProgressState() {
    const raw = window.localStorage.getItem(storageKey);

    if (!raw) {
      unlockChapter(chapterMeta[0]?.id);
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      if (typeof parsed.index === "number") {
        state.index = clampIndex(parsed.index);
      } else {
        state.index = 0;
      }

      if (Array.isArray(parsed.unlockedChapters)) {
        parsed.unlockedChapters.forEach((id) => unlockChapter(id));
      }

      if (Array.isArray(parsed.completedChapters)) {
        parsed.completedChapters.forEach((id) => {
          if (chapterMetaById[id]) {
            state.completedChapters.add(id);
          }
        });
      }
    } catch (error) {
      const parsedNumber = Number.parseInt(raw, 10);
      state.index = Number.isNaN(parsedNumber) ? 0 : clampIndex(parsedNumber);
    }

    if (!state.unlockedChapters.size) {
      unlockChapter(chapterMeta[0]?.id);
    }

    unlockChaptersUpToIndex(state.index);
  }

  function unlockChapter(chapterId) {
    if (!chapterId || !chapterMetaById[chapterId]) {
      return;
    }
    state.unlockedChapters.add(chapterId);
  }

  function markChapterComplete(chapterId) {
    if (!chapterId || !chapterMetaById[chapterId]) {
      return;
    }
    state.completedChapters.add(chapterId);
    const nextOrder = chapterMetaById[chapterId].order + 1;
    const nextChapter = chapterMeta[nextOrder];
    if (nextChapter) {
      unlockChapter(nextChapter.id);
    }
  }

  function unlockChaptersUpToIndex(index) {
    chapterMeta.forEach((chapter) => {
      if (index >= chapter.startIndex) {
        unlockChapter(chapter.id);
      }
      if (index > chapter.endIndex) {
        state.completedChapters.add(chapter.id);
      }
    });
  }

  function clampIndex(index) {
    return Math.min(Math.max(index, 0), story.lines.length - 1);
  }
})();
