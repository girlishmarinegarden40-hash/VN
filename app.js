(function () {
  const story = window.AliceCourtyardStory;
  if (!story || !Array.isArray(story.lines) || !story.lines.length) {
    return;
  }

  const storageKey = "alice-courtyard-web-progress";
  const defaultTypingSpeed = 18;
  const defaultAutoDelay = 1800;
  const defaultCardDuration = 2150;

  const ui = {
    coverOverlay: document.getElementById("coverOverlay"),
    coverStartButton: document.getElementById("coverStartButton"),
    coverContinueButton: document.getElementById("coverContinueButton"),
    coverGalleryButton: document.getElementById("coverGalleryButton"),
    coverCreditsButton: document.getElementById("coverCreditsButton"),
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
    videoShell: document.getElementById("videoShell"),
    videoLayer: document.getElementById("videoLayer"),
    videoLabel: document.getElementById("videoLabel"),
    videoSkipButton: document.getElementById("videoSkipButton"),
    spriteLayer: document.getElementById("spriteLayer"),
    spriteLeft: document.getElementById("spriteLeft"),
    spriteCenter: document.getElementById("spriteCenter"),
    spriteRight: document.getElementById("spriteRight"),
    chapterCard: document.getElementById("chapterCard"),
    chapterCardEyebrow: document.getElementById("chapterCardEyebrow"),
    chapterCardTitle: document.getElementById("chapterCardTitle"),
    chapterCardSubtitle: document.getElementById("chapterCardSubtitle"),
    propCard: document.getElementById("propCard"),
    propImage: document.getElementById("propImage"),
    propTitle: document.getElementById("propTitle"),
    propCaption: document.getElementById("propCaption"),
    autoButton: document.getElementById("autoButton"),
    hideTextboxButton: document.getElementById("hideTextboxButton"),
    showTextboxButton: document.getElementById("showTextboxButton"),
    settingButton: document.getElementById("settingButton"),
    muteButton: document.getElementById("muteButton"),
    galleryButton: document.getElementById("galleryButton"),
    returnToTitleButton: document.getElementById("returnToTitleButton"),
    backlogButton: document.getElementById("backlogButton"),
    resetButton: document.getElementById("resetButton"),
    settingOverlay: document.getElementById("settingOverlay"),
    backlogOverlay: document.getElementById("backlogOverlay"),
    galleryOverlay: document.getElementById("galleryOverlay"),
    creditsOverlay: document.getElementById("creditsOverlay"),
    confirmOverlay: document.getElementById("confirmOverlay"),
    chapterList: document.getElementById("chapterList"),
    backlogList: document.getElementById("backlogList"),
    galleryTabCg: document.getElementById("galleryTabCg"),
    galleryTabBgm: document.getElementById("galleryTabBgm"),
    gallerySectionCg: document.getElementById("gallerySectionCg"),
    gallerySectionBgm: document.getElementById("gallerySectionBgm"),
    galleryCgList: document.getElementById("galleryCgList"),
    galleryBgmList: document.getElementById("galleryBgmList"),
    cgPreviewOverlay: document.getElementById("cgPreviewOverlay"),
    cgPreviewTitle: document.getElementById("cgPreviewTitle"),
    cgPreviewChapter: document.getElementById("cgPreviewChapter"),
    cgPreviewImage: document.getElementById("cgPreviewImage"),
    closeSettingButton: document.getElementById("closeSettingButton"),
    closeBacklogButton: document.getElementById("closeBacklogButton"),
    closeGalleryButton: document.getElementById("closeGalleryButton"),
    closeCgPreviewButton: document.getElementById("closeCgPreviewButton"),
    closeCreditsButton: document.getElementById("closeCreditsButton"),
    cancelConfirmButton: document.getElementById("cancelConfirmButton"),
    cancelStartButton: document.getElementById("cancelStartButton"),
    confirmStartButton: document.getElementById("confirmStartButton"),
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
  const preloadedVideos = new Map();
  const galleryCgs = collectUniqueCgs();
  const galleryBgms = collectUniqueBgms();

  const bgmAudio = new Audio();
  bgmAudio.loop = true;
  bgmAudio.volume = 0.55;

  const galleryAudio = new Audio();
  galleryAudio.loop = true;
  galleryAudio.volume = 0.55;

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
    preLineTimer: null,
    bgmFadeTimer: null,
    chapterCardTimer: null,
    sceneGateTimer: null,
    cgRevealTimer: null,
    propDisplayTimer: null,
    propHideTimer: null,
    typingDone: true,
    pendingOnDone: null,
    pendingLineStarter: null,
    deferredLineStarter: null,
    audioUnlocked: false,
    muted: false,
    currentBgmSrc: null,
    currentBgmTargetVolume: 0.55,
    currentBgmLabel: "Not started",
    currentVoiceSrc: null,
    currentGalleryBgmSrc: null,
    currentVideoSrc: null,
    coverActive: true,
    chapterCardActive: false,
    cgRevealLocked: false,
    videoActive: false,
    videoSkippable: false,
    awaitingCgRevealTap: false,
    userTextboxHidden: false,
    systemTextboxHidden: false,
    textboxHidden: false,
    unlockedChapters: new Set(),
    completedChapters: new Set(),
    seenCgs: new Set(),
    seenBgms: new Set(),
    currentProp: null,
    propLockedUntil: 0,
    renderToken: 0
  };

  hydrateProgressState();
  preloadVisualAssets();
  buildChapterMenu();
  bindEvents();
  openCover();

  function saveProgress() {
    const payload = {
      index: state.index,
      unlockedChapters: Array.from(state.unlockedChapters),
      completedChapters: Array.from(state.completedChapters),
      seenCgs: Array.from(state.seenCgs),
      seenBgms: Array.from(state.seenBgms)
    };
    window.localStorage.setItem(storageKey, JSON.stringify(payload));
  }

  function bindEvents() {
    ui.stageShell.addEventListener("pointerup", handleAdvanceClick);
    ui.textboxShell.addEventListener("pointerup", handleAdvanceClick);

    ui.stageShell.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
    ui.textboxShell.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
    ui.propCard.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });

    ui.propCard.addEventListener("click", (event) => {
      if (!state.currentProp) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      openCgPreview({
        src: state.currentProp.src,
        label: state.currentProp.title,
        chapter: state.currentProp.caption || state.currentProp.chapter || "Story Item"
      });
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

    ui.returnToTitleButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      returnToTitle();
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

    ui.galleryOverlay.addEventListener("click", (event) => {
      if (event.target === ui.galleryOverlay) {
        setOverlay(ui.galleryOverlay, false);
      }
    });

    ui.cgPreviewOverlay.addEventListener("click", (event) => {
      if (event.target === ui.cgPreviewOverlay) {
        setOverlay(ui.cgPreviewOverlay, false);
      }
    });

    ui.creditsOverlay.addEventListener("click", (event) => {
      if (event.target === ui.creditsOverlay) {
        setOverlay(ui.creditsOverlay, false);
      }
    });

    ui.confirmOverlay.addEventListener("click", (event) => {
      if (event.target === ui.confirmOverlay) {
        setOverlay(ui.confirmOverlay, false);
      }
    });

    ui.galleryButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      renderGallery();
      setGalleryTab("cg");
      setOverlay(ui.galleryOverlay, true);
    });

    ui.coverGalleryButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      renderGallery();
      setGalleryTab("cg");
      setOverlay(ui.galleryOverlay, true);
    });

    ui.galleryTabCg.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setGalleryTab("cg");
    });

    ui.galleryTabBgm.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setGalleryTab("bgm");
    });

    ui.coverCreditsButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.creditsOverlay, true);
    });

    ui.closeGalleryButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.galleryOverlay, false);
    });

    ui.closeCgPreviewButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.cgPreviewOverlay, false);
    });

    ui.closeCreditsButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.creditsOverlay, false);
    });

    ui.cancelConfirmButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.confirmOverlay, false);
    });

    ui.cancelStartButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.confirmOverlay, false);
    });

    ui.confirmStartButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      unlockAudio();
      playUiClick();
      setOverlay(ui.confirmOverlay, false);
      state.coverActive = false;
      setOverlay(ui.coverOverlay, false);
      resetProgress();
    });

    ui.coverStartButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.confirmOverlay, true);
    });

    ui.coverContinueButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      unlockAudio();
      playUiClick();
      state.coverActive = false;
      setOverlay(ui.coverOverlay, false);
      renderCurrentLine(false);
    });

    ui.videoSkipButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!state.videoActive || !state.videoSkippable) {
        return;
      }
      playUiClick();
      finishVideoLine(true);
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
        setOverlay(ui.galleryOverlay, false);
        setOverlay(ui.cgPreviewOverlay, false);
        setOverlay(ui.creditsOverlay, false);
        setOverlay(ui.confirmOverlay, false);
        setTextboxVisibility(true);
      }
    });
  }

  function handleAdvanceClick(event) {
    event.stopPropagation();

    if (event.target.closest("button")) {
      return;
    }

    if (state.coverActive || state.chapterCardActive || state.cgRevealLocked || state.videoActive) {
      return;
    }

    if (resumeDeferredSceneIfReady()) {
      unlockAudio();
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

      button.innerHTML = `<h3>${chapter.title}</h3><span>${chapter.subtitle} - ${statusText}</span>`;
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
    clearPreLineTimer();
    clearChapterCardTimer();
    clearCgRevealTimer();
    clearPropTimers();
    stopVoice();
    stopVideoPlayback(false);

    const line = story.lines[state.index];
    const chapter = story.chapters.find((item) => item.id === line.chapterId);
    const sceneLabel = line.location || chapter?.location || "";
    const chapterLabel = chapter ? `${chapter.title} - ${chapter.subtitle}` : story.title;

    ui.chapterName.textContent = chapterLabel;
    ui.locationName.textContent = sceneLabel;
    ui.sceneMeta.textContent = sceneLabel ? `${chapter?.title || story.title} - ${sceneLabel}` : chapterLabel;
    ui.speakerTag.textContent = line.speaker || "Narration";

    applyBackground(line);
    applyCg(line);
    applySprites(line);
    applyProp(line, chapter);
    updateBgm(line);
    ui.textboxShell.classList.toggle("is-cg-scene", Boolean(line.cg));

    if (line.video || line.type === "video") {
      startVideoLine(line, chapter);
      return;
    }

    const renderToken = ++state.renderToken;
    const beginLine = (skipTyping = false) => {
      if (renderToken !== state.renderToken) {
        return;
      }

      state.preLineTimer = null;
      state.pendingLineStarter = null;

      if (line.sfxAtStart) {
        playSfx(line.sfxAtStart, line.sfxAtStartVolume);
      }

      updateVoice(line);

      typeText(
        line.text || "",
        { ...line, instant: skipTyping || Boolean(line.instant) },
        () => {
          if (line.type === "card" && !line.text) {
            const autoCardDelay = (line.cardDuration ?? defaultCardDuration) + (line.pauseAfter ?? 0);
            state.autoTimer = window.setTimeout(() => {
              if (state.coverActive || !ui.settingOverlay.hidden || !ui.backlogOverlay.hidden || !ui.galleryOverlay.hidden || !ui.cgPreviewOverlay.hidden || !ui.creditsOverlay.hidden || !ui.confirmOverlay.hidden) {
                return;
              }
              nextLine();
            }, autoCardDelay);
            return;
          }

          if (line.sfx) {
            playSfx(line.sfx, line.sfxVolume);
          }

          if (line.type !== "card" && line.text) {
            state.backlog.push({
              speaker: line.speaker || "Narration",
              text: line.text
            });
          }

          if (state.backlog.length > 160) {
            state.backlog.shift();
          }

          if (state.autoMode) {
            const autoDelay = line.autoDelay ?? defaultAutoDelay;
            const pauseAfter = line.pauseAfter ?? 0;
            state.autoTimer = window.setTimeout(() => {
              if (state.coverActive || !ui.settingOverlay.hidden || !ui.backlogOverlay.hidden || !ui.galleryOverlay.hidden || !ui.cgPreviewOverlay.hidden || !ui.creditsOverlay.hidden || !ui.confirmOverlay.hidden) {
                return;
              }
              nextLine();
            }, autoDelay + pauseAfter);
          }
        }
      );
    };

    const startWithPause = (skipTyping = false) => {
      const pauseBefore = line.pauseBefore ?? 0;
      if (pauseBefore > 0) {
        ui.dialogueText.textContent = "";
        state.typingDone = false;
        state.pendingOnDone = null;
        state.pendingLineStarter = beginLine;
        ui.textboxHint.textContent = state.autoMode ? "Auto playing" : "Tap to continue";
        state.preLineTimer = window.setTimeout(() => {
          state.preLineTimer = null;
          beginLine(skipTyping);
        }, pauseBefore);
        return;
      }

      beginLine(skipTyping);
    };

    const startAfterCgReveal = () => {
      if (renderToken !== state.renderToken) {
        return;
      }

      if (shouldTriggerFirstCgReveal(line.cg)) {
        state.awaitingCgRevealTap = false;
        state.cgRevealLocked = true;
        state.deferredLineStarter = () => startWithPause(false);
        markCgAsSeen(line.cg);
        setSystemTextboxHidden(true);
        ui.textboxHint.textContent = "CG moment";
        state.cgRevealTimer = window.setTimeout(() => {
          if (renderToken !== state.renderToken) {
            return;
          }
          state.cgRevealTimer = null;
          state.cgRevealLocked = false;
          state.awaitingCgRevealTap = true;
          ui.textboxHint.textContent = "Tap to continue";
        }, 2000);
        return;
      }

      setSystemTextboxHidden(false);
      startWithPause(false);
    };

    if (line.type === "card") {
      setSystemTextboxHidden(true);
      state.chapterCardActive = true;
      showChapterCard(line, chapter, true);
      startWithPause(false);
      return;
    }

    if (forceCard) {
      setSystemTextboxHidden(true);
      state.chapterCardActive = true;
      showChapterCard(line, chapter, true);
      state.sceneGateTimer = window.setTimeout(() => {
        if (renderToken !== state.renderToken) {
          return;
        }
        state.sceneGateTimer = null;
        state.chapterCardActive = false;
        startAfterCgReveal();
      }, line.cardDuration ?? defaultCardDuration);
      return;
    }

    startAfterCgReveal();
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

    if (line.cg || !Array.isArray(line.sprites)) {
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

  function applyProp(line, chapter) {
    const prop = normalizeProp(line.prop, chapter);
    state.currentProp = prop;
    clearPropTimers();

    ui.propCard.classList.remove("is-visible");

    if (!prop) {
      state.propLockedUntil = 0;
      ui.spriteLayer.classList.remove("is-suppressed");
      ui.propCard.hidden = true;
      ui.propImage.onload = null;
      ui.propImage.removeAttribute("src");
      ui.propTitle.textContent = "";
      ui.propCaption.textContent = "";
      ui.propCaption.hidden = true;
      return;
    }

    ui.propCard.hidden = false;
    ui.spriteLayer.classList.add("is-suppressed");
    ui.propTitle.textContent = prop.title;
    ui.propCaption.textContent = prop.caption || "";
    ui.propCaption.hidden = !prop.caption;
    ui.propCard.setAttribute("aria-label", `Open ${prop.title}`);

    setImageSourceWhenReady(ui.propImage, prop.src, () => {
      const displayMs = prop.displayMs ?? 3000;
      state.propLockedUntil = Date.now() + displayMs;
      ui.propCard.classList.add("is-visible");
    });
  }

  function updateBgm(line) {
    if (!line.bgm) {
      ui.bgmName.textContent = state.currentBgmLabel;
      return;
    }

    state.currentBgmLabel = line.bgmName || "Playing";
    ui.bgmName.textContent = state.currentBgmLabel;
    markBgmAsSeen(line.bgm);

    const targetVolume = typeof line.bgmVolume === "number" ? line.bgmVolume : 0.55;
    if (state.currentBgmSrc === line.bgm) {
      state.currentBgmTargetVolume = targetVolume;
      if (!state.muted) {
        bgmAudio.volume = targetVolume;
        if (state.audioUnlocked && bgmAudio.paused) {
          bgmAudio.play().catch(() => {});
        }
      }
      return;
    }

    state.currentBgmSrc = line.bgm;
    state.currentBgmTargetVolume = targetVolume;
    transitionBgm(line.bgm, targetVolume, line.bgmFadeMs ?? 650);
  }

  function startVideoLine(line, chapter) {
    const src = line.video;
    if (!src) {
      nextLine();
      return;
    }

    const renderToken = ++state.renderToken;
    state.videoActive = true;
    state.videoSkippable = line.videoSkippable !== false;
    state.currentVideoSrc = src;

    ui.videoShell.hidden = false;
    ui.videoShell.classList.add("is-visible");
    ui.videoLabel.hidden = !line.videoLabel;
    ui.videoLabel.textContent = line.videoLabel || "";
    ui.videoSkipButton.hidden = !state.videoSkippable;

    setSystemTextboxHidden(true);
    ui.sceneMeta.textContent = line.location || chapter?.location || "Movie";
    ui.speakerTag.textContent = line.speaker || "Movie";
    ui.dialogueText.textContent = "";
    ui.textboxHint.textContent = state.videoSkippable ? "Video playing" : "Video locked";

    const shouldKeepBgm = line.videoKeepBgm === true;
    if (!shouldKeepBgm) {
      bgmAudio.pause();
    }

    preloadVideo(src);
    ui.videoLayer.pause();
    ui.videoLayer.removeAttribute("poster");
    ui.videoLayer.currentTime = 0;
    ui.videoLayer.src = src;
    ui.videoLayer.loop = Boolean(line.videoLoop);
    ui.videoLayer.muted = state.muted || !state.audioUnlocked || line.videoMuted === true;
    ui.videoLayer.volume = typeof line.videoVolume === "number" ? line.videoVolume : 1;
    if (line.poster) {
      ui.videoLayer.poster = line.poster;
      preloadImage(line.poster);
    }

    const onEnded = () => {
      if (renderToken !== state.renderToken) {
        return;
      }
      finishVideoLine(false, line.pauseAfterVideo ?? 0);
    };

    const onError = () => {
      if (renderToken !== state.renderToken) {
        return;
      }
      finishVideoLine(true, 0);
    };

    ui.videoLayer.onended = onEnded;
    ui.videoLayer.onerror = onError;
    ui.videoLayer.onloadedmetadata = null;

    ui.videoLayer.play().catch(() => {
      // Keep the video frame visible and allow manual skip if autoplay is blocked.
      ui.textboxHint.textContent = state.videoSkippable ? "Tap Skip to continue" : "Video ready";
    });
  }

  function finishVideoLine(skipped, pauseAfterVideo) {
    if (!state.videoActive) {
      return;
    }

    stopVideoPlayback(true);
    const delay = Math.max(0, pauseAfterVideo || 0);
    if (delay > 0) {
      state.autoTimer = window.setTimeout(() => {
        nextLine();
      }, delay);
      return;
    }

    nextLine();
  }

  function stopVideoPlayback(restoreStoryBgm) {
    ui.videoLayer.onended = null;
    ui.videoLayer.onerror = null;
    ui.videoLayer.onloadedmetadata = null;

    if (!ui.videoLayer.paused) {
      ui.videoLayer.pause();
    }

    if (ui.videoLayer.currentTime) {
      ui.videoLayer.currentTime = 0;
    }

    ui.videoLayer.removeAttribute("src");
    ui.videoLayer.load();

    ui.videoShell.classList.remove("is-visible");
    ui.videoShell.hidden = true;
    ui.videoLabel.hidden = true;
    ui.videoLabel.textContent = "";
    ui.videoSkipButton.hidden = true;

    if (state.videoActive && restoreStoryBgm && state.audioUnlocked && !state.muted && state.currentBgmSrc && bgmAudio.paused) {
      bgmAudio.volume = state.currentBgmTargetVolume;
      bgmAudio.play().catch(() => {});
    }

    state.videoActive = false;
    state.videoSkippable = false;
    state.currentVideoSrc = null;
  }

  function updateVoice(line) {
    if (!line.voice) {
      state.currentVoiceSrc = null;
      ui.voiceName.textContent = "Not set";
      return;
    }

    if (line.voiceReady === false) {
      state.currentVoiceSrc = null;
      ui.voiceName.textContent = line.speaker ? `${line.speaker} - Reserved` : "Reserved";
      return;
    }

    state.currentVoiceSrc = line.voice;
    ui.voiceName.textContent = line.speaker ? `${line.speaker} - Ready` : "Ready";
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
    ui.chapterCard.classList.add("is-cinematic");
    ui.chapterCard.classList.add("is-visible");

    state.chapterCardTimer = window.setTimeout(() => {
      state.chapterCardTimer = null;
      state.chapterCardActive = false;
      ui.chapterCard.classList.remove("is-visible");
      ui.chapterCard.classList.remove("is-cinematic");
    }, line.cardDuration ?? defaultCardDuration);
  }

  function typeText(text, line, onDone) {
    ui.dialogueText.textContent = "";
    state.typingDone = false;
    state.pendingOnDone = onDone;
    ui.textboxHint.textContent = state.autoMode ? "Auto playing" : "Tap to continue";

    const lineTypingSpeed = line?.textSpeed ?? defaultTypingSpeed;
    if (!text || line?.instant || lineTypingSpeed <= 0) {
      ui.dialogueText.textContent = text || "";
      state.typingDone = true;
      const callback = state.pendingOnDone;
      state.pendingOnDone = null;
      if (callback) {
        callback();
      }
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
        if (callback) {
          callback();
        }
      }
    }, lineTypingSpeed);
  }

  function completeTyping() {
    if (state.preLineTimer && state.pendingLineStarter) {
      const starter = state.pendingLineStarter;
      clearPreLineTimer();
      starter(true);
      return;
    }

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
    if (!ui.settingOverlay.hidden || !ui.backlogOverlay.hidden || !ui.galleryOverlay.hidden || !ui.cgPreviewOverlay.hidden || !ui.creditsOverlay.hidden || !ui.confirmOverlay.hidden) {
      return;
    }

    if (state.coverActive || state.chapterCardActive || state.cgRevealLocked || state.videoActive) {
      return;
    }

    if (resumeDeferredSceneIfReady()) {
      return;
    }

    if (getRemainingPropLockMs() > 0) {
      return;
    }

    if (!state.typingDone || state.preLineTimer) {
      completeTyping();
      return;
    }

    playAdvanceSfx();
    nextLine();
  }

  function nextLine() {
    const remainingPropLockMs = getRemainingPropLockMs();
    if (remainingPropLockMs > 0) {
      clearAutoTimer();
      state.autoTimer = window.setTimeout(nextLine, remainingPropLockMs);
      return;
    }

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

    if (state.typingDone && !state.preLineTimer && !state.coverActive) {
      state.autoTimer = window.setTimeout(nextLine, defaultAutoDelay);
    }
  }

  function toggleMute() {
    state.muted = !state.muted;
    ui.muteButton.textContent = state.muted ? "Unmute" : "Mute";
    bgmAudio.muted = state.muted;
    voiceAudio.muted = state.muted;
    galleryAudio.muted = state.muted;
    ui.videoLayer.muted = state.muted || !state.audioUnlocked;

    if (!state.muted && state.audioUnlocked && state.currentBgmSrc && bgmAudio.paused) {
      bgmAudio.volume = state.currentBgmTargetVolume;
      bgmAudio.play().catch(() => {});
    }
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

    if (target === ui.galleryOverlay) {
      if (visible) {
        ui.textboxHint.textContent = "Gallery open";
      } else {
        stopGalleryBgm(true);
        ui.textboxHint.textContent = state.autoMode ? "Auto playing" : "Tap to continue";
      }
    }
  }

  function setTextboxVisibility(visible) {
    state.userTextboxHidden = !visible;
    syncTextboxVisibility();
  }

  function setSystemTextboxHidden(hidden) {
    state.systemTextboxHidden = hidden;
    syncTextboxVisibility();
  }

  function syncTextboxVisibility() {
    state.textboxHidden = state.userTextboxHidden || state.systemTextboxHidden;
    ui.textboxShell.classList.toggle("is-hidden", state.textboxHidden);
    ui.showTextboxButton.hidden = !state.textboxHidden || state.systemTextboxHidden;
    ui.hideTextboxButton.textContent = "Hide";
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
    ui.videoLayer.muted = state.muted;
    if (state.currentBgmSrc && !state.muted) {
      bgmAudio.play().catch(() => {});
    }
    if (state.currentVoiceSrc && !state.muted) {
      voiceAudio.play().catch(() => {});
    }
    if (state.videoActive && !state.muted) {
      ui.videoLayer.play().catch(() => {});
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

  function clearPreLineTimer() {
    if (state.preLineTimer) {
      window.clearTimeout(state.preLineTimer);
      state.preLineTimer = null;
    }
    state.pendingLineStarter = null;
  }

  function clearBgmFadeTimer() {
    if (state.bgmFadeTimer) {
      window.clearInterval(state.bgmFadeTimer);
      state.bgmFadeTimer = null;
    }
  }

  function stopVoice() {
    if (!voiceAudio.src) {
      return;
    }
    voiceAudio.pause();
    voiceAudio.currentTime = 0;
  }

  function transitionBgm(src, targetVolume, fadeMs) {
    clearBgmFadeTimer();

    const startNextTrack = () => {
      bgmAudio.src = src;
      bgmAudio.volume = state.muted ? 0 : 0;

      if (state.audioUnlocked && !state.muted) {
        bgmAudio.play().catch(() => {});
      }

      const steps = Math.max(1, Math.round(fadeMs / 50));
      let step = 0;
      state.bgmFadeTimer = window.setInterval(() => {
        step += 1;
        const progress = step / steps;
        bgmAudio.volume = state.muted ? 0 : targetVolume * progress;
        if (step >= steps) {
          clearBgmFadeTimer();
          bgmAudio.volume = state.muted ? 0 : targetVolume;
        }
      }, 50);
    };

    if (!bgmAudio.src || !state.audioUnlocked || state.muted) {
      startNextTrack();
      return;
    }

    const fromVolume = bgmAudio.volume;
    const steps = Math.max(1, Math.round(fadeMs / 50));
    let step = 0;
    state.bgmFadeTimer = window.setInterval(() => {
      step += 1;
      const progress = step / steps;
      bgmAudio.volume = fromVolume * (1 - progress);
      if (step >= steps) {
        clearBgmFadeTimer();
        bgmAudio.pause();
        startNextTrack();
      }
    }, 50);
  }

  function resetProgress() {
    clearAutoTimer();
    clearTypingTimer();
    clearPreLineTimer();
    clearChapterCardTimer();
    clearCgRevealTimer();
    clearPropTimers();
    clearBgmFadeTimer();
    stopVoice();
    stopVideoPlayback(false);
    state.index = 0;
    state.backlog = [];
    state.pendingOnDone = null;
    state.deferredLineStarter = null;
    state.awaitingCgRevealTap = false;
    state.cgRevealLocked = false;
    state.chapterCardActive = false;
    state.userTextboxHidden = false;
    state.systemTextboxHidden = false;
    state.unlockedChapters = new Set([chapterMeta[0]?.id].filter(Boolean));
    state.completedChapters = new Set();
    state.seenCgs = new Set();
    state.seenBgms = new Set();
    window.localStorage.removeItem(storageKey);
    setOverlay(ui.settingOverlay, false);
    setOverlay(ui.backlogOverlay, false);
    setOverlay(ui.galleryOverlay, false);
    setOverlay(ui.cgPreviewOverlay, false);
    setOverlay(ui.creditsOverlay, false);
    setOverlay(ui.confirmOverlay, false);
    syncTextboxVisibility();
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
    const videoSources = new Set();

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
      const prop = normalizeProp(line.prop);
      if (prop?.src) {
        imageSources.add(prop.src);
      }
      if (line.video) {
        videoSources.add(line.video);
      }
      if (line.poster) {
        imageSources.add(line.poster);
      }
    });

    imageSources.forEach((src) => preloadImage(src));
    videoSources.forEach((src) => preloadVideo(src));
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

  function preloadVideo(src) {
    if (!src) {
      return null;
    }

    if (preloadedVideos.has(src)) {
      return preloadedVideos.get(src);
    }

    const video = document.createElement("video");
    video.preload = "metadata";
    video.src = src;

    const entry = {
      video
    };

    preloadedVideos.set(src, entry);
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

      if (Array.isArray(parsed.seenCgs)) {
        parsed.seenCgs.forEach((src) => {
          if (typeof src === "string" && src) {
            state.seenCgs.add(src);
          }
        });
      }

      if (Array.isArray(parsed.seenBgms)) {
        parsed.seenBgms.forEach((src) => {
          if (typeof src === "string" && src) {
            state.seenBgms.add(src);
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

  function clearChapterCardTimer() {
    if (state.chapterCardTimer) {
      window.clearTimeout(state.chapterCardTimer);
      state.chapterCardTimer = null;
    }
    if (state.sceneGateTimer) {
      window.clearTimeout(state.sceneGateTimer);
      state.sceneGateTimer = null;
    }
    state.chapterCardActive = false;
    ui.chapterCard.classList.remove("is-visible", "is-cinematic");
  }

  function clearCgRevealTimer() {
    if (state.cgRevealTimer) {
      window.clearTimeout(state.cgRevealTimer);
      state.cgRevealTimer = null;
    }
    state.cgRevealLocked = false;
    state.awaitingCgRevealTap = false;
    state.deferredLineStarter = null;
  }

  function clearPropTimers() {
    if (state.propDisplayTimer) {
      window.clearTimeout(state.propDisplayTimer);
      state.propDisplayTimer = null;
    }
    if (state.propHideTimer) {
      window.clearTimeout(state.propHideTimer);
      state.propHideTimer = null;
    }
    state.propLockedUntil = 0;
  }

  function getRemainingPropLockMs() {
    return Math.max(0, state.propLockedUntil - Date.now());
  }

  function shouldTriggerFirstCgReveal(cgSrc) {
    return Boolean(cgSrc) && !state.seenCgs.has(cgSrc);
  }

  function markCgAsSeen(cgSrc) {
    if (!cgSrc) {
      return;
    }
    state.seenCgs.add(cgSrc);
    saveProgress();
  }

  function markBgmAsSeen(bgmSrc) {
    if (!bgmSrc || state.seenBgms.has(bgmSrc)) {
      return;
    }
    state.seenBgms.add(bgmSrc);
    saveProgress();
  }

  function resumeDeferredSceneIfReady() {
    if (!state.awaitingCgRevealTap || !state.deferredLineStarter) {
      return false;
    }

    const starter = state.deferredLineStarter;
    state.deferredLineStarter = null;
    state.awaitingCgRevealTap = false;
    setSystemTextboxHidden(false);
    starter();
    return true;
  }

  function openCover() {
    clearAutoTimer();
    stopVideoPlayback(false);
    state.coverActive = true;
    setOverlay(ui.coverOverlay, true);
    ui.coverContinueButton.hidden = !hasSavedProgress();
  }

  function returnToTitle() {
    clearAutoTimer();
    stopVideoPlayback(false);
    setOverlay(ui.settingOverlay, false);
    setOverlay(ui.backlogOverlay, false);
    setOverlay(ui.galleryOverlay, false);
    setOverlay(ui.cgPreviewOverlay, false);
    setOverlay(ui.creditsOverlay, false);
    setOverlay(ui.confirmOverlay, false);
    openCover();
  }

  function hasSavedProgress() {
    return state.index > 0 || state.completedChapters.size > 0 || state.unlockedChapters.size > 1;
  }

  function renderGallery() {
    renderGalleryCgs();
    renderGalleryBgms();
  }

  function setGalleryTab(mode) {
    const showCg = mode !== "bgm";
    ui.gallerySectionCg.hidden = !showCg;
    ui.gallerySectionBgm.hidden = showCg;
    ui.galleryTabCg.classList.toggle("is-active", showCg);
    ui.galleryTabBgm.classList.toggle("is-active", !showCg);
    ui.galleryTabCg.setAttribute("aria-selected", showCg ? "true" : "false");
    ui.galleryTabBgm.setAttribute("aria-selected", showCg ? "false" : "true");
  }

  function renderGalleryCgs() {
    ui.galleryCgList.innerHTML = "";
    const fragment = document.createDocumentFragment();

    galleryCgs.forEach((item) => {
      const unlocked = state.seenCgs.has(item.src);
      const card = document.createElement("article");
      card.className = `gallery-cg-item${unlocked ? "" : " is-locked"}`;
      if (unlocked) {
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Open CG: ${item.label}`);
      }

      const image = document.createElement("img");
      image.alt = unlocked ? item.label : "Locked CG";
      image.src = item.src;
      image.loading = "lazy";
      image.draggable = false;

      const title = document.createElement("h3");
      title.textContent = unlocked ? item.label : "Locked";

      const chapter = document.createElement("p");
      chapter.textContent = unlocked ? item.chapter : "Read further to unlock this CG.";

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(chapter);
      if (unlocked) {
        card.addEventListener("click", () => {
          playUiClick();
          openCgPreview(item);
        });
        card.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            playUiClick();
            openCgPreview(item);
          }
        });
      }
      fragment.appendChild(card);
    });

    ui.galleryCgList.appendChild(fragment);
  }

  function renderGalleryBgms() {
    ui.galleryBgmList.innerHTML = "";
    const fragment = document.createDocumentFragment();

    galleryBgms.forEach((item) => {
      const unlocked = state.seenBgms.has(item.src);
      const row = document.createElement("article");
      row.className = `gallery-bgm-item${unlocked ? "" : " is-locked"}`;

      const copy = document.createElement("div");
      copy.className = "gallery-bgm-copy";

      const title = document.createElement("h3");
      title.textContent = unlocked ? item.label : "Locked";

      const chapter = document.createElement("p");
      chapter.textContent = unlocked ? item.chapter : "Read further to unlock this BGM.";

      copy.appendChild(title);
      copy.appendChild(chapter);

      const actions = document.createElement("div");
      actions.className = "gallery-bgm-actions";

      const playButton = document.createElement("button");
      playButton.type = "button";
      playButton.className = "gallery-bgm-button";
      playButton.textContent = "Play";
      playButton.disabled = !unlocked;
      playButton.addEventListener("click", (event) => {
        event.stopPropagation();
        unlockAudio();
        playUiClick();
        playGalleryBgm(item.src);
      });

      const stopButton = document.createElement("button");
      stopButton.type = "button";
      stopButton.className = "gallery-bgm-button";
      stopButton.textContent = "Stop";
      stopButton.disabled = !unlocked;
      stopButton.addEventListener("click", (event) => {
        event.stopPropagation();
        playUiClick();
        stopGalleryBgm(true);
      });

      actions.appendChild(playButton);
      actions.appendChild(stopButton);
      row.appendChild(copy);
      row.appendChild(actions);
      fragment.appendChild(row);
    });

    ui.galleryBgmList.appendChild(fragment);
  }

  function playGalleryBgm(src) {
    if (!src) {
      return;
    }

    state.currentGalleryBgmSrc = src;
    galleryAudio.src = src;
    galleryAudio.volume = state.muted ? 0 : state.currentBgmTargetVolume;
    bgmAudio.pause();
    galleryAudio.play().catch(() => {});
  }

  function stopGalleryBgm(restoreStoryBgm) {
    if (galleryAudio.src) {
      galleryAudio.pause();
      galleryAudio.currentTime = 0;
    }
    state.currentGalleryBgmSrc = null;

    if (restoreStoryBgm && state.audioUnlocked && !state.muted && state.currentBgmSrc) {
      bgmAudio.volume = state.currentBgmTargetVolume;
      bgmAudio.play().catch(() => {});
    }
  }

  function collectUniqueCgs() {
    const seen = new Set();
    const list = [];

    story.lines.forEach((line) => {
      if (!line.cg || seen.has(line.cg)) {
        return;
      }
      seen.add(line.cg);
      const chapter = story.chapters.find((item) => item.id === line.chapterId);
      list.push({
        src: line.cg,
        label: humanizeAssetName(line.cg),
        chapter: chapter?.title || line.chapterId
      });
    });

    return list;
  }

  function collectUniqueBgms() {
    const seen = new Set();
    const list = [];

    story.lines.forEach((line) => {
      if (!line.bgm || seen.has(line.bgm)) {
        return;
      }
      seen.add(line.bgm);
      const chapter = story.chapters.find((item) => item.id === line.chapterId);
      list.push({
        src: line.bgm,
        label: line.bgmName || humanizeAssetName(line.bgm),
        chapter: chapter?.title || line.chapterId
      });
    });

    return list;
  }

  function humanizeAssetName(src) {
    const fileName = src.split("/").pop() || src;
    return fileName
      .replace(/\.[^.]+$/, "")
      .replace(/^cg_|^bgm_/, "")
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function normalizeProp(propDef, chapter) {
    if (!propDef) {
      return null;
    }

    if (typeof propDef === "string") {
      return {
        src: propDef,
        title: humanizeAssetName(propDef),
        caption: chapter?.title || "Story Item",
        chapter: chapter?.title || "Story Item"
      };
    }

    if (!propDef.src) {
      return null;
    }

    return {
      src: propDef.src,
      title: propDef.title || humanizeAssetName(propDef.src),
      caption: propDef.caption || "",
      chapter: propDef.chapter || chapter?.title || "Story Item"
    };
  }

  function openCgPreview(item) {
    ui.cgPreviewTitle.textContent = item.label;
    ui.cgPreviewChapter.textContent = item.chapter;
    ui.cgPreviewImage.src = item.src;
    ui.cgPreviewImage.alt = item.label;
    setOverlay(ui.cgPreviewOverlay, true);
  }

})();
