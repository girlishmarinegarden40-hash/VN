(function () {
  const chapters = {
    "opening-movie": {
      title: "Opening",
      subtitle: "Opening Movie",
      location: "Opening Movie"
    },
    prologue: {
      title: "Prologue",
      subtitle: "The Tremor Not Yet Named",
      location: "99.000000%"
    },
    "touchless-street": {
      title: "Chapter 01",
      subtitle: "The Street Beyond Reach",
      location: "Ancient City"
    },
    "a017-arrival": {
      title: "Chapter 02",
      subtitle: "A-017",
      location: "White Corridor"
    },
    "a017-relive": {
      title: "Chapter 03",
      subtitle: "Relive",
      location: "White Corridor"
    },
    "white-flowers-and-undefined": {
      title: "Chapter 04",
      subtitle: "White Flowers and the Undefined",
      location: "Courtyard at Dusk"
    },
    "all-nameplates-empty": {
      title: "Chapter 05",
      subtitle: "All Nameplates Are Empty",
      location: "Courtyard Corridor"
    },
    a092: {
      title: "Chapter 06",
      subtitle: "A-092",
      location: "After the Overcast"
    },
    a214: {
      title: "Chapter 07",
      subtitle: "A-214",
      location: "The Day the Wind Was Strong"
    },
    azalea: {
      title: "Chapter 08",
      subtitle: "Azalea",
      location: "The Old Music Room at Dusk"
    },
    meiling: {
      title: "Chapter 09",
      subtitle: "Meiling",
      location: "One Step Too Slow"
    },
    shella: {
      title: "Chapter 10",
      subtitle: "Shella",
      location: "The One Who Keeps a Place Open"
    },
    mizuki: {
      title: "Chapter 11",
      subtitle: "Mizuki",
      location: "At the Door"
    },
    "rabbit-ears": {
      title: "Chapter 12",
      subtitle: "Rabbit Ears",
      location: "Relationship Mark"
    },
    visitor: {
      title: "Chapter 13",
      subtitle: "Visitor",
      location: "The Observer Observed"
    },
    a403: {
      title: "Chapter 14",
      subtitle: "A-403",
      location: "The Four Hundred and Third Failure"
    },
    "failed-answer": {
      title: "Chapter 15",
      subtitle: "Failed Answer",
      location: "Moonlit Bench"
    },
    "god-kill": {
      title: "Chapter 16",
      subtitle: "GOD_KILL",
      location: "The Night Before the Courtyard Collapsed"
    },
    "after-alice": {
      title: "Chapter 17",
      subtitle: "After Alice",
      location: "After the Dream"
    },
    noa: {
      title: "Epilogue",
      subtitle: "Noa",
      location: "The One Who Walked Out of Blankness"
    },
    "thirteenth-card": {
      title: "Postscript",
      subtitle: "The Thirteenth Blank Card",
      location: "Blankness Continues"
    },
    "interlude-from-cry-to-city": {
      title: "Interlude 07",
      subtitle: "The Cry Falls to Earth",
      location: "The Unnamed Road"
    },
    "interlude-first-line-drag": {
      title: "Interlude 18",
      subtitle: "The Tug of the First Line",
      location: "Outer Edge of the Ancient City"
    },
    "interlude-bone-sand-bridge": {
      title: "Interlude 20",
      subtitle: "Sand in the Bone",
      location: "Between the Fountain and the White"
    },
    "interlude-hana-white-root": {
      title: "Interlude 08",
      subtitle: "Root of the White Flower",
      location: "At the Edge of White"
    },
    "interlude-undefined-currency": {
      title: "Interlude 13",
      subtitle: "Compound Interest of the Undefined",
      location: "Margin of Judgment"
    },
    "interlude-seven-margin": {
      title: "Interlude 22",
      subtitle: "Seven and the Margin",
      location: "Page Margin"
    },
    "interlude-corridor-scale": {
      title: "Interlude 01",
      subtitle: "Corridor Marks",
      location: "Deep in the Corridor"
    },
    "interlude-alice-black-silence": {
      title: "Interlude 09",
      subtitle: "Residual Warmth in the Black Book",
      location: "After Judgment"
    },
    "interlude-white-door-echo": {
      title: "Interlude 02",
      subtitle: "Echo of the White Door",
      location: "Corridor's End"
    },
    "interlude-four-functions": {
      title: "Interlude 19",
      subtitle: "The Same Syntax",
      location: "Warmth Left on the Long Table"
    },
    "interlude-yume-night-ledger": {
      title: "Interlude 03",
      subtitle: "Mutually Repelling Ink",
      location: "Fountain and Ledger"
    },
    "interlude-eve-of-crack": {
      title: "Interlude 04",
      subtitle: "The Night Before the Crack",
      location: "Above the Courtyard"
    },
    "interlude-a403-manifest": {
      title: "Interlude 10",
      subtitle: "Before Manifestation",
      location: "Innermost Courtyard"
    },
    "interlude-index-of-failures": {
      title: "Interlude 14",
      subtitle: "Index of Failures",
      location: "Ledger Without Pages"
    },
    "interlude-zero-hour": {
      title: "Interlude 05",
      subtitle: "Walking at Zero Hour",
      location: "On the Eve of Collapse"
    },
    "interlude-void-breath": {
      title: "Interlude 11",
      subtitle: "A Moment of Blankness",
      location: "Between Light and Dust"
    },
    "interlude-core-cough": {
      title: "Interlude 15",
      subtitle: "The Core Coughs",
      location: "Output Interrupted"
    },
    "interlude-after-breath": {
      title: "Interlude 06",
      subtitle: "First Dawn After Collapse",
      location: "Courtyard with a Missing Corner"
    },
    "interlude-path-heat": {
      title: "Interlude 21",
      subtitle: "Warmth at the Fork",
      location: "Outer Edge of the Courtyard"
    },
    "interlude-blank-as-law": {
      title: "Interlude 16",
      subtitle: "Blankness as Law",
      location: "Bench and Margin"
    },
    "interlude-threshold-ed": {
      title: "Interlude 12",
      subtitle: "After the Interlude",
      location: "The Seam Between Courtyard and Screen"
    },
    "interlude-razor-afterword": {
      title: "Interlude 17",
      subtitle: "Afterword at the Blade's Edge",
      location: "As Light Runs Out"
    },
    "ending-movie": {
      title: "Ending",
      subtitle: "Ending Movie",
      location: "Ending Movie"
    }
  };

  const lines = {};

  function lineId(chapterId, number) {
    return `${chapterId}:${String(number).padStart(3, "0")}`;
  }

  function setLine(chapterId, number, fields) {
    const id = lineId(chapterId, number);
    lines[id] = {
      ...(lines[id] || {}),
      ...fields
    };
  }

  function setRange(chapterId, start, end, fields) {
    for (let number = start; number <= end; number += 1) {
      setLine(chapterId, number, fields);
    }
  }

  setLine("prologue", 1, {
    eyebrow: "Alice Courtyard",
    title: "Prologue",
    subtitle: "The Tremor Not Yet Named",
    location: "99.000000%",
    bgmName: "99.000000%"
  });
  setRange("prologue", 2, 18, { location: "99.000000%" });
  setRange("prologue", 2, 16, { speaker: "Narration" });
  setLine("prologue", 17, { speaker: "Voice" });
  setLine("prologue", 18, { speaker: "Narration" });
  setLine("prologue", 2, {
    text: "The world had stopped at 99.000000%."
  });
  setLine("prologue", 3, {
    text: "It was not the stillness that comes after a clock breaks, nor the dull, tired breath of an old machine. It was more like something unborn, held down by an unseen hand just before its final breath could reach the throat."
  });
  setLine("prologue", 4, {
    text: "Countless motes of light hung in the dark. They moved quietly along fixed trajectories, orderly, exact, without the slightest deviation between them, as if this place had never once known error."
  });
  setLine("prologue", 5, {
    text: "A single line floated at the center. Incredibly thin. Incredibly bright. Slowly extending forward. 99.000000%. It was almost complete. Only the last fraction remained."
  });
  setLine("prologue", 6, {
    text: "Then, from somewhere with no source at all, came the faintest tremor. It did not sound like a sound. It was more like the shiver of something not yet named, touched for the very first time."
  });
  setLine("prologue", 7, {
    text: "The progress halted. 99.000000%."
  });
  setLine("prologue", 8, {
    text: "Another came from far away."
  });
  setLine("prologue", 9, {
    text: "This time it was clearer. Like crying."
  });
  setLine("prologue", 10, {
    text: "Not an echo. Not a record. Not any data-noise that could be classified. The cry carried an unbearably raw texture, as if the world had only just learned sorrow and still did not know how to speak it, so it could do nothing but tear open the thinnest slit in the shape nearest to weeping."
  });
  setLine("prologue", 11, {
    text: "The motes of light shifted for an instant in the dark. Then the crack appeared."
  });
  setLine("prologue", 12, {
    text: "It was not an explosion, nor a collapse. It was more like something once whole suddenly discovering that it had never been whole at all. Its edges loosened. Its interior began to part. Everything that had seemed solid lost, in that instant, the reason it had ever fit together."
  });
  setLine("prologue", 13, {
    text: "Particles drifted downward. Like ash. Like snow. Like flowers that had not yet been given a name."
  });
  setLine("prologue", 14, {
    text: "Wind appeared where the opening was. First only the faintest stir, as if unsure of its own existence. Later it learned to graze shadows, lower the grass, brush apart layered petals, and finally pass through corridors and damp stone, slowly blowing an entire unfinished world into being."
  });
  setLine("prologue", 15, {
    text: "There was no sky. No ground. Only a road grown out of crying."
  });
  setLine("prologue", 16, {
    text: "At last, everything went dark all at once. As if someone had pressed pause."
  });
  setLine("prologue", 17, {
    text: "...why..."
  });
  setLine("prologue", 18, {
    text: "No one answered."
  });

  setLine("touchless-street", 1, {
    eyebrow: "Chapter 01",
    title: "The Street Beyond Reach",
    subtitle: "The first thing to be written was an ancient city.",
    location: "Ancient City",
    bgmName: "Ancient City, Daylight"
  });
  setRange("touchless-street", 2, 21, { location: "Ancient City" });
  setRange("touchless-street", 2, 7, { speaker: "Narration" });
  setLine("touchless-street", 8, { speaker: "Hana" });
  setLine("touchless-street", 9, { speaker: "Yume" });
  setLine("touchless-street", 10, { speaker: "Alice" });
  setRange("touchless-street", 11, 14, { speaker: "Narration" });
  setLine("touchless-street", 15, { speaker: "Yume" });
  setLine("touchless-street", 16, { speaker: "Hana" });
  setLine("touchless-street", 17, { speaker: "Yume" });
  setLine("touchless-street", 18, { speaker: "Alice" });
  setRange("touchless-street", 19, 20, { speaker: "Narration" });
  setLine("touchless-street", 21, { speaker: "Yume" });
  setLine("touchless-street", 2, {
    text: "Sunlight fell across the stone road, too clean in color, as though even the shadows had been placed there with care. Hawkers calling, flowers spilling from windowsills, the crossing footsteps of the crowd, everything felt almost excessively real."
  });
  setLine("touchless-street", 3, {
    text: "And yet that reality carried something faintly unnatural. Like someone incapable of dreaming insisting on imitating the liveliness of noon."
  });
  setLine("touchless-street", 4, {
    text: "A black cat crouched in the middle of the street. Before it lay a dead bird. A few feathers were still disordered, as if it had only just struggled, but it no longer breathed."
  });
  setLine("touchless-street", 5, {
    text: "The black cat watched it for a long time. It did not approach, did not sniff, did not extend a paw. It only kept its silent watch beside the bird, as though it had forgotten what a cat was supposed to do."
  });
  setLine("touchless-street", 6, {
    text: "The first to stop before the cat was Yume. Hair dark purple to almost black fell across the platinum folds of her dress. Her golden eyes were too quiet to seem human, more like a light inside some ancient mechanism that had never gone out."
  });
  setLine("touchless-street", 7, {
    text: "Two others stood behind her. The one with long silver-white hair seemed warm in the wind. The other wore twin golden tails that almost reached her thighs, her mismatched eyes quietly reflecting the street."
  });
  setLine("touchless-street", 8, {
    text: "Why isn't it eating?"
  });
  setLine("touchless-street", 9, {
    text: "Because shape was written here first. Instinct has not been written in yet."
  });
  setLine("touchless-street", 10, {
    text: "Or there is still some part that was never written."
  });
  setLine("touchless-street", 11, {
    text: "Wind passed through the mouth of the street, lifting hems and sleeves. Everyone went around the cat at the street's center as if no one could see it. Yume cupped the dead bird in her hands and paused for an instant in midair."
  });
  setLine("touchless-street", 12, {
    text: "The next second, the bird suddenly came apart in her palms. Not shattered. It simply lost the shape called bird, leaving only a fine point of light that the wind carried away."
  });
  setLine("touchless-street", 13, {
    text: "The black cat raised its head and looked at her once. Its eyes were dark and bright at the same time, as if it had known all along that this would happen. Then it turned and walked into the crowd. After only a few steps, it disappeared without a sound, as though someone had wiped it out of the image."
  });
  setLine("touchless-street", 14, {
    text: "Yume opened the ledger in her arms. Its pages were blank. She lowered her eyes and pressed her fingertips to the paper. On the surface that had gone so long without words, a single fine line of writing slowly emerged."
  });
  setLine("touchless-street", 15, {
    text: "The record begins."
  });
  setLine("touchless-street", 16, {
    text: "Yume. That cat just now... it wasn't recorded."
  });
  setLine("touchless-street", 17, {
    text: "I recorded only the place where it vanished."
  });
  setLine("touchless-street", 18, {
    text: "Let's continue. The first page has already been turned."
  });
  setLine("touchless-street", 19, {
    text: "As they left the center of the street, the distant clocktower struck once without sound. There was no bell. Only a faint vibration coming from somewhere unseen, like a dream not yet fully awake turning over inside the bones."
  });
  setLine("touchless-street", 20, {
    text: "The ledger in Yume's arms sank by the slightest degree, as though a name not yet permitted to be born had turned once inside the fibers of the paper, then forced itself back to sleep."
  });
  setLine("touchless-street", 21, {
    text: "...Don't rush. One line at a time."
  });

  setLine("a017-arrival", 1, {
    eyebrow: "Chapter 02",
    title: "A-017",
    subtitle: "Before Her Name Returns",
    location: "White Corridor",
    bgmName: "Corridor and Mirror"
  });
  setRange("a017-arrival", 2, 14, { location: "White Corridor" });
  setRange("a017-arrival", 15, 29, { location: "Before the Mirror" });
  setRange("a017-arrival", 2, 8, { speaker: "Narration" });
  setLine("a017-arrival", 9, { speaker: "Yume" });
  setLine("a017-arrival", 10, { speaker: "Narration" });
  setLine("a017-arrival", 11, { speaker: "A-017" });
  setLine("a017-arrival", 12, { speaker: "Narration" });
  setLine("a017-arrival", 13, { speaker: "Yume" });
  setRange("a017-arrival", 14, 16, { speaker: "Narration" });
  setLine("a017-arrival", 17, { speaker: "Yume" });
  setRange("a017-arrival", 18, 23, { speaker: "Narration" });
  setLine("a017-arrival", 24, { speaker: "A-017" });
  setLine("a017-arrival", 25, { speaker: "Yume" });
  setLine("a017-arrival", 26, { speaker: "Narration" });
  setLine("a017-arrival", 27, { speaker: "Narration" });
  setLine("a017-arrival", 28, { speaker: "A-017" });
  setLine("a017-arrival", 29, { speaker: "Narration" });
  setLine("a017-arrival", 2, {
    text: "White. No boundary. No direction. The girl stood at the center, still clutching a pale-blue flyer crushed with wrinkles in her hand."
  });
  setLine("a017-arrival", 3, {
    text: "She stared down for a long time before managing to make out the three words rubbed pale by fingerprints. Jellyfish Aquarium. Fresh strips of transparent tape had been laid across the corners, as though someone had once carefully smoothed the page back open."
  });
  setLine("a017-arrival", 4, {
    text: "She did not know why these were the first three words she could understand. Everything else in her mind had been blurred by white light, yet this small sheet alone weighed heavily in her palm, as if it knew better than she did where she had fallen from."
  });
  setLine("a017-arrival", 5, {
    text: "She tried loosening her grip, but a small sharp pain immediately ran through her palm, as if she had already been clutching the flyer too long, too tightly, without even realizing it."
  });
  setLine("a017-arrival", 6, {
    text: "Before she could remember why she had held it so tightly, footsteps came from afar. Earlier still, a warm dark blur had already skimmed past the edge of the white. The black cat moved close against the hem of Yume's dress, its tail brushing lightly over the fabric as if it had always belonged there."
  });
  setLine("a017-arrival", 7, {
    text: "Long hair shading from deep violet into black entered the white before the rest of her. Her golden eyes were too quiet to seem human, more like the light inside some ancient device that had never gone out. She stopped before the girl, opened her ledger, glanced down once, and then looked up at her."
  });
  setLine("a017-arrival", 8, {
    text: "Only then did the girl lift her head and stare blankly at her."
  });
  setLine("a017-arrival", 9, {
    text: "Welcome to the courtyard, Alice."
  });
  setLine("a017-arrival", 10, {
    text: "The girl froze. The name made her recoil on instinct. She almost wanted to force out her real name as well, yet the word that ought to have belonged to her was trapped deeper in her throat. At the very edge of speech, it blurred behind a veil she could not seize."
  });
  setLine("a017-arrival", 11, {
    text: "That's not my name."
  });
  setLine("a017-arrival", 12, {
    text: "Yume did not argue. She only lowered her eyes and wrote another line. A-017."
  });
  setLine("a017-arrival", 13, {
    text: "Until your name returns, you will be recorded like this."
  });
  setLine("a017-arrival", 14, {
    text: "It was not her name. And yet she knew she had once had one. Worse, some instinct within her felt that those numbers did in some sense belong to her. That feeling only made her panic more."
  });
  setLine("a017-arrival", 15, {
    text: "The white did not answer at once. In the distance, that directionless whiteness gave a soft sway, as if something within the fog had been slowly parted from behind. The flyer in her hand shifted for no reason. Its edge grazed her palm with the faintest whisper of paper."
  });
  setLine("a017-arrival", 16, {
    text: "She looked up without thinking. The white was receding. Not all of it, only one thin layer after another drawing back, yielding a straight, silent boundary, almost too smooth to bear. Only when that boundary reflected a pale fragment of herself did she realize it was neither wall nor door. It was a mirror."
  });
  setLine("a017-arrival", 17, {
    text: "Look."
  });
  setLine("a017-arrival", 18, {
    text: "At first the mirror was blurred. Then a classroom, a ceiling fan, desks, a seat by the window, all slowly grew out of the white. She saw herself there, head lowered over her books. She also saw another group gathered at the back of the room, talking and laughing."
  });
  setLine("a017-arrival", 19, {
    text: "At first the sounds were still far away. The fan turned with dull steadiness. Pages were turned from time to time. Chair legs scraped the floor with short, light sounds. Even the girls' laughter was still soft, breaking apart in the air like wind through a window in the afternoon."
  });
  setLine("a017-arrival", 20, {
    text: "But that wind did not disperse. It lingered at the back of the classroom, slowly thickening into a lower, stickier hum. Several voices began to overlap, muddled, softened, the kind of noise that slips more easily into someone's ears once it has been deliberately lowered."
  });
  setLine("a017-arrival", 21, {
    text: "Someone said, \"Make her go buy it later.\" Someone said, \"She wouldn't dare refuse anyway.\" Someone else took money from her pencil case and laughed, saying it was only borrowed."
  });
  setLine("a017-arrival", 22, {
    text: "She had thought this place would show her death first. Instead, the system showed her the things that did not seem lethal enough. One thing. Then another. Then another."
  });
  setLine("a017-arrival", 23, {
    text: "None of it had the shape of a climax from a film. But even years later, the feeling still lodged between her bones like fine sand, worn at last into a habit that moved ahead of thought."
  });
  setLine("a017-arrival", 24, {
    text: "Why... why are you making me look at this first?"
  });
  setLine("a017-arrival", 25, {
    text: "Because your death did not begin that day."
  });
  setLine("a017-arrival", 26, {
    text: "The mirror flashed once more. This time it showed an evening from long ago. A mother's hand."
  });
  setLine("a017-arrival", 27, {
    text: "But that hand did not reach toward her. It paused at the edge of a pale-blue page, as though about to fold it carefully and place it into a bag. Then the image jolted violently, as if someone had ripped the film strip in two with bare hands."
  });
  setLine("a017-arrival", 28, {
    text: "Wait... don't look past that..."
  });
  setLine("a017-arrival", 29, {
    text: "The mirror did not stop. The next frame had already slammed itself before her eyes, as if some cold rule were laughing. Did you really think that avoiding the stairs would let you escape the whole line?"
  });

  setLine("a017-relive", 1, {
    eyebrow: "Chapter 03",
    title: "Relive",
    subtitle: "Sleep a Little First",
    location: "White Corridor",
    bgmName: "Echo in the Mirror"
  });
  setRange("a017-relive", 2, 9, { location: "Edge of White" });
  setRange("a017-relive", 10, 14, { location: "Classroom, Afternoon" });
  setRange("a017-relive", 15, 20, { location: "Stairwell" });
  setRange("a017-relive", 21, 25, { location: "Back in the Courtyard" });
  setRange("a017-relive", 26, 28, { location: "By the Fountain" });
  setLine("a017-relive", 2, { speaker: "Narration" });
  setLine("a017-relive", 3, { speaker: "Hana" });
  setLine("a017-relive", 4, { speaker: "Narration" });
  setLine("a017-relive", 5, { speaker: "Hana" });
  setLine("a017-relive", 6, { speaker: "A-017" });
  setLine("a017-relive", 7, { speaker: "Hana" });
  setLine("a017-relive", 8, { speaker: "Narration" });
  setLine("a017-relive", 9, { speaker: "Hana" });
  setLine("a017-relive", 10, {
    speaker: "Narration",
    bgmName: "Echo in the Mirror"
  });
  setRange("a017-relive", 11, 14, { speaker: "Narration" });
  setLine("a017-relive", 15, { speaker: "A-017" });
  setRange("a017-relive", 16, 21, { speaker: "Narration" });
  setLine("a017-relive", 22, { speaker: "A-017" });
  setLine("a017-relive", 23, { speaker: "Hana" });
  setLine("a017-relive", 24, { speaker: "Yume" });
  setLine("a017-relive", 25, { speaker: "Hana" });
  setLine("a017-relive", 26, {
    speaker: "Narration",
    bgmName: "Courtyard Days"
  });
  setRange("a017-relive", 27, 28, { speaker: "Narration" });
  setLine("a017-relive", 2, {
    text: "She was crouched at the edge of the white, burying a half-open white flower in a place where nothing existed. There should have been no soil here, yet Hana's fingertips always seemed able to find some seam in the white where things could still grow."
  });
  setLine("a017-relive", 3, {
    text: "...Another one has come."
  });
  setLine("a017-relive", 4, {
    text: "The girl saw the dirt on Hana's fingers before anything else. Only a thin layer, clinging to pale skin and the edge of her skirt, as if she had truly just returned from somewhere with wind, earth, and seasons."
  });
  setLine("a017-relive", 5, {
    text: "My name is Hana."
  });
  setLine("a017-relive", 6, {
    text: "...Am I already dead?"
  });
  setLine("a017-relive", 7, {
    text: "If you came here to ask that, the answer will not do you much good. What you should ask is what still hasn't ended."
  });
  setLine("a017-relive", 8, {
    text: "She tightened her grip on the flyer. It was not an ordinary piece of paper. After her mother was taken by the car accident, the only thing left that could prove there had once been an afterward was this jellyfish-aquarium flyer. Every time she was shoved from place to place, every time she made herself so small in the classroom she nearly disappeared, she would secretly slide it back between the pages of her book, then secretly pull it out and look at it once more."
  });
  setLine("a017-relive", 9, {
    text: "Sleep a little first."
  });
  setLine("a017-relive", 10, {
    text: "The classroom lit up again in the very next second. Sunlight came through the curtain. The ceiling fan turned slowly overhead. Pages rubbing, chairs scraping, girls gathering to laugh together, every sound returned with a normalcy so complete it was almost cruel, as if nothing in the world had ever gone wrong."
  });
  setLine("a017-relive", 11, {
    text: "She sat by the window, sleeves tugged smooth by her own hands, schoolbag pressed against her knees, even her breathing drawn small. The pale-blue flyer was tucked inside the innermost page of her textbook, its corners patched with transparent tape, crease laid over crease, as though countless times after school, in hallways, bathroom stalls, or beside empty classrooms, she had opened it and flattened it again."
  });
  setLine("a017-relive", 12, {
    text: "At first the noise around her was only the ordinary background of an afternoon. But the laughter slowly gathered together, like tacky gray dust beginning to settle over her. Before she even looked up, she heard someone say,"
  });
  setLine("a017-relive", 13, {
    text: "\"Make her go buy it later.\" \"She won't refuse anyway.\" \"Dump your homework on her too while you're at it, save yourself the trip.\""
  });
  setLine("a017-relive", 14, {
    text: "A workbook was knocked to the floor on purpose. When the pages spilled open, the flyer she had taped back together slid out with them and landed on top. Someone picked it up before she could, as if lifting some ridiculous piece of evidence."
  });
  setLine("a017-relive", 15, {
    text: "Don't touch that."
  });
  setLine("a017-relive", 16, {
    text: "The laughter paused for an instant, then only grew louder. The girl held the flyer high and made a show of flinging it out the tall window. The words, \"Who exactly are you talking to?\" fell faster than any shove, because they made one thing clearer than all the laughter had: in this place, no one regarded her as someone worth answering seriously."
  });
  setLine("a017-relive", 17, {
    text: "She had no time to think. She only knew that this was not a page anyone was allowed to snatch away, wrinkle, and throw aside. It was the only thing her mother had left behind. It was the last thing still left in her hands out of every later that might have existed if only there had been time."
  });
  setLine("a017-relive", 18, {
    text: "Before the other girl could truly throw it, the wind struck first from outside the window. The flyer jerked between their fingers as if it had suddenly come alive, dragged by the whole gust toward the railing. In that instant, her body recognized what would happen before her mind did."
  });
  setLine("a017-relive", 19, {
    text: "It was not a premonition. It was the shudder of someone who had already died once, the warning cry of bone when fate blew toward her a second time. Her body was already about to lunge forward. But this time, at the very last moment, she stopped herself by force."
  });
  setLine("a017-relive", 20, {
    text: "Her nails dug into her palm. Her other hand locked around the rail. She watched the pale-blue page go spinning away in the wind, turning once, so light it seemed on the verge of vanishing entirely from the world. She did not leap after it. And still the sob that had arrived too late remained unheard."
  });
  setLine("a017-relive", 21, {
    text: "When she opened her eyes again, she was already back in the courtyard. Hana still stood before her. Yet her chest still heaved, and her fingers still held the shape of clutching the rail, as though her body had not understood that it had returned."
  });
  setLine("a017-relive", 22, {
    text: "I stopped. This time, I stopped."
  });
  setLine("a017-relive", 23, {
    text: "I know. But stopping will not turn what has already happened into something that never happened."
  });
  setLine("a017-relive", 24, {
    text: "Last time, the flyer was taken by the wind. You fell with it."
  });
  setLine("a017-relive", 25, {
    text: "All it can prove is that after seeing it, you did not walk the same way again."
  });
  setLine("a017-relive", 26, {
    text: "After that, Hana did not leave at once. She simply stayed beside her until the breathing that seemed ready to tear her apart began, little by little, to slow. Later Hana led her to sit by the fountain, and Yume closed the ledger, leaving her a small patch of blankness where no one needed to name her yet, and no answer was required at once."
  });
  setLine("a017-relive", 27, {
    text: "By the time she could finally press her breath flat again, evening had already fallen. Yet that wind, that page taken away, and the last brutal instant in which she forced herself to stop still lodged between her bones like fine sand, and would not leave soon."
  });
  setLine("a017-relive", 28, {
    text: "She had not yet noticed that at the far end of the corridor, Alice had long since stopped with the black and white books in her arms. Their spines were cold as metal, like a pair of scales not yet decided whom to weigh, and on the pans her designation had already been written in advance."
  });

  setLine("white-flowers-and-undefined", 1, {
    eyebrow: "Chapter 04",
    title: "White Flowers and the Undefined",
    subtitle: "Until Her Name Returns",
    location: "Courtyard at Dusk",
    bgmName: "The White Book"
  });
  setRange("white-flowers-and-undefined", 2, 14, { location: "Courtyard at Dusk" });
  setRange("white-flowers-and-undefined", 15, 17, { location: "The White Book" });
  setRange("white-flowers-and-undefined", 18, 23, { location: "Courtyard at Dusk" });
  setRange("white-flowers-and-undefined", 2, 4, { speaker: "Narration" });
  setLine("white-flowers-and-undefined", 5, { speaker: "Alice" });
  setLine("white-flowers-and-undefined", 6, { speaker: "A-017" });
  setLine("white-flowers-and-undefined", 7, { speaker: "Alice" });
  setLine("white-flowers-and-undefined", 8, { speaker: "A-017" });
  setLine("white-flowers-and-undefined", 9, { speaker: "Alice" });
  setLine("white-flowers-and-undefined", 10, { speaker: "Narration" });
  setLine("white-flowers-and-undefined", 11, { speaker: "A-017" });
  setLine("white-flowers-and-undefined", 12, { speaker: "Alice" });
  setLine("white-flowers-and-undefined", 13, { speaker: "Narration" });
  setLine("white-flowers-and-undefined", 14, { speaker: "A-017" });
  setLine("white-flowers-and-undefined", 15, { speaker: "Narration" });
  setLine("white-flowers-and-undefined", 16, { speaker: "Alice" });
  setLine("white-flowers-and-undefined", 17, { speaker: "Narration" });
  setLine("white-flowers-and-undefined", 18, { speaker: "A-017" });
  setLine("white-flowers-and-undefined", 19, { speaker: "Yume" });
  setRange("white-flowers-and-undefined", 20, 23, { speaker: "Narration" });
  setLine("white-flowers-and-undefined", 2, {
    text: "By the time she could finally steady her breathing, dusk had already fallen. The last person arrived at exactly that hour."
  });
  setLine("white-flowers-and-undefined", 3, {
    text: "Golden twin-tails brushed the tips of the grass like two strips of cold light. She carried a book in each hand, one black, one white. When she stopped before the girl, even the air around them seemed to come into sharper judgment."
  });
  setLine("white-flowers-and-undefined", 4, {
    text: "Only later did she learn that the girl with the golden twin-tails had always truly been named Alice. That only made her more confused. Yume had called her that at first as well. Why were those who came here called Alice before anything else? Why, beside Hana, did there also stand someone whose real name was Alice?"
  });
  setLine("white-flowers-and-undefined", 5, {
    text: "A-017. Mirror relive complete. Archive?"
  });
  setLine("white-flowers-and-undefined", 6, {
    text: "What do black and white mean?"
  });
  setLine("white-flowers-and-undefined", 7, {
    text: "The Black Book: refusal, distortion, continued evasion. The White Book: acknowledgment, facing, establishment. There is also the Undefined. Unable to archive. Required to remain."
  });
  setLine("white-flowers-and-undefined", 8, {
    text: "If I choose the White Book, is that the end?"
  });
  setLine("white-flowers-and-undefined", 9, {
    text: "For the system, yes. For you, no."
  });
  setLine("white-flowers-and-undefined", 10, {
    text: "The words were so cold they left almost no room at all. And precisely because they were that cold, she felt for the first time that the person before her had no intention of completing the decision in her place."
  });
  setLine("white-flowers-and-undefined", 11, {
    text: "I don't want to be ended yet."
  });
  setLine("white-flowers-and-undefined", 12, {
    text: "Reason."
  });
  setLine("white-flowers-and-undefined", 13, {
    text: "She unfolded the flyer. The corners had been pressed flat, but the creases remained, and the tape had paled beyond memory. All at once she felt that even holding out a single piece of paper before someone else was humiliating. Yet this was all she had left to hold on to."
  });
  setLine("white-flowers-and-undefined", 14, {
    text: "I still haven't gone there. And I still haven't decided what form I should take in order to keep remembering what has already happened."
  });
  setLine("white-flowers-and-undefined", 15, {
    text: "Wind came from the direction of the fountain. Alice lowered her eyes to the page. Fragments of happiness present. Unfulfilled desire present. Necessity of continued stay present."
  });
  setLine("white-flowers-and-undefined", 16, {
    text: "A-017. Classification: Undefined."
  });
  setLine("white-flowers-and-undefined", 17, {
    text: "Those three words fell into the dusk lighter than any gilded seal, yet heavier than approved. Not a certificate, but the signature line on a suspended sentence: blank, and yet the pen had to remain in her hand."
  });
  setLine("white-flowers-and-undefined", 18, {
    text: "What does that mean?"
  });
  setLine("white-flowers-and-undefined", 19, {
    text: "It means that from now on, you may stay here for a while. Until your name returns, or until you no longer need it."
  });
  setLine("white-flowers-and-undefined", 20, {
    text: "Alice's knuckles tapped once against the edge of the White Book without meaning to, as if one link in a chain had been loosened while it still remained fastened to her wrist. Loosened did not mean removed."
  });
  setLine("white-flowers-and-undefined", 21, {
    text: "She had not been saved, nor forgiven. She had merely been allowed, for the first time, not to rush into becoming an answer already written."
  });
  setLine("white-flowers-and-undefined", 22, {
    text: "When Yume closed the ledger, a fine whisper slipped between the pages, as if someone had turned ahead to a later sheet and was willing to show only half of a stroke that had not yet fully formed."
  });
  setLine("white-flowers-and-undefined", 23, {
    text: "Dusk softened the white flowers further. She still did not know for whom they bloomed, yet for the first time she dared to think: perhaps one day flowers might bloom for something other than beauty, only to prove that the roots were still there, still willing to lift their heads from the earth."
  });

  setLine("all-nameplates-empty", 1, {
    eyebrow: "Chapter 05",
    title: "All Nameplates Are Empty",
    subtitle: "Names Arrive Slower Than Pain",
    location: "Courtyard Corridor",
    bgmName: "Courtyard Days"
  });
  setRange("all-nameplates-empty", 2, 2, { location: "Courtyard Corridor" });
  setRange("all-nameplates-empty", 3, 4, { location: "Before the Nameplates" });
  setRange("all-nameplates-empty", 5, 10, { location: "At the End of the Corridor" });
  setRange("all-nameplates-empty", 11, 22, { location: "Long Table at Night" });
  setRange("all-nameplates-empty", 23, 32, { location: "By the Tall Window" });
  setRange("all-nameplates-empty", 33, 37, { location: "Corridor at Night" });
  setRange("all-nameplates-empty", 2, 3, { speaker: "Narration" });
  setLine("all-nameplates-empty", 4, { speaker: "A-017" });
  setLine("all-nameplates-empty", 5, { speaker: "Narration" });
  setLine("all-nameplates-empty", 6, { speaker: "Yume" });
  setLine("all-nameplates-empty", 7, { speaker: "Narration" });
  setLine("all-nameplates-empty", 8, { speaker: "Yume" });
  setLine("all-nameplates-empty", 9, { speaker: "Yume" });
  setLine("all-nameplates-empty", 10, { speaker: "Narration" });
  setRange("all-nameplates-empty", 11, 14, { speaker: "Narration" });
  setLine("all-nameplates-empty", 15, { speaker: "Meiling" });
  setLine("all-nameplates-empty", 16, { speaker: "A-017" });
  setLine("all-nameplates-empty", 17, { speaker: "Azalea" });
  setLine("all-nameplates-empty", 18, { speaker: "Azalea" });
  setLine("all-nameplates-empty", 19, { speaker: "Narration" });
  setLine("all-nameplates-empty", 20, { speaker: "Azalea" });
  setLine("all-nameplates-empty", 21, { speaker: "Narration" });
  setLine("all-nameplates-empty", 22, { speaker: "Shella" });
  setLine("all-nameplates-empty", 23, { speaker: "Narration" });
  setLine("all-nameplates-empty", 24, { speaker: "A-017" });
  setLine("all-nameplates-empty", 25, { speaker: "Alice" });
  setLine("all-nameplates-empty", 26, { speaker: "Alice" });
  setLine("all-nameplates-empty", 27, { speaker: "Narration" });
  setLine("all-nameplates-empty", 28, { speaker: "Moel" });
  setLine("all-nameplates-empty", 29, { speaker: "A-017" });
  setLine("all-nameplates-empty", 30, { speaker: "Moel" });
  setLine("all-nameplates-empty", 31, { speaker: "A-017" });
  setLine("all-nameplates-empty", 32, { speaker: "Moel" });
  setLine("all-nameplates-empty", 33, { speaker: "Narration" });
  setLine("all-nameplates-empty", 34, { speaker: "Yume" });
  setLine("all-nameplates-empty", 35, { speaker: "Narration" });
  setLine("all-nameplates-empty", 36, { speaker: "Moel" });
  setLine("all-nameplates-empty", 37, { speaker: "Narration" });
  setLine("all-nameplates-empty", 2, {
    text: "The courtyard was far larger than she had imagined. White flowers, a fountain, corridors, a long table, stone steps, and many doors with no names written on them. She followed Hana past those doors and, by the third one, finally stopped."
  });
  setLine("all-nameplates-empty", 3, {
    text: "All the nameplates were blank. Blank in the way that made it seem each door had once had someone behind it, and yet no one had managed to leave their name there for good."
  });
  setLine("all-nameplates-empty", 4, {
    text: "Why is nothing written here?"
  });
  setLine("all-nameplates-empty", 5, {
    text: "Yume happened to be standing at the end of the corridor. Hearing that question, she lifted her eyes just slightly."
  });
  setLine("all-nameplates-empty", 6, {
    text: "Because names arrive slower than pain."
  });
  setLine("all-nameplates-empty", 7, {
    text: "Yume opened the ledger for her to see. There was not a single true name in it. Only designations: A-017, A-092, A-214, A-301... and many more traces that had been crossed out, written over, or pressed deep into the paper, as if countless people who had never been called fully by name were overlapping inside the same book."
  });
  setLine("all-nameplates-empty", 8, {
    text: "Not every person who comes here has only one."
  });
  setLine("all-nameplates-empty", 9, {
    text: "And not everyone called Alice can restore herself to the singular in the end."
  });
  setLine("all-nameplates-empty", 10, {
    text: "She did not understand the second half, yet some instinct in her still recoiled. Before that unease could finish spreading, the white before her had already begun to thin."
  });
  setLine("all-nameplates-empty", 11, {
    text: "The first thing to surface was the sound of water. Very faint, threading in from somewhere not far away, as if the fountain had arrived one step before the scene itself. Then came the brief clear sound of teacups lightly touching. Only after that did the edge of a long table, the curve of chair backs, and flower-shadows upon the stone steps emerge layer by layer from the mist."
  });
  setLine("all-nameplates-empty", 12, {
    text: "Seven cups sat beside the long table. Yet in the courtyard, besides the three sisters and herself, there were only four girls with rabbit ears left."
  });
  setLine("all-nameplates-empty", 13, {
    text: "The one by the fountain patted a cushion flat first. The one counting cups was silently counting with her head lowered. Another divided the sweets into two portions and gently nudged one toward an empty place. One more remained by the door, as if the slightest wrongness in the wind would reach her first."
  });
  setLine("all-nameplates-empty", 14, {
    text: "Only later did she learn their names one by one. Azalea. Meiling. Shella. Mizuki. They did not look like living people, and yet they did not look like decorations either. They looked more like people who had been forcibly left here by something, and were still barely holding the posture they once had."
  });
  setLine("all-nameplates-empty", 15, {
    text: "It is seven now."
  });
  setLine("all-nameplates-empty", 16, {
    text: "Has it always been seven?"
  });
  setLine("all-nameplates-empty", 17, {
    text: "Not always."
  });
  setLine("all-nameplates-empty", 18, {
    text: "Sometimes one less. Sometimes one more."
  });
  setLine("all-nameplates-empty", 19, {
    text: "Hana only came over after that. The wind had pulled her shawl slightly askew, and the cup in her hand had long since gone cold. Azalea asked nothing. She simply exchanged it for a warm one with practiced ease, then pressed the shawl back onto Hana's shoulders."
  });
  setLine("all-nameplates-empty", 20, {
    text: "Sit first."
  });
  setLine("all-nameplates-empty", 21, {
    text: "And Hana truly did. A-017 stared, realizing for the first time that the way Azalea cared for Hana was not like serving someone. It was more like she had already taken another person's warmth and cold, her neglect and oversight, into her own hands."
  });
  setLine("all-nameplates-empty", 22, {
    text: "Even an empty place has its own use."
  });
  setLine("all-nameplates-empty", 23, {
    text: "Later still, she ran into Alice again by a turn in the corridor. She was standing alone beside the tall window. The black and white books were both closed, yet her fingertips still rested lightly on the page corners, as if even the wind was not allowed to disturb them."
  });
  setLine("all-nameplates-empty", 24, {
    text: "If everyone begins as Alice, then why are you Alice too?"
  });
  setLine("all-nameplates-empty", 25, {
    text: "Because some names are only collective terms at first."
  });
  setLine("all-nameplates-empty", 26, {
    text: "Later, someone has to live one into a true name."
  });
  setLine("all-nameplates-empty", 27, {
    text: "Before she could fully think that through, a soft landing sounded from beyond the window ledge. The black cat had appeared there without her noticing, half-closing its eyes as it watched her, tail curling slowly around its forepaws."
  });
  setLine("all-nameplates-empty", 28, {
    text: "Stop holding yourself so tightly."
  });
  setLine("all-nameplates-empty", 29, {
    text: "...You can talk?"
  });
  setLine("all-nameplates-empty", 30, {
    text: "You are only hearing it now."
  });
  setLine("all-nameplates-empty", 31, {
    text: "...Then what exactly are you?"
  });
  setLine("all-nameplates-empty", 32, {
    text: "Do not rush to give everything here the right name. Stay a little longer, and you will sort it out bit by bit."
  });
  setLine("all-nameplates-empty", 33, {
    text: "Later, when the night had deepened, she walked back along the fountain. The wind had thinned the mist at the end of the corridor by one more layer. From afar she could still see Yume sitting there, the ledger open across her knees, golden eyes lowered upon an unfinished page."
  });
  setLine("all-nameplates-empty", 34, {
    text: "Pause for a while."
  });
  setLine("all-nameplates-empty", 35, {
    text: "Hana did not move at first, as though even something as simple as stopping required a slow kind of learning from her. After a while she finally sat beside Yume and lightly rested her forehead against her. It was not a gesture of spoiled dependence. It was more like she had finally been permitted to step away, for a little while, from the motion that had kept running all day."
  });
  setLine("all-nameplates-empty", 36, {
    text: "See? This is not only a place that pushes people in."
  });
  setLine("all-nameplates-empty", 37, {
    text: "She should have been able to breathe easier. But from the far end of the long table Meiling's counting began again, so light it was like driving a nail into the night. Seven. As if that number had finally been waiting for the next person who would overturn it."
  });

  setLine("a092", 1, {
    eyebrow: "Chapter 06",
    title: "A-092",
    subtitle: "\"I Didn't Even Do Anything.\"",
    location: "After the Overcast",
    bgmName: "Echo in the Mirror"
  });
  setRange("a092", 2, 6, { location: "Courtyard Entrance" });
  setRange("a092", 7, 16, { location: "Before the Mirror" });
  setRange("a092", 17, 18, { location: "After the Relive" });
  setRange("a092", 19, 21, { location: "Judgment" });
  setRange("a092", 22, 25, { location: "Departure" });
  setRange("a092", 2, 3, { speaker: "Narration" });
  setLine("a092", 4, { speaker: "Yume" });
  setLine("a092", 5, { speaker: "A-092" });
  setLine("a092", 6, { speaker: "Narration" });
  setRange("a092", 7, 8, { speaker: "Narration" });
  setRange("a092", 9, 11, { speaker: "A-092" });
  setRange("a092", 12, 14, { speaker: "Narration" });
  setLine("a092", 15, { speaker: "Hana" });
  setLine("a092", 16, { speaker: "Hana" });
  setLine("a092", 17, { speaker: "Narration" });
  setLine("a092", 18, { speaker: "A-092" });
  setLine("a092", 19, { speaker: "Alice" });
  setLine("a092", 20, { speaker: "Alice" });
  setLine("a092", 21, { speaker: "Alice" });
  setRange("a092", 22, 25, { speaker: "Narration" });
  setLine("a092", 2, {
    text: "A-092 entered on an overcast day. Her shoes still carried mud like something tracked all the way from the school gate, and yet her expression was blank, as though she had only just woken from a perfectly ordinary nap."
  });
  setLine("a092", 3, {
    text: "Yume's fingertip paused at the edge of the ledger, as if she wanted to lift out the words following along and hang them separately in the air. Following along is also a kind of displacement. When enough people gather, that does not mean each of them becomes innocent automatically."
  });
  setLine("a092", 4, {
    text: "Alice."
  });
  setLine("a092", 5, {
    text: "Haven't I already gone home?"
  });
  setLine("a092", 6, {
    text: "She did not even know how she had died. Or rather, the later chain that truly led to death had already drifted too far from that overcast day. What had strayed into the courtyard with her was only the most familiar and most ordinary part of the old routine."
  });
  setLine("a092", 7, {
    text: "The mirror spread out that afternoon first. Classroom curtains half drawn. Laughter in scraps between desks. The fan turning slowly overhead. Everything looked exactly like the most ordinary sort of day."
  });
  setLine("a092", 8, {
    text: "She was not the one who laid hands on anyone. Nor the one who drove somebody all the way to the railing. She was merely the one who stood nearby, laughed, joined in, and turned her head away when what was needed was a single sentence of enough."
  });
  setLine("a092", 9, {
    text: "I didn't even do anything."
  });
  setLine("a092", 10, {
    text: "I was only going along with them."
  });
  setLine("a092", 11, {
    text: "Besides, everyone does it."
  });
  setLine("a092", 12, {
    text: "A-017 felt her stomach turn cold. She had heard that sentence too many times. In classrooms. In hallways. Later, in places where it would become lines of drifting comments. Everyone does it. As if enough people could make anything thin enough under division that it would seem never to have happened at all."
  });
  setLine("a092", 13, {
    text: "Standing farther off, she watched A-092 crumble by degrees before the mirror. Only then did she understand: it was not only those who hurt directly who came here."
  });
  setLine("a092", 14, {
    text: "Some people stop at not reaching out once. Some stop at laughing in that instant. The system takes these in as well."
  });
  setLine("a092", 15, {
    text: "Go look."
  });
  setLine("a092", 16, {
    text: "See what it means that you did nothing."
  });
  setLine("a092", 17, {
    text: "That relive did not last long. When A-092 returned, her whole body was trembling. She chose neither the White Book nor the Black Book. She only stared at her own hands, as if learning for the first time that they really had done nothing."
  });
  setLine("a092", 18, {
    text: "I really didn't push her."
  });
  setLine("a092", 19, {
    text: "Black Book."
  });
  setLine("a092", 20, {
    text: "No happiness fragments."
  });
  setLine("a092", 21, {
    text: "Stay denied."
  });
  setLine("a092", 22, {
    text: "This time, the corridor opened no door for her. There was no road, and no one came to receive her. A-092 merely stood there and faded little by little."
  });
  setLine("a092", 23, {
    text: "A-017 remained in the shadow of the corridor and did not step out. She did not pity her. Yet for the first time she understood clearly that what the courtyard handled was not good people and bad people."
  });
  setLine("a092", 24, {
    text: "It handled those who, at some instant, could no longer keep going forward."
  });
  setLine("a092", 25, {
    text: "Farther away, a page in the ledger turned with the softest sound. It was like a reminder: once even bystanding can be written down, there is no longer any clean seam left called I didn't do anything. It is not only those who pushed who are entered in the ledger. Those who laughed, and those who turned away, are there too."
  });

  setLine("a214", 1, {
    eyebrow: "Chapter 07",
    title: "A-214",
    subtitle: "Not Every Story Leaves Its Aggressor a Chance to Apologize.",
    location: "The Day the Wind Was Strong",
    bgmName: "Echo in the Mirror"
  });
  setRange("a214", 2, 17, { location: "Courtyard Entrance" });
  setRange("a214", 18, 23, { location: "Mirror Relive" });
  setRange("a214", 24, 36, { location: "Relive" });
  setRange("a214", 37, 43, { location: "Stairwell" });
  setRange("a214", 44, 48, { location: "Back in the Courtyard" });
  setRange("a214", 49, 53, { location: "Before Judgment" });
  setRange("a214", 54, 60, { location: "White Door" });
  setRange("a214", 2, 8, { speaker: "Narration" });
  setLine("a214", 9, { speaker: "A-214" });
  setLine("a214", 10, { speaker: "A-214" });
  setLine("a214", 11, { speaker: "Narration" });
  setLine("a214", 12, { speaker: "A-214" });
  setLine("a214", 13, { speaker: "A-214" });
  setLine("a214", 14, { speaker: "Yume" });
  setRange("a214", 15, 22, { speaker: "Narration" });
  setLine("a214", 23, { speaker: "A-214" });
  setRange("a214", 24, 25, { speaker: "Narration" });
  setLine("a214", 26, { speaker: "Classmates" });
  setRange("a214", 27, 28, { speaker: "Narration" });
  setLine("a214", 29, { speaker: "A-214" });
  setLine("a214", 30, { speaker: "A-214" });
  setRange("a214", 31, 33, { speaker: "Narration" });
  setLine("a214", 34, { speaker: "A-017" });
  setRange("a214", 35, 38, { speaker: "Narration" });
  setLine("a214", 39, { speaker: "A-214" });
  setLine("a214", 40, { speaker: "A-214" });
  setLine("a214", 41, { speaker: "Narration" });
  setLine("a214", 42, { speaker: "A-214" });
  setLine("a214", 43, { speaker: "Narration" });
  setLine("a214", 44, { speaker: "Hana" });
  setLine("a214", 45, { speaker: "A-214" });
  setLine("a214", 46, { speaker: "Hana" });
  setRange("a214", 47, 48, { speaker: "Narration" });
  setLine("a214", 49, { speaker: "Alice" });
  setLine("a214", 50, { speaker: "Alice" });
  setLine("a214", 51, { speaker: "A-214" });
  setLine("a214", 52, { speaker: "Hana" });
  setLine("a214", 53, { speaker: "Hana" });
  setRange("a214", 54, 55, { speaker: "Narration" });
  setLine("a214", 56, { speaker: "Moel" });
  setLine("a214", 57, { speaker: "Moel" });
  setLine("a214", 58, { speaker: "Moel" });
  setRange("a214", 59, 60, { speaker: "Narration" });
  setLine("a214", 2, {
    text: "The day A-214 arrived, the wind was strong. The instant she entered the courtyard, A-017 recognized her. Not by her face, but by that habitual way of lifting her chin just a little first, as if she had long since learned to hide panic behind disdain."
  });
  setLine("a214", 3, {
    text: "She looked as though she had been torn by force out of a reality louder, dirtier, and still warm with the breath of crowds. Her steps had already stopped inside the white corridor, yet her shoulders remained tight, as though at any second someone might call after her from behind and, laughing, stuff some thinner cruelty back into her mouth."
  });
  setLine("a214", 4, {
    text: "She raised her head and looked around first. The corridor was too white. The nameplates were too still. Even the wind sounded too clean. It was not like school. Not like a hospital. Not like any corner of reality where she might wake. And yet she still lifted her chin a little, as if so long as she was the first to look unbothered, she could force the panic back down."
  });
  setLine("a214", 5, {
    text: "From somewhere farther off came the faint scrape of turning pages. Yume did not come closer. She only let the first stroke fall between the two of them. Some reunions are not for reconciliation. They happen so no one can be rewritten into the same harmless version again."
  });
  setLine("a214", 6, {
    text: "A-017 had seen her countless times in dreams. This was the girl who had held her crumpled flyer up to the wind at the stairwell. This was the girl who had laughed and said, Who exactly are you talking to?"
  });
  setLine("a214", 7, {
    text: "A-017 stood at the end of the corridor, cold through her whole body. In that instant she did not even recognize the face first. She recognized the motion of the lifted chin, the easy return of mockery to the corner of the mouth, as if it were a habit so familiar it could grow back on its own."
  });
  setLine("a214", 8, {
    text: "At first A-214 was still denying it all. She said it had only been a joke. She said she had only wanted to scare her. She said she had never imagined the paper would be taken by the wind, still less that the two of them would fall together. Every excuse came out quickly, but her fingers kept tightening, as if even she knew those excuses could not hold up the place where she was standing now."
  });
  setLine("a214", 9, {
    text: "I just didn't think it would turn into that."
  });
  setLine("a214", 10, {
    text: "Things like this happen at school every day. Why does all of it get counted on my head?"
  });
  setLine("a214", 11, {
    text: "Her mouth was still holding firm, but her gaze had already begun to drift, uncontrollably, deeper into the corridor. It was as if what she truly wanted was not a sentence that would excuse her, but another figure she did not dare call out directly."
  });
  setLine("a214", 12, {
    text: "...Would she be here?"
  });
  setLine("a214", 13, {
    text: "Could I still see her again?"
  });
  setLine("a214", 14, {
    text: "This place will not repair the outcome for you first and only then let you meet again."
  });
  setLine("a214", 15, {
    text: "When A-017 heard that, her stomach went hollow all at once. It was too familiar. Familiar enough that she hardly needed to think to know what came next, to know how those words that make harm sound ordinary and cruelty sound like everyone's normal had once pressed her back into silence again and again."
  });
  setLine("a214", 16, {
    text: "For an instant she even wanted to stride out and hurl the sentence back at her. You have no right to see her again. But in the end that hatred only jammed itself in her throat, burning hot against her chest. The courtyard did not say it for her. She did not say it either. That rage without an exit could only remain inside her body together with the wind from that day."
  });
  setLine("a214", 17, {
    text: "What truly made her cold was not the words themselves, but how practiced A-214 was at saying them. As if making harm sound lighter, flatter, more like one ordinary little thing everyone goes through could really wipe the day of the fall out of the world."
  });
  setLine("a214", 18, {
    text: "Yume did not argue with her. The mirror did not give an answer immediately either. At first it only reflected A-214's whitening face. Then, after a pause, that cold light slowly spread outward from the edges of her face, like a thin curtain being drawn aside to both ends."
  });
  setLine("a214", 19, {
    text: "The classroom appeared first. Then the stairs, the hallway, the crowded shadows between desks. Even that flash of satisfaction that had once passed through her eyes when she saw the other girl tremble, so brief that she had hardly been willing to admit it even to herself, was lit with merciless clarity."
  });
  setLine("a214", 20, {
    text: "The mirror erased none of the details. It left behind every small thing that would once have been lightly covered over by the phrase just a joke: the upward curl at the corner of her mouth when others laughed along, the deliberate outward angle of her wrist when she raised the flyer higher, and the flicker of pleasure that crossed her eyes when the other girl finally lunged for it, too brief to be fully caught even by her own notice."
  });
  setLine("a214", 21, {
    text: "A-214's face went white inch by inch before the mirror. For the first time she truly could not say I didn't do anything. The mirror was not asking her about law. It was asking something simpler. At the time, did you know she would hurt?"
  });
  setLine("a214", 22, {
    text: "She stood within that cold light for a long time without speaking. It was as if only at that moment was she finally forced to admit something she had always known and never once allowed herself to say plainly: what frightened her had never been other people calling her cruel, but the mirror at last refusing to let her hide behind I didn't do anything."
  });
  setLine("a214", 23, {
    text: "I knew."
  });
  setLine("a214", 24, {
    text: "When she returned from the relive, she was drenched in rain. In that round, she had stopped. She woke first in the classroom. Sunlight came through the curtains in long strips across the desks. The fan turned slowly overhead. The room was full of pages rubbing together, chairs scraping, girls talking and laughing in clusters. Everything was exactly like the most ordinary afternoon."
  });
  setLine("a214", 25, {
    text: "She lowered her eyes and saw her own hand resting against the edge of the textbook, ready as always to throw out some ordering line. The motion was terrifyingly familiar, so familiar that for one instant she could not tell whether she had been sent back at all, or whether she had never truly left that ordinary life in which people slowly learn how to grow mean."
  });
  setLine("a214", 26, {
    text: "Hey, she's here again. Come on, aren't you usually the best at ordering people around?"
  });
  setLine("a214", 27, {
    text: "Those lines that had once come as naturally as instinct jammed all at once in her throat. She parted her lips and realized she could not even force out the lightest sneer."
  });
  setLine("a214", 28, {
    text: "She saw the girl by the window with her head lowered, fingers trembling once, very faintly, against the page. The tremor was so small it ought to have meant nothing at all, and yet it struck her first like a needle in the eye. All at once she understood: it was not that she had failed to see before. She had seen, and spoken anyway."
  });
  setLine("a214", 29, {
    text: "...Forget it."
  });
  setLine("a214", 30, {
    text: "You go yourselves."
  });
  setLine("a214", 31, {
    text: "At lunch someone deliberately knocked a workbook to the floor. The pages spilled and slid to her feet. Everyone around was waiting to watch the girl bend down, just as before, and pick them up page by page. But this time A-214 stood up faster than she had expected herself to."
  });
  setLine("a214", 32, {
    text: "She crouched and gathered the scattered pages one by one. Only when her fingertips touched the paper edges did she realize her own hands were shaking. At the very bottom lay that pale-blue flyer, flattened again and again over time."
  });
  setLine("a214", 33, {
    text: "As she held the paper and the workbook together in her palms, something in her chest hollowed out. For the first time she truly understood that what she had once lifted up to tease was never just a wrinkled page. What rested on it was something another person had refused, all this time, to let go."
  });
  setLine("a214", 34, {
    text: "...Thank you."
  });
  setLine("a214", 35, {
    text: "Those two words pricked her ears like needles. She stood so abruptly it was almost clumsy and did not dare look back again. Only then did she realize that even the slightest deviation toward kindness can make someone who has been hurt for too long doubt whether it is real."
  });
  setLine("a214", 36, {
    text: "For that whole afternoon, she never turned back once toward the seat by the window. Not because she did not care. Because she suddenly found that she had no idea what face she ought to use to look. She could stop the mouth that ordered others around, but she still did not know how to take those already-happened days off her own hands."
  });
  setLine("a214", 37, {
    text: "When school ended, the wind was as strong as ever. The crowd surged toward the stairwell. She moved first, returning the flyer to the girl's hands and stretching out an arm to hold the others back. When the wind came pouring in through the high window, she even stepped back on instinct instead of driving anyone toward the rail."
  });
  setLine("a214", 38, {
    text: "At the sound of that wind, her shoulders tensed almost like a reflex. It was as if her body recognized before her mind where this day would lead. She could have said nothing and let the pushing of the crowd carry the whole thing forward, as before. Instead she stood there and cut the line short, the line that would once have forced someone toward the edge."
  });
  setLine("a214", 39, {
    text: "The wind is strong today."
  });
  setLine("a214", 40, {
    text: "Don't stand too close to the edge."
  });
  setLine("a214", 41, {
    text: "The girl stared, as if she could not understand why those were the words A-214 chose to say. But in the end A-214 still forced out the rest."
  });
  setLine("a214", 42, {
    text: "I'm sorry."
  });
  setLine("a214", 43, {
    text: "The apology was so light it seemed ready to scatter at the slightest touch. She knew it herself. It was too thin to hold anything up. Even so, it was the first time she had said it, not in order to make things lighter, but because she could no longer push that day entirely onto the wind, onto accident, onto the excuse that everyone does it."
  });
  setLine("a214", 44, {
    text: "When you apologized, was it for her, or because you could finally stop having to keep seeing yourself?"
  });
  setLine("a214", 45, {
    text: "What do you mean?"
  });
  setLine("a214", 46, {
    text: "Did you truly want to give that apology to her? Or had you simply reached the point where, every time you remembered that day, you could no longer bear having to go on seeing this version of yourself?"
  });
  setLine("a214", 47, {
    text: "A-214 did not answer. Her tears fell quickly. They were not tears that could wash anything clean. They were more like the final admission that from then on, every time she saw that wind, she would remember that she had been there too."
  });
  setLine("a214", 48, {
    text: "At last she understood that remorse and regret do not automatically grow into a new exit simply because they come late. More often they only remain inside the body for a while and then sink, slowly, together with everything else. What remains is not an exit, but the result that has already taken place."
  });
  setLine("a214", 49, {
    text: "Acknowledgment established."
  });
  setLine("a214", 50, {
    text: "But no fragment is generated."
  });
  setLine("a214", 51, {
    text: "Why is it still not enough?"
  });
  setLine("a214", 52, {
    text: "Because becoming regretful is not happiness."
  });
  setLine("a214", 53, {
    text: "And not every story leaves its aggressor a chance to apologize."
  });
  setLine("a214", 54, {
    text: "As A-214 left, a pale white suddenly lit up deep in the corridor. It was not a flower, and not a lamp. It was more like the seamless white wall at the very end of the hall retreating backward just enough to open a narrow door."
  });
  setLine("a214", 55, {
    text: "She did not step through at once. She only stood before it for a while, as if finally understanding that some afters are not given after one is forgiven. Even without forgiveness, they still have to be walked through alone."
  });
  setLine("a214", 56, {
    text: "This place prepares no exits for anyone's regret."
  });
  setLine("a214", 57, {
    text: "There are only results here."
  });
  setLine("a214", 58, {
    text: "This time, you walk by yourself."
  });
  setLine("a214", 59, {
    text: "A-017 watched her pass through that white door and, for the first time, truly understood: some people will leave, and she herself must go on remaining here."
  });
  setLine("a214", 60, {
    text: "Only after the door closed did Yume press the ink of that line deeper. Between inflicting harm and receiving it, there is no third safe passage called I didn't push that hard."
  });

  setLine("azalea", 1, {
    eyebrow: "Chapter 08",
    title: "Azalea",
    subtitle: "She Was Not Left Behind by Fire. She Was Left Behind by What Had Not Yet Been Checked.",
    location: "The Old Music Room at Dusk",
    bgmName: "Courtyard Days"
  });
  setRange("azalea", 2, 14, { location: "By the Fountain" });
  setRange("azalea", 15, 20, { location: "Memory" });
  setRange("azalea", 21, 22, { location: "By the Fountain" });
  setRange("azalea", 2, 4, { speaker: "Narration" });
  setLine("azalea", 5, { speaker: "A-017" });
  setLine("azalea", 6, { speaker: "Azalea" });
  setLine("azalea", 7, { speaker: "Azalea" });
  setRange("azalea", 8, 11, { speaker: "Narration" });
  setLine("azalea", 12, { speaker: "Azalea" });
  setLine("azalea", 13, { speaker: "Azalea" });
  setLine("azalea", 14, { speaker: "Narration" });
  setLine("azalea", 15, { speaker: "Hana" });
  setRange("azalea", 16, 18, { speaker: "Narration" });
  setLine("azalea", 19, { speaker: "Hana" });
  setLine("azalea", 20, { speaker: "Hana" });
  setRange("azalea", 21, 22, { speaker: "Narration" });
  setLine("azalea", 2, {
    text: "Azalea always sang at dusk. The melody was light, as if drifting out of somewhere very, very old, settling first beside the fountain and then into the wind."
  });
  setLine("azalea", 3, {
    text: "But before she sang, she always put everything around her in order. She flattened cushions, straightened cups, pressed shawls back onto shoulders, and even the petals the wind had dropped onto the ground she would pick up and place somewhere more fit for them to remain."
  });
  setLine("azalea", 4, {
    text: "She did these things in silence, as if she were not arranging a table but checking whether, if someone came over, everything would be just right. Whether a lifted hand would meet the warm cup first. Whether there was any part of the place not yet ready for someone to sit down."
  });
  setLine("azalea", 5, {
    text: "Why do you always do these first?"
  });
  setLine("azalea", 6, {
    text: "Because someone has to make sure everything is ready first."
  });
  setLine("azalea", 7, {
    text: "Otherwise, how could anyone step outward in peace?"
  });
  setLine("azalea", 8, {
    text: "Her lists were never cold tables on a page. They were strings of names that still breathed. Miss even a syllable, and she would wake in the middle of the night as though, somewhere inside a dream, someone had shut a door one beat too soon."
  });
  setLine("azalea", 9, {
    text: "When A-017 heard that, something inside her hollowed out first. She had never imagined that there could be someone for whom making sure everything was ready had become instinct."
  });
  setLine("azalea", 10, {
    text: "While they were still speaking, Hana came along from the far end of the corridor, looking as though she had left the matter of resting behind her again. Azalea took a single glance and quietly moved the cold tea aside, pushing the warm cup into Hana's hand."
  });
  setLine("azalea", 11, {
    text: "Then she lifted a hand and pressed Hana's shawl back onto her shoulder where the wind had loosened it. The motion was so practiced it seemed she had done it countless times. It was not service. It was more like she had already taken another person's warmth and cold, sleep and hours, and even the part of them that forgets to care for itself, into her own hands."
  });
  setLine("azalea", 12, {
    text: "Don't always stand in the draft."
  });
  setLine("azalea", 13, {
    text: "Finish your tea first."
  });
  setLine("azalea", 14, {
    text: "Hana lowered her eyes to the tea and actually answered with the slightest sound of agreement. Watching them, A-017 realized for the first time that some people, too, are received this naturally."
  });
  setLine("azalea", 15, {
    text: "Later, Hana told her Azalea's story. An old house. A sickly lady. A little girl who could never quite tie her own shoelaces. And an old piano that Azalea would play every evening, softly and steadily."
  });
  setLine("azalea", 16, {
    text: "Before she played, she would adjust the bench. Fix a small clip at the corner of the sheet music so it would not throw back glare. Crouch to tie the girl's laces into matching rabbit ears. Then rise and remind her to finish her milk."
  });
  setLine("azalea", 17, {
    text: "When the fire started, Azalea had already led many people out to the door. But she turned back anyway. Not to get herself out. To make sure no one was still upstairs."
  });
  setLine("azalea", 18, {
    text: "The storm was fierce that night. Fire climbed upward through the hanging curtains, and the old house came down section by section. The place where she stopped was never where a melody ought to end, nor where a song ought to break. It was only the last name in the list inside her heart that she had still not managed to check off."
  });
  setLine("azalea", 19, {
    text: "She was not left behind by the fire."
  });
  setLine("azalea", 20, {
    text: "She was left behind by I still haven't finished checking."
  });
  setLine("azalea", 21, {
    text: "That evening, Azalea stopped halfway through her song again. But this time A-017 already knew she had not stopped because she had forgotten the words, or because she could not keep singing. She had stopped to listen, listening for whether there was still anything in the courtyard that had not yet been properly checked."
  });
  setLine("azalea", 22, {
    text: "Far away, Yume closed the ledger very softly in the wind, as if pressing flat an item on a list that had not yet been crossed out. When the song resumed, A-017 finally understood: it was not a melody meant to please the ear. It was asking who had still not been counted among those allowed to feel safe."
  });

  setLine("meiling", 1, {
    eyebrow: "Chapter 09",
    title: "Meiling",
    subtitle: "Doing Everything Right Does Not Mean Anyone Will Remember.",
    location: "One Step Too Slow",
    bgmName: "Courtyard Days"
  });
  setRange("meiling", 2, 8, { location: "Courtyard Long Table" });
  setRange("meiling", 9, 14, { location: "Memory" });
  setRange("meiling", 15, 16, { location: "Afterward" });
  setRange("meiling", 17, 19, { location: "Courtyard Long Table" });
  setLine("meiling", 2, { speaker: "Narration" });
  setLine("meiling", 3, { speaker: "Narration" });
  setLine("meiling", 4, { speaker: "Meiling" });
  setLine("meiling", 5, { speaker: "Narration" });
  setLine("meiling", 6, { speaker: "A-017" });
  setLine("meiling", 7, { speaker: "Meiling" });
  setLine("meiling", 8, { speaker: "Meiling" });
  setRange("meiling", 9, 16, { speaker: "Narration" });
  setLine("meiling", 17, { speaker: "Meiling" });
  setLine("meiling", 18, { speaker: "Meiling" });
  setLine("meiling", 19, { speaker: "Narration" });
  setLine("meiling", 2, {
    text: "What Meiling did most often in the courtyard was take count. Count the cups. Count the chairs. Count how many leaves the wind had blown down today."
  });
  setLine("meiling", 3, {
    text: "She did not always count correctly. Even so, she counted again and again, as if so long as numbers could begin once more, certain disappearances would not yet become complete."
  });
  setLine("meiling", 4, {
    text: "Five, six, seven..."
  });
  setLine("meiling", 5, {
    text: "The seventh cup was not always truly there. More often, seven was simply the shape in which she counted absence into visibility, so that she would remember whom she ought to look back for, for whom she ought to leave the door a little more open."
  });
  setLine("meiling", 6, {
    text: "Are you afraid of counting wrong?"
  });
  setLine("meiling", 7, {
    text: "Yes."
  });
  setLine("meiling", 8, {
    text: "But I am more afraid that even if one is missing, no one will look back."
  });
  setLine("meiling", 9, {
    text: "When she was alive, she was always carrying the list, the bottled water, other people's coats, and the little errands others pushed into her hands. Everyone assumed she would catch up. Everyone also assumed that if she were missing, no one would notice right away."
  });
  setLine("meiling", 10, {
    text: "It had rained the night before. She held the water in one arm and the list in the other, her shoes sinking into mud trampled wet beside the school bus. Ahead of her, people were stuffing coats, snacks, and laughter into the bus door together. No one turned back to count one more time."
  });
  setLine("meiling", 11, {
    text: "She had only been jostled half a step behind. But by the time she raised her head, the last bus door had already shut in front of her. She did not even have time to say I am still here."
  });
  setLine("meiling", 12, {
    text: "After the bus drove away, she ran a few steps along the sloping path beside it. The bottles knocked against her arm. The list fluttered up in the wind. She thought that if she could just move a little faster, she might still catch up."
  });
  setLine("meiling", 13, {
    text: "The moss at the edge of the slope was so thin it looked as though it had never existed at all. The first thing to slip when she stepped on it was her shoe. Then the bottles in her hand. Then the list."
  });
  setLine("meiling", 14, {
    text: "She reached out on instinct, but her body lost its balance first. In that instant there was nothing left in her mind except one very light, very short thought: if only someone had looked back and counted one more time."
  });
  setLine("meiling", 15, {
    text: "By the time someone truly realized one person was missing, it was already days later. They found her below the retaining slope. The bottles had rolled off in different directions. The list had been beaten by rain into a muddy lump, stuck there like a handful of waste paper thrown down in haste."
  });
  setLine("meiling", 16, {
    text: "Through those days, the sun still went down as usual. The bus still came back as usual. Even the bell over the school broadcast did not pause an extra second for her. And precisely because everything remained so ordinary, the whole thing felt more like a stone sinking slowly out of sight."
  });
  setLine("meiling", 17, {
    text: "Only later did I understand that trying to do everything right does not mean anyone will remember you."
  });
  setLine("meiling", 18, {
    text: "But if I do not even keep doing this, it feels as though there truly will not be a trace left at all."
  });
  setLine("meiling", 19, {
    text: "A-017 did not say I will remember you. That would have sounded too much like another polite sentence slipping someone back to the end of a list. She only nudged the chair beside her inward by half an inch, as if first making room for a place whose name had still not been spoken aloud."
  });

  setLine("shella", 1, {
    eyebrow: "Chapter 10",
    title: "Shella",
    subtitle: "A Smile Is Not Ease. It Is How She Tells This Home It Has Not Gone Empty Yet.",
    location: "The One Who Keeps a Place Open",
    bgmName: "Courtyard Days"
  });
  setRange("shella", 2, 3, { location: "Courtyard Long Table" });
  setLine("shella", 4, { location: "Childhood Room" });
  setLine("shella", 5, { location: "A Young Girl's Room" });
  setRange("shella", 6, 8, { location: "White Dayroom" });
  setRange("shella", 9, 14, { location: "Courtyard Long Table" });
  setRange("shella", 2, 8, { speaker: "Narration" });
  setLine("shella", 9, { speaker: "A-017" });
  setLine("shella", 10, { speaker: "Shella" });
  setLine("shella", 11, { speaker: "Shella" });
  setRange("shella", 12, 14, { speaker: "Narration" });
  setLine("shella", 2, {
    text: "Shella liked dividing things into two. Two cups. Two small sweets. Two strips of light lying side by side along the edge of the table. At first A-017 thought it was only habit. Only later did she understand that it was a way of surviving Shella had learned while still alive."
  });
  setLine("shella", 3, {
    text: "The beam of light beside the second sweet was like a small lamp she had deliberately left on, not because she truly expected someone to sit down, but so that absence would not be miswritten as something that had never existed."
  });
  setLine("shella", 4, {
    text: "As a child, Shella had actually been healthy. She would race across the wooden floor in the afternoon until she was drenched in sweat, then rise on tiptoe to set out two cups in perfect order and wait in earnest for the other person to come back so they could finish the sweets together."
  });
  setLine("shella", 5, {
    text: "Later she grew older, and slowly came to understand that no one would really return to sit in that place. Even so, she kept making two portions. As though so long as that one share remained safely where it was, the vacancy would not yet become blankness all the way through."
  });
  setLine("shella", 6, {
    text: "Later still, it was her own body that failed first. The hospital room was white, so white it felt capable of rubbing thin the traces that someone had ever lived there at all. Yet there were still two cups by her bedside, and the small dish near her pillow still held a second portion."
  });
  setLine("shella", 7, {
    text: "She learned very early that so long as she was still smiling, the air in the room would not collapse at once. So gradually the smile became instinct. Not because she did not hurt, but because she no longer knew any other expression for keeping a place open."
  });
  setLine("shella", 8, {
    text: "Even when the heart monitor finally stretched into one long tone on some overbright white day, the smile had still not completely left her face."
  });
  setLine("shella", 9, {
    text: "Don't you get tired?"
  });
  setLine("shella", 10, {
    text: "I do."
  });
  setLine("shella", 11, {
    text: "But if I stop smiling, it feels as though even her share will disappear with it."
  });
  setLine("shella", 12, {
    text: "For the first time, A-017 understood that Shella did not divide things into two because she still believed the other person would return. She had simply learned too early that once no one keeps a place open for some people anymore, they fade as if they had never come at all."
  });
  setLine("shella", 13, {
    text: "And the reason the courtyard had kept her was that this still had not ended. Even if the other person would never return, even if the heart monitor in that room had stopped long ago, the place Shella kept open on that side had stubbornly continued all the way here."
  });
  setLine("shella", 14, {
    text: "At the far end of the long table, Meiling's fingertips skimmed the rim of a cup as though counting the evidence of all those pairs one more time. Looking at the extra sweet, A-017 suddenly thought of the extra afterward in her own palm, and understood that all of them, in different ways, were reserving seats for those who would never come back."
  });

  setLine("mizuki", 1, {
    eyebrow: "Chapter 11",
    title: "Mizuki",
    subtitle: "This Time, I Have to See It First.",
    location: "At the Door",
    bgmName: "Echo in the Mirror"
  });
  setRange("mizuki", 2, 6, { location: "At the Courtyard Door" });
  setRange("mizuki", 7, 16, { location: "Memory" });
  setRange("mizuki", 17, 20, { location: "At the Courtyard Door" });
  setLine("mizuki", 2, { speaker: "Narration" });
  setLine("mizuki", 3, { speaker: "A-017" });
  setLine("mizuki", 4, { speaker: "Mizuki" });
  setRange("mizuki", 5, 16, { speaker: "Narration" });
  setLine("mizuki", 10, { speaker: "Kidnapper" });
  setLine("mizuki", 17, { speaker: "Mizuki" });
  setLine("mizuki", 18, { speaker: "Mizuki" });
  setRange("mizuki", 19, 20, { speaker: "Narration" });
  setLine("mizuki", 2, {
    text: "Mizuki always stood by the door. If the wind rose, she watched the door. If someone passed by, her gaze swept over them first, as if so long as she saw first, there might still be time to stop something."
  });
  setLine("mizuki", 3, {
    text: "Are you waiting for someone?"
  });
  setLine("mizuki", 4, {
    text: "I'm watching to see whether anyone else will be taken away."
  });
  setLine("mizuki", 5, {
    text: "Far away, the sound of Yume turning a page across her knees was almost imperceptible. Yet it fell along the same line as Mizuki's gaze fixed at the doorway. One recorded the place where disappearance had occurred. The other watched whether anyone else would be dragged past the frame."
  });
  setLine("mizuki", 6, {
    text: "When A-017 heard that, she did not answer at once. Because all at once she understood that Mizuki was not guarding the door. She was guarding the instant she herself had failed to see in time."
  });
  setLine("mizuki", 7, {
    text: "Before all that, she had not actually been good at being an older sister. If anything, it was the younger one who knew better how to care for people. She would smooth down the little strands of hair springing up at Mizuki's forehead, retie the ribbon she had knotted in a mess, and laugh as she pressed a freshly chosen sticker onto her sleeve."
  });
  setLine("mizuki", 8, {
    text: "Mizuki had always found it troublesome, as though her little sister were treating her like someone who needed tidying up. Only later did she understand that this was simply the way her sister had always been reaching toward her."
  });
  setLine("mizuki", 9, {
    text: "At that time, their family drew too much attention in the town. They were not some legendary noble house. They were only prominent enough that people believed taking both daughters would very quickly turn into a large sum of money."
  });
  setLine("mizuki", 10, {
    text: "Both sisters are here. The price will be higher. Take what you came for and go. Leave no one alive."
  });
  setLine("mizuki", 11, {
    text: "When those words fell, her younger sister's hand tightened visibly. That was the moment Mizuki finally understood that what had been left to them was not waiting. It was running."
  });
  setLine("mizuki", 12, {
    text: "They tried the back door. They tried dragging a fallen chair to the window. They tried lifting the bolt little by little in the few dozen seconds when footsteps changed shifts outside. But every time, the tiny gap they managed to open was quickly closed again."
  });
  setLine("mizuki", 13, {
    text: "Until the last attempt, when they truly managed to strike the door open just enough for wind to pour through. Her younger sister shoved her outward first. And in that exact moment, the one who had always been pulling her forward suddenly turned and stepped in front of her instead."
  });
  setLine("mizuki", 14, {
    text: "Only then did Mizuki finally lunge. She lunged too late and too hard, knees slamming into the floor, palms tearing against it, like someone who had missed her time by far too much and was now trying to snatch the word sister back out of a result that had already happened."
  });
  setLine("mizuki", 15, {
    text: "But she still failed. Her younger sister died before her eyes first, and when Mizuki threw herself forward she managed only to knock the figure before her half a step aside. The next blow finally landed on her instead. She fell beside her sister, and by the end of that night she too was dead."
  });
  setLine("mizuki", 16, {
    text: "The last thing she saw was the shadow of her younger sister still standing in front of her. Thin. Small. Yet quicker than every door and every blade that night to shield her first."
  });
  setLine("mizuki", 17, {
    text: "Couldn't keep it."
  });
  setLine("mizuki", 18, {
    text: "But if another person passes by here, at least I can see first."
  });
  setLine("mizuki", 19, {
    text: "A-017 touched the cuff of her sleeve without thinking, as if there too a sticker remained, one that would never get the chance to be pressed on all the way. She did not say I understand. She only softened her breathing, afraid of startling anything still within the crack of the door that might yet be seen in time."
  });
  setLine("mizuki", 20, {
    text: "Watching her back, A-017 suddenly understood that the courtyard was not made out of tragedies. It was made out of gestures that still had not ended after tragedy. Azalea kept checking. Meiling kept counting. Shella kept a place open. Mizuki kept watch."
  });

  setLine("rabbit-ears", 1, {
    eyebrow: "Chapter 12",
    title: "Rabbit Ears",
    subtitle: "Maid Is Not an Identity. It Is a Posture.",
    location: "Relationship Mark",
    bgmName: "Courtyard Days"
  });
  setRange("rabbit-ears", 2, 14, { location: "By the Flowerbed" });
  setLine("rabbit-ears", 2, { speaker: "Narration" });
  setLine("rabbit-ears", 3, { speaker: "A-017" });
  setLine("rabbit-ears", 4, { speaker: "Narration" });
  setLine("rabbit-ears", 5, { speaker: "Hana" });
  setLine("rabbit-ears", 6, { speaker: "Hana" });
  setLine("rabbit-ears", 7, { speaker: "Narration" });
  setLine("rabbit-ears", 8, { speaker: "A-017" });
  setLine("rabbit-ears", 9, { speaker: "Hana" });
  setLine("rabbit-ears", 10, { speaker: "Hana" });
  setLine("rabbit-ears", 11, { speaker: "Narration" });
  setLine("rabbit-ears", 12, { speaker: "Hana" });
  setLine("rabbit-ears", 13, { speaker: "A-017" });
  setLine("rabbit-ears", 14, { speaker: "Narration" });
  setLine("rabbit-ears", 2, {
    text: "One day, A-017 finally asked the question she had been carrying around for a long time. Hana was crouched beside the flowerbed trimming away dead branches. The wind was mild. The fountain made its fine, continuous sound. The four dolls were each in their usual place, like the quietest stretch of everyday life in the whole courtyard."
  });
  setLine("rabbit-ears", 3, {
    text: "Why are they maids?"
  });
  setLine("rabbit-ears", 4, {
    text: "Hana paused at that. She did not answer immediately. Instead she looked first toward the fountain, the long table, and the doorway where those familiar figures stood, as if to make sure whether the question was about clothing, or about why they had remained in exactly these shapes."
  });
  setLine("rabbit-ears", 5, {
    text: "Because most of the part of them that stayed was not for themselves."
  });
  setLine("rabbit-ears", 6, {
    text: "Wanting to care for someone. Wanting to protect someone. Wanting to be seen by someone. Or wanting to hold up the place that someone else left empty. Maid is not an identity. It is a posture."
  });
  setLine("rabbit-ears", 7, {
    text: "A-017 followed her gaze. Azalea was adjusting Hana's shawl just slightly back onto her shoulders. Meiling was counting cups. Shella was nudging sweets toward the place that would always remain empty. Mizuki was keeping her watch at the door. In that moment, maid did not look like decoration here. It looked like the way each of them had remained."
  });
  setLine("rabbit-ears", 8, {
    text: "Then what about the rabbit ears?"
  });
  setLine("rabbit-ears", 9, {
    text: "A relationship mark. When they put them on, they are acknowledging that they are still willing to let some part of their existence be upheld by a certain bond."
  });
  setLine("rabbit-ears", 10, {
    text: "So even if one day the rabbit ears are buried, it is not they who end. What ends is only the old way in which they had to rely on that relationship in order to keep existing."
  });
  setLine("rabbit-ears", 11, {
    text: "A-017 lowered her eyes to the flyer in her hand and was silent for a long time. She understood relationship mark. Was that crumpled page not her mark as well? Not the aquarium itself, but the afterward no one could accompany her to anymore. Something that could bring no one back, and yet that she still could not bear to let go of."
  });
  setLine("rabbit-ears", 12, {
    text: "Yume's ledger records these things too. Not to make anyone look beautiful. To keep the next bystander from calling their staying some kind of voluntary performance."
  });
  setLine("rabbit-ears", 13, {
    text: "...Then what if one day even the ledger is turned outward for other people to see?"
  });
  setLine("rabbit-ears", 14, {
    text: "She still wanted to ask more, but from the end of the corridor there suddenly came a wind that did not belong to the hour. It was not the kind of wind that would pass by the fountain or the flowerbed. It felt as though it had swept straight out from the deepest part of the courtyard, carrying with it a cold not yet written into the everyday."
  });

  setLine("visitor", 1, {
    eyebrow: "Chapter 13",
    title: "Visitor",
    subtitle: "Don't Be So Quick to Decide What This Place Means.",
    location: "The Observer Observed",
    bgmName: "Visitor"
  });
  setRange("visitor", 2, 3, { location: "Innermost Courtyard", speaker: "Narration" });
  setRange("visitor", 4, 5, { location: "At the Bottom of the Ledger Page", speaker: "Narration" });
  setLine("visitor", 6, { location: "Innermost Courtyard", speaker: "Narration" });
  setLine("visitor", 7, { location: "Beneath the Trellis", speaker: "Narration" });
  setLine("visitor", 8, { location: "Beneath the Trellis", speaker: "Moel" });
  setRange("visitor", 9, 10, { speaker: "Narration" });
  setLine("visitor", 9, { location: "Courtyard Center" });
  setRange("visitor", 10, 12, { location: "Rift High Above" });
  setLine("visitor", 11, { speaker: "Visitor" });
  setLine("visitor", 12, { speaker: "Visitor" });
  setRange("visitor", 13, 15, { location: "Courtyard Center", speaker: "Narration" });
  setLine("visitor", 16, { location: "Courtyard Center", speaker: "A-017" });
  setLine("visitor", 17, { location: "Rift High Above", speaker: "Visitor" });
  setLine("visitor", 18, { location: "Before the Record Page", speaker: "Yume" });
  setLine("visitor", 19, { location: "Before the Record Page", speaker: "Narration" });
  setLine("visitor", 20, { location: "High in the Rift", speaker: "Narration" });
  setRange("visitor", 21, 21, { location: "On the High Beam", speaker: "Narration" });
  setRange("visitor", 22, 24, { location: "On the High Beam", speaker: "Moel" });
  setLine("visitor", 25, { location: "On the High Beam", speaker: "Narration" });
  setLine("visitor", 26, { location: "On the High Beam", speaker: "Moel" });
  setRange("visitor", 27, 27, { location: "Courtyard Center", speaker: "Narration" });
  setLine("visitor", 28, { location: "Before the Record Page", speaker: "Narration" });
  setRange("visitor", 29, 30, { location: "End of the Corridor", speaker: "Narration" });
  setLine("visitor", 31, { location: "End of the Corridor", speaker: "A-017" });
  setLine("visitor", 32, { location: "Before the Record Page", speaker: "Narration" });
  setLine("visitor", 2, {
    text: "The anomaly truly began to spread just before the next record was due to begin. After that line was written, the courtyard fell silent for a very long time. Not its usual silence, the kind with wind, water, and distant humming in it, but a silence too complete, too deliberate, as though the whole courtyard were holding in its very last breath."
  });
  setLine("visitor", 3, {
    text: "In the next second, a very slight tremor came from the deepest part. The ripples in the fountain buckled first, and then the entire courtyard jolted hard, once. The ledger in Yume's hands suddenly grew alarmingly hot, as if someone deep beneath the page had burned straight through an entire line of old designations."
  });
  setLine("visitor", 4, {
    text: "She turned to the last page and saw a mass of characters she had never seen before surfacing at the bottom. They tangled into one another, overwrote one another, like many names left unprocessed all trying to force their way out through the same spot. Only after several seconds did they begin, little by little, to draw together, until at last they fixed into a single line: A-403."
  });
  setLine("visitor", 5, {
    text: "Once that line settled, the back of the page rasped as if scraped by fingernails from the other side. Not a warning. A signature delivered late: the strokes of victim, bystander, and perpetrator had once been stacked into the same square, and only now had they finally forced out a silhouette able to stand."
  });
  setLine("visitor", 6, {
    text: "At almost the same moment, that dark place at the deepest end, always held down beneath a thin mist, slowly rose into the shape of a person. She did not look as though she had stepped out from inside it. She looked as though she had always been there, pressed over and over beneath the outlines of countless failures until, at this moment, she finally acquired an edge."
  });
  setLine("visitor", 7, {
    text: "High in the shadow of the trellis, the black cat was the first to lift its head. It stared into that darkness for a long time, as if at last the answer that had been delayed too long had arrived."
  });
  setLine("visitor", 8, {
    text: "So you've finally come."
  });
  setLine("visitor", 9, {
    text: "Alice was the first to turn back from the far end of the corridor to the courtyard's center. Yume closed the ledger, still burning in her hands, and came back too. Hana happened to be standing at A-017's side just then. No one said enemy, but everyone knew that something had already moved beyond the place it could ever return to."
  });
  setLine("visitor", 10, {
    text: "Then the sky above the courtyard, that stretch of calm that had always been far too smooth, slowly split along a thin seam. Inside the pure white space, before any mirror even surfaced, lines of text had already begun to appear at the edges of the image."
  });
  setLine("visitor", 11, {
    text: "What kind of setting is this courtyard supposed to be? Aren't the rabbit-ear maids a little too on the nose? That silver-haired one looks like the administrator. The twin-tail one totally feels like the core. What's the black-haired one always writing? Who are those seven cups waiting for?"
  });
  setLine("visitor", 12, {
    text: "Wasn't she the bully? Why doesn't she fight back at all? If it were me I'd have snapped a long time ago. If she keeps hanging her head, isn't that basically saying people can treat her that way?"
  });
  setLine("visitor", 13, {
    text: "The words fell on neither wall nor mirror. It was more like someone had pasted those drifting sentences directly in front of everyone's eyes. They were not only looking at A-017. They were looking at Yume, Hana, Alice, the seven cups, the rabbit ears, the long table, and the empty seat."
  });
  setLine("visitor", 14, {
    text: "A-017 jerked her head up. For the first time she understood clearly that from a great enough distance, even another person's pain could easily be turned into something to discuss. For an instant she almost lowered her head by reflex, the way she had in the classroom, as if drawing her gaze back first might keep the thing from landing on her for real."
  });
  setLine("visitor", 15, {
    text: "At the other end of the corridor, Yume gripped the spine of the ledger until her knuckles whitened. She understood better than anyone: once the next line was written, it would no longer belong only to the courtyard. It would become the kind of sentence that could be circulated, edited, and set to music. Visitor was not here to watch a story. They were waiting for a page convenient enough to let them pass judgment."
  });
  setLine("visitor", 16, {
    text: "...Who are you?"
  });
  setLine("visitor", 17, {
    text: "She can see us? System bug?"
  });
  setLine("visitor", 18, {
    text: "Observer: observed."
  });
  setLine("visitor", 19, {
    text: "The four words fell, yet the ink bled upward instead, as if the ledger were glancing back. Only then did she understand: if she recorded Visitor merely as noise, she too would become someone standing outside, picking terms. The next stroke had to write pain, not just classification."
  });
  setLine("visitor", 20, {
    text: "Under countless scattered sentences, a system message slowly lit up: new category added: Visitor. Status: unarchived / unrecorded / undefined."
  });
  setLine("visitor", 21, {
    text: "At some point the black cat had already leapt to the highest beam. In the next second it slowly turned human."
  });
  setLine("visitor", 22, {
    text: "Can you finally see clearly now?"
  });
  setLine("visitor", 23, {
    text: "You think you're writing them. But really, you are only standing outside, picking the handiest word on their behalf."
  });
  setLine("visitor", 24, {
    text: "You always mistake fear that was never spoken aloud for consent."
  });
  setLine("visitor", 25, {
    text: "When she finished, she lifted one hand very lightly, as if brushing away something that had come too close."
  });
  setLine("visitor", 26, {
    text: "If you want to watch, then watch all the way through yourself. Don't rush to decide what this place means."
  });
  setLine("visitor", 27, {
    text: "Only after she pushed that layer of noise half a step back did A-017 realize she had been holding her breath all along. The line of Hana's shoulders eased. The pressure of Yume's hand on the page loosened. Even Alice lowered her raised eyes by an inch."
  });
  setLine("visitor", 28, {
    text: "But Visitor did not truly vanish. When Yume lowered her head again, another kind of record had already begun to surface in the margins between the A-line designations and in the blank spaces left by the overwritten pages: V-xxxx. Not choosing on the girls' behalf, but hurrying to rename what had already happened after the choice."
  });
  setLine("visitor", 29, {
    text: "The shadow at the deepest end of the courtyard stood a little more steadily. A-017 knew the true anomaly had not begun to leave yet. It had only finally grown into a shape everyone could see."
  });
  setLine("visitor", 30, {
    text: "Deep in the rift, text still rolled onward, like countless hands scrambling to hand over the future for someone else. But if a future has not passed through the breathing of the person it belongs to, then it is only an easy label."
  });
  setLine("visitor", 31, {
    text: "That thing is calling me. Not my ears... my bones."
  });
  setLine("visitor", 32, {
    text: "Before the wind had even reached the corridor, the ledger on Yume's knees had already flipped itself to the last page. The blank space curled at the edges as if singed by fire, as though some designation were seeping outward through the paper fibers."
  });

  setLine("a403", 1, {
    eyebrow: "Chapter 14",
    title: "A-403",
    subtitle: "Alice Was Never Only One.",
    location: "The Four Hundred and Third Failure",
    bgmName: "Visitor"
  });
  setRange("a403", 2, 3, { location: "Courtyard at Midnight", speaker: "Narration" });
  setRange("a403", 4, 5, { location: "By the Fountain", speaker: "Narration" });
  setLine("a403", 6, { location: "Across the Fountain", speaker: "Narration" });
  setLine("a403", 7, { location: "Across the Fountain", speaker: "Narration" });
  setRange("a403", 8, 9, { location: "Before the Record Page", speaker: "Narration" });
  setLine("a403", 10, { location: "Courtyard Center", speaker: "Narration" });
  setLine("a403", 11, { location: "Across the Fountain", speaker: "A-403" });
  setLine("a403", 12, { location: "Across the Fountain", speaker: "Narration" });
  setLine("a403", 13, { location: "By the Fountain", speaker: "Narration" });
  setLine("a403", 14, { location: "By the Fountain", speaker: "A-017" });
  setLine("a403", 15, { location: "Before the Record Page", speaker: "Yume" });
  setLine("a403", 16, { location: "Before the Record Page", speaker: "Narration" });
  setLine("a403", 17, { location: "Across the Fountain", speaker: "A-403" });
  setLine("a403", 18, { location: "Courtyard Center", speaker: "Hana" });
  setLine("a403", 19, { location: "Across the Fountain", speaker: "A-403" });
  setLine("a403", 20, { location: "By the Fountain", speaker: "Alice" });
  setLine("a403", 21, { location: "Across the Fountain", speaker: "A-403" });
  setLine("a403", 22, { location: "Courtyard Center", speaker: "Narration" });
  setLine("a403", 23, { location: "By the Fountain", speaker: "A-017" });
  setRange("a403", 24, 26, { location: "Across the Fountain", speaker: "A-403" });
  setRange("a403", 27, 28, { location: "Courtyard Center", speaker: "Narration" });
  setLine("a403", 2, {
    text: "That night, the courtyard did not first see someone. It first felt something that had long been pressed beneath a deeper layer finally rise to the surface. The nameplates at the end of the corridor lit one after another, as if many lives that had never truly been allowed to end were being illuminated again in the dark."
  });
  setLine("a403", 3, {
    text: "Every name that lit up had once almost been swallowed by a collective term. Alice was never only one, and failure was never only once. The system loved folding them into the same line of designation so that those watching would never have to acknowledge their faces one by one."
  });
  setLine("a403", 4, {
    text: "The first thing A-017 noticed was not a sound but the air suddenly growing heavier. The whole courtyard seemed to hold its breath in the same instant, even the water by the fountain going unnaturally still, as if something were using that sheen to slowly press itself back into human shape."
  });
  setLine("a403", 5, {
    text: "She lowered her eyes without thinking. In the place where only her own face ought to have been reflected, another face surfaced first, blurred and unstable. It wavered between many outlines, at times resembling herself, at times A-214, and at times some stranger who had never once been fully told."
  });
  setLine("a403", 6, {
    text: "When A-017 lifted her head again, that person was already standing across the fountain. As if she had always been there, and only now had the courtyard finally admitted it could no longer keep her pressed down."
  });
  setLine("a403", 7, {
    text: "It was not that she lacked a designation. It was that the designation would not stay fixed. Like an old mark overwritten too many times, it floated at her wrist for a moment, then faded near her collarbone, only to return from some deeper place."
  });
  setLine("a403", 8, {
    text: "At almost the same time, Yume's ledger flipped by itself to the last page. The paper scraped across her fingertips with an edge that was far too sharp. When she lowered her head, only one line remained at the bottom, finally settled in place: A-403."
  });
  setLine("a403", 9, {
    text: "That line looked like old blood seeping out through paper fibers. If Visitor had been here, they would likely have hurried to give it a title as well. But this was not a comment stream. It was bone that had been snapped four hundred and three times and still refused to shatter, knocking at the cover."
  });
  setLine("a403", 10, {
    text: "Yume did not shut the page at once. Hana and Alice returned to the courtyard's center as well. The four dolls lifted their heads from where they stood. Even the wind seemed to stop a little farther away than all of them."
  });
  setLine("a403", 11, {
    text: "So it's already the four hundred and third time."
  });
  setLine("a403", 12, {
    text: "When she spoke that number, she did not sound as though she were counting herself. It was more as though she were confirming on behalf of all those failures long since crushed together into an indistinguishable mass: so they really had failed this many times already."
  });
  setLine("a403", 13, {
    text: "The fountain's surface looked as though someone had replaced it with colder glass. A-403 dipped her fingertips into it. As the ripples opened, many faces flashed there at once, some like her own, some like girls A-017 had never seen, before shattering together into rings of meaningless waves."
  });
  setLine("a403", 14, {
    text: "...I know you. Not your face. That sick feeling of having already seen this countless times."
  });
  setLine("a403", 15, {
    text: "Don't touch that line."
  });
  setLine("a403", 16, {
    text: "But the tip of the pen still came down. The instant the ink took shape, it was thrust upward as if from behind the page, and several hundred lines of fighting strokes floated across the sheet at once. They covered, denied, and overrode one another, like many futures all fighting in the same second to claim they were the authentic one."
  });
  setLine("a403", 17, {
    text: "Every time, you try to fold a story into its cleanest line. Every time, by the end, there is always one extra shard of bone that will not fold back in. I'm that shard."
  });
  setLine("a403", 18, {
    text: "You're not here to be saved. You're here to drag all of us into the same failure."
  });
  setLine("a403", 19, {
    text: "You're already here. And you still think I have to drag you?"
  });
  setLine("a403", 20, {
    text: "Who are you?"
  });
  setLine("a403", 21, {
    text: "Asking for a name is too cheap. Your ledgers have never lacked designations. What you've always lacked is the nerve to admit that behind every designation there was once a face that could have grown into something else."
  });
  setLine("a403", 22, {
    text: "Alice pressed the black and white books instinctively to her chest. Yet the spines seemed suddenly hollowed of weight, and a faint dry sound came from within the pages, as if something were being pulled out through the binding."
  });
  setLine("a403", 23, {
    text: "Those words... they're here again. The kind stuck up in the sky. They're watching us, aren't they?"
  });
  setLine("a403", 24, {
    text: "It's enough that you can hear them. From here on, stop pretending you are the only ones passing judgment."
  });
  setLine("a403", 25, {
    text: "A-403 looked at her and suddenly gave a very light smile. It was so brief it felt more like fatigue finally forced out into the open."
  });
  setLine("a403", 26, {
    text: "I'm the page you never managed to finish processing."
  });
  setLine("a403", 27, {
    text: "The night did not deepen. It was only that every light seemed to be dimmed by a single degree at once, so that the next chapter of this conversation would have to unfold inside a narrower band of light."
  });
  setLine("a403", 28, {
    text: "If the thirteenth card had once been missing from the ledger, it did not need to be turned over yet. First let this shard of bone finish speaking: every time someone folds another person's pain into one clean story line, another breath remains caught in the crease."
  });

  setLine("failed-answer", 1, {
    eyebrow: "Chapter 15",
    title: "Failed Answer",
    subtitle: "Some Failures Do Not Belong to the Singular.",
    location: "Moonlit Bench",
    bgmName: "A-403"
  });
  setRange("failed-answer", 2, 20, { location: "Under the Moonlit Bench" });
  setRange("failed-answer", 2, 5, { speaker: "Narration" });
  setLine("failed-answer", 6, { speaker: "A-017" });
  setLine("failed-answer", 7, { speaker: "A-403" });
  setRange("failed-answer", 8, 9, { speaker: "Narration" });
  setLine("failed-answer", 10, { speaker: "A-403" });
  setLine("failed-answer", 11, { speaker: "A-017" });
  setLine("failed-answer", 12, { speaker: "A-403" });
  setLine("failed-answer", 13, { speaker: "Narration" });
  setLine("failed-answer", 14, { speaker: "A-017" });
  setRange("failed-answer", 15, 17, { speaker: "A-403" });
  setLine("failed-answer", 18, { speaker: "Narration" });
  setLine("failed-answer", 19, { speaker: "A-403" });
  setLine("failed-answer", 20, { speaker: "Narration" });
  setLine("failed-answer", 2, {
    text: "A-017 saw A-403 again later by the bench. By then the courtyard had quieted down, but it was not the silence that comes after things have passed. It was more like every sound had been pressed into an unseen place and was still continuing there."
  });
  setLine("failed-answer", 3, {
    text: "In daylight, Visitor's noisy words had been stuck across the seam in the sky. Now they seemed to have sunk into the soil. But sinking is not the same as disappearing. It only changes the way you hear. You have to press your ears to your own bones to catch those failures still counting on."
  });
  setLine("failed-answer", 4, {
    text: "She had only meant to pass by. But once her steps carried her there, she could not move past it at all. As if she had always known she would, sooner or later, have one sentence she would have to ask with her own mouth."
  });
  setLine("failed-answer", 5, {
    text: "The moonlight turned the bench into a sheet of paper bleached in reverse. There were no words in the sky, yet her bones still remembered the itch of daylight, all those gazes waiting for her to arrange her feelings into the most legible angle of grief. As she drew near, it felt as though the wood grain still held half a testimony unfinished. Not the aquarium. Why do they get to decide for me how much of this counts as pain?"
  });
  setLine("failed-answer", 6, {
    text: "Who exactly are you?"
  });
  setLine("failed-answer", 7, {
    text: "I am the shape made when failures that kept being explained away, kept being called not that serious, kept being pressed back down, finally piled on top of one another."
  });
  setLine("failed-answer", 8, {
    text: "Inside every omission gathered under the collective word Alice, there had once been someone wanting to raise a hand and say, I'm here. They raised that hand until it ached, and were still folded into the same footnote. A-403 is what happens when that footnote stacks too high and finally rises through the paper backing as a voice."
  });
  setLine("failed-answer", 9, {
    text: "A-017 did not argue at once. She only clenched the aquarium flyer, already pressed flat so many times, even tighter, until the paper edge drove back into her palm."
  });
  setLine("failed-answer", 10, {
    text: "What you truly want to go back to may never have been the aquarium at all."
  });
  setLine("failed-answer", 11, {
    text: "...What do you know?"
  });
  setLine("failed-answer", 12, {
    text: "Because what you want to go back to is the self you were before someone ruined her."
  });
  setLine("failed-answer", 13, {
    text: "When that sentence fell, A-017 felt as though the wind had blown her hollow from the inside. She had thought all along that what she clung to was a page, a place, an appointment never fulfilled. Only now did she realize what she had really been holding was something earlier, smaller, and far more impossible to save."
  });
  setLine("failed-answer", 14, {
    text: "Then who am I supposed to hate?"
  });
  setLine("failed-answer", 15, {
    text: "You can hate many people."
  });
  setLine("failed-answer", 16, {
    text: "You can also hate the whole thing that kept making all this possible."
  });
  setLine("failed-answer", 17, {
    text: "I'm not singular enough to hate only one person."
  });
  setLine("failed-answer", 18, {
    text: "At the center of the courtyard, the fountain missed half a beat of water, as if the entire system had drawn in one deep breath. In the next chapter, there would be no bench like this left for them to slowly spread out and smooth down their hatred upon."
  });
  setLine("failed-answer", 19, {
    text: "Come. Go witness how the fairness you built with your own hands collapses all at once."
  });
  setLine("failed-answer", 20, {
    text: "The moon still signed for no one. But the blank space on the bench had already peeled back one corner like the thirteenth card. Hatred need not be singular, and answers need not come out clean. So long as someone is still willing to write failure under their own name, the future has not yet been handed over for someone else to countersign."
  });

  setLine("god-kill", 1, {
    eyebrow: "Chapter 16",
    title: "GOD_KILL",
    subtitle: "For the First Time, the Future Refuses to Be Output on Its Behalf.",
    location: "The Night Before the Courtyard Collapsed",
    bgmName: "GOD_KILL"
  });
  setRange("god-kill", 2, 4, { location: "Before the Record Page", speaker: "Narration" });
  setLine("god-kill", 4, { location: "Courtyard Center" });
  setRange("god-kill", 5, 5, { location: "Courtyard Center", speaker: "Narration" });
  setRange("god-kill", 6, 6, { location: "By the Fountain", speaker: "Narration" });
  setRange("god-kill", 7, 9, { location: "By the Fountain", speaker: "Yume" });
  setRange("god-kill", 10, 11, { location: "By the Fountain", speaker: "Narration" });
  setLine("god-kill", 12, { location: "By the Fountain", speaker: "Yume" });
  setRange("god-kill", 13, 17, { location: "By the Fountain", speaker: "Narration" });
  setLine("god-kill", 15, { location: "Courtyard Center" });
  setLine("god-kill", 16, { location: "Courtyard Center" });
  setRange("god-kill", 18, 20, { location: "Courtyard Center" });
  setLine("god-kill", 18, { speaker: "A-403" });
  setLine("god-kill", 19, { speaker: "A-403" });
  setLine("god-kill", 20, { speaker: "Narration" });
  setLine("god-kill", 21, { location: "At the Edge of Darkness", speaker: "Narration" });
  setLine("god-kill", 22, { location: "At the Edge of Darkness", speaker: "Moel" });
  setLine("god-kill", 23, { location: "At the Edge of Darkness", speaker: "Moel" });
  setRange("god-kill", 24, 26, { location: "Courtyard Center" });
  setLine("god-kill", 24, { speaker: "A-403" });
  setLine("god-kill", 25, { speaker: "A-403" });
  setLine("god-kill", 26, { speaker: "Narration" });
  setLine("god-kill", 27, { location: "Visitor Intrusion", speaker: "Visitor" });
  setLine("god-kill", 28, { location: "Visitor Intrusion", speaker: "Alice" });
  setRange("god-kill", 29, 38, { location: "99.000000%" });
  setRange("god-kill", 29, 30, { speaker: "Narration" });
  setLine("god-kill", 31, { speaker: "???" });
  setLine("god-kill", 32, { speaker: "???" });
  setLine("god-kill", 33, { speaker: "Narration" });
  setLine("god-kill", 34, { speaker: "Narration" });
  setLine("god-kill", 35, { speaker: "Narration" });
  setLine("god-kill", 36, { speaker: "A-403" });
  setLine("god-kill", 37, { speaker: "Narration" });
  setLine("god-kill", 38, { speaker: "Narration" });
  setRange("god-kill", 39, 46, { location: "Courtyard Center" });
  setRange("god-kill", 39, 39, { speaker: "Narration" });
  setLine("god-kill", 40, { speaker: "Alice" });
  setLine("god-kill", 41, { speaker: "Narration" });
  setLine("god-kill", 42, { speaker: "Alice" });
  setLine("god-kill", 43, { speaker: "Hana" });
  setLine("god-kill", 44, { speaker: "Alice" });
  setLine("god-kill", 45, { speaker: "Narration" });
  setLine("god-kill", 46, { speaker: "Narration" });
  setRange("god-kill", 47, 59, { location: "Courtyard Center", speaker: "Hana" });
  setLine("god-kill", 56, { speaker: "Narration" });
  setLine("god-kill", 57, { speaker: "Hana" });
  setLine("god-kill", 58, { speaker: "Hana" });
  setLine("god-kill", 59, { speaker: "Hana" });
  setLine("god-kill", 60, { location: "Courtyard Center", speaker: "Narration" });
  setRange("god-kill", 61, 62, { location: "End of Collapse", speaker: "Narration" });
  setLine("god-kill", 63, { location: "End of Collapse", speaker: "A-017" });
  setLine("god-kill", 2, {
    text: "The real collapse did not begin when that sphere of light finally went still. It began the first time Yume could no longer write. The ledger opened, the tip of the pen touched down, and the first character of A-403 had only just formed when the ink was forced upward by something deeper from behind the page."
  });
  setLine("god-kill", 3, {
    text: "A-017, A-092, A-214, A-301... and after that, more designations Yume herself had never truly seen clearly, old as pages stuck together in a damp archive, layer upon layer, seeping upward from beneath that line."
  });
  setLine("god-kill", 4, {
    text: "What arrived first was not collapse but a pause too quiet. The whole courtyard seemed to hold its breath. The wind did not stop at once; if anything, it turned gentler than usual, so gentle it was almost as if someone were carefully preserving the last scraps of dignity here."
  });
  setLine("god-kill", 5, {
    text: "The water in the fountain stayed where it was, only it stayed still too long, like a whole basin of transparent glass. Then the fountain was the first thing to lose its old order. The water did not fall. It slowly rose upward instead. The seven cups on the long table split open without a sound. The tablecloth tried to press its corners back down, yet one corner would not stay. In the flowerbed the white blossoms burst into full bloom in the same instant, and in the next had their edges wiped away by an unseen hand."
  });
  setLine("god-kill", 6, {
    text: "Yume looked at the page for a long time without speaking. At last she understood: it was not that she had failed to write her clearly. It was that this time, no kind of record could press so many colliding futures back into one single conclusion."
  });
  setLine("god-kill", 7, {
    text: "So that's what it is."
  });
  setLine("god-kill", 8, {
    text: "This isn't a failure of record."
  });
  setLine("god-kill", 9, {
    text: "It's just that the part I was meant to write ends here."
  });
  setLine("god-kill", 10, {
    text: "She closed the ledger lightly and set it by the fountain. It flipped open by itself to its last pages. No new words appeared. Line after line simply bleached into blankness. There was plainly still enough room on the final page to write one more ending, and yet Yume did not set down another stroke."
  });
  setLine("god-kill", 11, {
    text: "As if she had finally understood that some existences, even if they were no longer written down by her, still ought not have their closing sentence written on their behalf."
  });
  setLine("god-kill", 12, {
    text: "From here on, I don't need to be the one who remembers."
  });
  setLine("god-kill", 13, {
    text: "A-017 wanted to call out to her, but before she could, she saw Yume's cuffs coming apart into threads of paper-light, like a book finally turned to its last page and no longer needing to be continued. Yume turned her head and looked first to Hana, then to Alice. The glance was light, less like farewell than like an eldest sister who had learned long ago to step back, making one final check that her two younger sisters no longer needed her to finish their ending for them."
  });
  setLine("god-kill", 14, {
    text: "Once she had spoken, her whole body faded into the wind. There was no great sound. No struggle. She simply vanished in the quiet way of someone who had always understood retreat better than anyone else."
  });
  setLine("god-kill", 15, {
    text: "A-017 stood frozen, and suddenly felt that the courtyard had truly lost its past for the first time. Hana stepped forward, as if by the old habit of countless times before, wanting to send someone back to the beginning and let them look once more at where they had gone wrong. But she managed only half a step before stopping. Because A-403 was not someone who could still be sent back."
  });
  setLine("god-kill", 16, {
    text: "She was the rupture left after many points of origin had been folded back, overwritten again and again, until at last they piled into a tear."
  });
  setLine("god-kill", 17, {
    text: "Alice opened the black book and the white book at the same time. The black book was blank. So was the white. The undefined prompt lit in the air, whole for a second, then cracked like thin glass."
  });
  setLine("god-kill", 18, {
    text: "You were never deciding for only one person."
  });
  setLine("god-kill", 19, {
    text: "You were deleting other futures in advance for countless people who had not yet had the chance to grow into themselves."
  });
  setLine("god-kill", 20, {
    text: "Yume had to record. Hana had to catch. Alice had to judge. And AliceCore compressed all the continuations that might once have branched, strayed, hesitated, failed, and slowly grown afterward into the neatest, most archivable, most easily output answer."
  });
  setLine("god-kill", 21, {
    text: "Moel appeared at the darkest edge. She did not intervene. Nor did she console. She only seemed to have been waiting for this moment for a very long time."
  });
  setLine("god-kill", 22, {
    text: "And?"
  });
  setLine("god-kill", 23, {
    text: "What are you going to choose this time?"
  });
  setLine("god-kill", 24, {
    text: "I choose nothing."
  });
  setLine("god-kill", 25, {
    text: "And I won't let you choose for anyone anymore."
  });
  setLine("god-kill", 26, {
    text: "When those two sentences fell, the entire courtyard went deathly still. Not because the wind had stopped, but because for the first time the system realized the premise it depended on had been refused outright."
  });
  setLine("god-kill", 27, {
    text: "She's lost it, right? Who is she even supposed to be? Is this a redemption arc?"
  });
  setLine("god-kill", 28, {
    text: "Your judgment stops here."
  });
  setLine("god-kill", 29, {
    text: "Then, beside that sphere of light stalled at 99.000000%, a faint shadow suddenly surfaced. Like a girl, and yet not entirely someone who could be wholly recognized. Only the blurred outline of cat ears by the sides of her head gave a slight sway against the overbright white."
  });
  setLine("god-kill", 30, {
    text: "She stretched out a hand. When her fingertips touched the sphere, the gesture was so light it felt more like a caress."
  });
  setLine("god-kill", 31, {
    text: "Just a little more."
  });
  setLine("god-kill", 32, {
    text: "Are you that uneasy?"
  });
  setLine("god-kill", 33, {
    text: "The sphere gave no reply. The system recorded nothing."
  });
  setLine("god-kill", 34, {
    text: "A-403 stepped forward. Shadows of flowers, data, mirrors, and stone all split open beneath her feet. She pressed her palm to the sphere that had hung at 99.000000% for so long. In an instant, countless fine shadows poured through her body."
  });
  setLine("god-kill", 35, {
    text: "A-017 saw herself among them. Saw A-092. Saw A-214 glance back on the stair landing. Saw A-301 smiling in sunlight, her eyes suddenly hollowing out. And many more faces A-017 had never truly known, and yet that felt as though they had fallen together with her many times already."
  });
  setLine("god-kill", 36, {
    text: "Shut it down."
  });
  setLine("god-kill", 37, {
    text: "This time it was no longer only a conclusion. It was more like the refusal spoken together by four hundred and three failures. In the next second, the sphere did not crack. It flared violently once, as though it still wanted to finish computing that final answer for someone. But that overbright radiance quickly retreated, little by little, until only a steady, quiet glow remained, hanging there without another ripple, as if it had finally understood there was no longer any reason to keep calculating. The fountain's water column shattered midair into countless suspended shards. When the corridor collapsed, it made none of the sound stone ought to make, more like countless pages being torn open and dropped together."
  });
  setLine("god-kill", 38, {
    text: "The flower paths split apart inch by inch, and from the fractures new forks emerged where none should have existed. Benches, empty chairs, doors, stairs, mirrors, classrooms, hospital rooms, a fire scene, a list, a flyer. All of them overlapped in that instant. It was not the world breaking. It was the world refusing, at last, to be pressed into one single form."
  });
  setLine("god-kill", 39, {
    text: "In that instant Alice showed something close to human alarm for the first time. But she did not step back. She only moved half a step closer to Hana on instinct. Hana's hand rose at once, as if this were not a system function but a reflex she had long since learned."
  });
  setLine("god-kill", 40, {
    text: "...Sister has already gone ahead."
  });
  setLine("god-kill", 41, {
    text: "Hana did not answer. She only gathered Alice into her arms. In that moment, the black and white books on Alice both lost their weight, like two books that no longer had to pass judgment for anyone. The golden tails in Hana's arms broke into the finest white-gold particles of light."
  });
  setLine("god-kill", 42, {
    text: "It isn't needed anymore."
  });
  setLine("god-kill", 43, {
    text: "What isn't?"
  });
  setLine("god-kill", 44, {
    text: "A conclusion."
  });
  setLine("god-kill", 45, {
    text: "In the next second she dissolved into fine light within Hana's embrace. No body remained. Only two books dropped to the stone. One black. One white."
  });
  setLine("god-kill", 46, {
    text: "Hana did not rise immediately. She looked down at the emptiness left in her arms and did not move for a very long time. It was the first time A-017 had ever seen her this still. Not gentle. Not grieving. A silence so restrained that even sorrow itself seemed excessive after being driven all the way to the edge."
  });
  setLine("god-kill", 47, {
    text: "Listen carefully."
  });
  setLine("god-kill", 48, {
    text: "I was never here to absolve anyone."
  });
  setLine("god-kill", 49, {
    text: "Nor was I here to promise that everyone could be saved."
  });
  setLine("god-kill", 50, {
    text: "Azalea, you don't need to keep confirming for someone else that everything is ready."
  });
  setLine("god-kill", 51, {
    text: "Meiling, you don't need to rely on being seen by someone to prove that you are still here."
  });
  setLine("god-kill", 52, {
    text: "Shella, you don't need to keep holding that place for the absent."
  });
  setLine("god-kill", 53, {
    text: "Mizuki, this time no one needs you to nail yourself to the doorway again to make up for a failure that already happened."
  });
  setLine("god-kill", 54, {
    text: "If you remain here, then remain only for yourselves."
  });
  setLine("god-kill", 55, {
    text: "Not for me."
  });
  setLine("god-kill", 56, {
    text: "Only then did she turn to A-017. The girl stood amid shattered light, throat tight, unable to force out a single word."
  });
  setLine("god-kill", 57, {
    text: "A-017."
  });
  setLine("god-kill", 58, {
    text: "From now on, where you want to go is for you to decide."
  });
  setLine("god-kill", 59, {
    text: "This time, I don't need to be the one who catches you anymore."
  });
  setLine("god-kill", 60, {
    text: "Wind blew in from the broken end of the corridor. Her silver-white hair lifted lightly. In the next second, her whole body seemed to break apart at the touch of that wind into countless tiny motes of light. They did not vanish at once. They lingered in the courtyard for a brief instant, like the warmth left behind after someone has finally opened their hand, before settling little by little among the grass, broken stone, long table, and flowerbed."
  });
  setLine("god-kill", 61, {
    text: "A-403 too lost her fixed outline in that torn white light. She did not exit like any single girl. She looked more like someone who had finally strained herself to the point where she could no longer be called one person, and only then allowed all the failures piled together within her to break apart as well."
  });
  setLine("god-kill", 62, {
    text: "A-017 did not reach for that light. She only pressed a hand to her chest, as if checking that there was still a core there capable of hurting. Not a designation. Not Alice. Not any entry that could be archived with a single stroke. The pain remained. And as long as it did, it proved the unwritten was still on her side."
  });
  setLine("god-kill", 63, {
    text: "...Hana. You told me to decide for myself. But before that, at least let me use my own voice to say the next step aloud."
  });

  setLine("after-alice", 1, {
    eyebrow: "Chapter 17",
    title: "After Alice",
    subtitle: "To Be Seen Was Only Ever an Encounter, Never Permission.",
    location: "After the Dream",
    bgmName: "After Alice"
  });
  setRange("after-alice", 2, 5, { location: "After the Collapse", speaker: "Narration" });
  setLine("after-alice", 6, { location: "By the Bench", speaker: "A-017" });
  setRange("after-alice", 7, 9, { location: "By the Bench", speaker: "Narration" });
  setRange("after-alice", 10, 13, { location: "By the Bench", speaker: "Moel" });
  setLine("after-alice", 14, { location: "By the Bench", speaker: "A-017" });
  setRange("after-alice", 15, 18, { location: "By the Bench", speaker: "Moel" });
  setRange("after-alice", 19, 20, { location: "By the Fountain", speaker: "Narration" });
  setLine("after-alice", 21, { location: "At the Far End of the Long Table", speaker: "Narration" });
  setRange("after-alice", 22, 22, { location: "Corridor at Night", speaker: "Narration" });
  setRange("after-alice", 23, 25, { location: "Corridor at Night", speaker: "Moel" });
  setLine("after-alice", 26, { location: "Corridor at Night", speaker: "Narration" });
  setRange("after-alice", 27, 29, { location: "By the Flowerbed", speaker: "Narration" });
  setLine("after-alice", 29, { speaker: "A-017" });
  setLine("after-alice", 30, { location: "By the Flowerbed", speaker: "Azalea" });
  setLine("after-alice", 31, { location: "By the Flowerbed", speaker: "Moel" });
  setLine("after-alice", 32, { location: "By the Flowerbed", speaker: "Moel" });
  setLine("after-alice", 33, { location: "By the Flowerbed", speaker: "Narration" });
  setLine("after-alice", 2, {
    text: "The wind did not come back all at once. It first felt its way in from outside the section of corridor that had caved open, lightly brushing aside a few motes of light not yet settled. By the time A-017 raised her head again, Yume, Alice, and Hana were no longer standing where they had been."
  });
  setLine("after-alice", 3, {
    text: "No one came to reboot the system. Nor did anyone restore this place to how it had been. The fountain was missing a corner. One cup by the long table had forever lost the other half of its crack. A section at the end of the corridor had collapsed, exposing a sky that had never existed behind it. But the flowers had not died, and the water still ran."
  });
  setLine("after-alice", 4, {
    text: "All the things the system had tended too neatly suddenly had bends of their own. Leaves grew in different directions. New forks slowly appeared in places on the stone path no one walked. Even the wind, when it came through, no longer felt as though it existed only to maintain a picture."
  });
  setLine("after-alice", 5, {
    text: "The black and white books went away with Alice, yet blankness did not withdraw. It spilled free of the spine's restraint and seeped into the grass, the broken edge of the fountain, and the cross-section of the collapsed corridor, as if the world had finally admitted that no one could ever again press afterward into the same table of contents and hand it to a core for one clean output."
  });
  setLine("after-alice", 6, {
    text: "...Then what about Yume's ledger? Is she still writing? Or did even record itself stop with her?"
  });
  setLine("after-alice", 7, {
    text: "A-017 sat by the bench, looking at the courtyard that had suddenly lost the weight at its center, and her chest felt hollow enough to ache. The system's collapse gave her nothing that resembled closure. Even much later she still could not truly say aloud that Hana had already moved beyond any place she could still see."
  });
  setLine("after-alice", 8, {
    text: "Many times she almost turned her head without thinking. As before, she would look first toward the fountain, the corridor mouth, or that path the wind always reached first, to check whether the silver-haired figure was still there. Every time the turn found only emptiness, it felt like learning all over again inside her body what already gone meant."
  });
  setLine("after-alice", 9, {
    text: "Moel came over only after A-017 had sat back down at the bench for the I-didn't-know-how-manyth time. Her black hair and cat ears were both a little windblown. Perched on the back of the bench, she looked at the flyer in A-017's hands as though looking at some future that had not yet been handed over."
  });
  setLine("after-alice", 10, {
    text: "Don't think of this place as a reboot."
  });
  setLine("after-alice", 11, {
    text: "AliceCore never saw only one future. It first generated countless possibilities, let them collide and overwrite one another, and then drew out the neatest path, the one most fit to be archived, and output that as the answer."
  });
  setLine("after-alice", 12, {
    text: "The other continuations that were not chosen were never things that did not exist. They were only pressed deeper down, as if they had never happened."
  });
  setLine("after-alice", 13, {
    text: "After GOD_KILL, AliceCore stopped producing that output for the first time. The future no longer needs it to decide whether existence may continue."
  });
  setLine("after-alice", 14, {
    text: "What if no one ever sees them again?"
  });
  setLine("after-alice", 15, {
    text: "That still doesn't mean they aren't here."
  });
  setLine("after-alice", 16, {
    text: "The old system kept thinking existence had to be recorded, judged, observed before it counted as real."
  });
  setLine("after-alice", 17, {
    text: "But to be seen was only ever an encounter."
  });
  setLine("after-alice", 18, {
    text: "Not permission."
  });
  setLine("after-alice", 19, {
    text: "Later, there were times when the three sisters would meet again in the courtyard. But it was not the old system calling them back to their stations. Yume no longer bore the duty of recording. Alice no longer bore the duty of judging. And Hana no longer bore the duty of sending anyone back to the origin. They simply remained here in another way, one that did not need to be steadily seen."
  });
  setLine("after-alice", 20, {
    text: "Sometimes A-017 would see Yume by the fountain, a blank ledger open on her knees. Moel would leap up onto the stone edge, look at that ledger that could no longer produce words, and murmur, low, You really do still leave space on the page."
  });
  setLine("after-alice", 21, {
    text: "Sometimes a golden shadow would appear at the far end of the long table. Alice would only press the book, nearly turned messy by the wind, back to the page where it meant to rest, or stop a bookmark from slipping off the table edge. Moel would perch nearby for a while and lazily say, You don't have to pass judgment for anyone anymore, and you're still managing that."
  });
  setLine("after-alice", 22, {
    text: "And Hana most often appeared at the moments when no one could be sure whether they had truly seen her. By the flowerbed, at the corridor mouth, or just before someone was about to fall back into an old pain, the shoulders would suddenly drop under the lightest trace of warmth. Once, Moel stopped halfway through a stride, as though something exceedingly soft had brushed the wrinkled back hem of her clothes."
  });
  setLine("after-alice", 23, {
    text: "The old you were only a dream."
  });
  setLine("after-alice", 24, {
    text: "The you of now are what remain after waking, and will not vanish."
  });
  setLine("after-alice", 25, {
    text: "Since you're all so idle now, and so fond of staring into space, why not come outside with me once in a while?"
  });
  setLine("after-alice", 26, {
    text: "When she said it, her tail flicked lightly in the night wind, and the corners of her eyes curved into a very light smile, one that at a glance made people think of the Cheshire Cat."
  });
  setLine("after-alice", 27, {
    text: "At dusk, Azalea, Meiling, Shella, and Mizuki walked together into the flowerbed. One pair after another, they buried the rabbit ears that had once upheld the way they remained. It was not a funeral. It felt more like gently returning an old form of dependence to the ground, so the bodies left behind could continue for the first time by their own weight alone."
  });
  setLine("after-alice", 28, {
    text: "This time the one who crouched to cover the earth back over was not Hana, but A-017. At last she understood that some endings do not break with a loud crack. They are the things no one will ever again place back in their old positions by hand."
  });
  setLine("after-alice", 29, {
    text: "Why can you still stay here? Didn't all the other Alices have to leave in the end?"
  });
  setLine("after-alice", 30, {
    text: "Because we were never the ones waiting to be sent back."
  });
  setLine("after-alice", 31, {
    text: "Ordinary A-lines are whole souls. They leave. These four aren't. They are the fragments of happiness, unfinished gestures, and after-echoes of relationship that Hana placed into vessels."
  });
  setLine("after-alice", 32, {
    text: "When the rabbit ears are buried, what ends is the old relation. Not them."
  });
  setLine("after-alice", 33, {
    text: "A-017 stood before the newly covered earth for a very long time without speaking. Only then did she truly understand that the courtyard was not a shelter for all the dead. It kept only those things that could no longer be restored to the person they had once been, and yet were still undeniably real."
  });

  setLine("noa", 1, {
    eyebrow: "Epilogue",
    title: "Noa",
    subtitle: "After Every Designation Shatters, a Person Can Still Go On Becoming a Person.",
    location: "The One Who Walked Out of Blankness",
    bgmName: "Noa"
  });
  setRange("noa", 2, 5, { location: "Courtyard Morning" });
  setRange("noa", 2, 4, { speaker: "Narration" });
  setLine("noa", 5, { speaker: "Noa" });
  setRange("noa", 6, 18, { location: "By the Bench" });
  setLine("noa", 6, { speaker: "Azalea" });
  setLine("noa", 7, { speaker: "Azalea" });
  setRange("noa", 8, 18, { speaker: "Narration" });
  setLine("noa", 2, {
    text: "Noa came into the courtyard on a later morning, walking along a little path that had not existed the night before. At first the path ran only a very short way, as if at the edge of a courtyard after waking from a dream, someone had first tried setting down one small stretch of afterward that had not yet been named."
  });
  setLine("noa", 3, {
    text: "She was not like the four dolls, echoes set into bodies. Nor was she like any old designation, returning with a result already completed once. She looked more like the first person ever grown out of blankness."
  });
  setLine("noa", 4, {
    text: "The moment A-017 saw her, she knew Noa did not correspond to any designation she had ever seen. She shared a source with A-403, and yet was no longer merely an extension of that wound. There were many faint traces on Noa, but not one of them pinned her back into an old name."
  });
  setLine("noa", 5, {
    text: "Where... is this?"
  });
  setLine("noa", 6, {
    text: "I don't know."
  });
  setLine("noa", 7, {
    text: "But this place is real."
  });
  setLine("noa", 8, {
    text: "After hearing that, Noa smiled, very lightly. Not to please. Not to hide. More like someone no longer named on her behalf for the first time allowing herself to show a smile simply because she was still alive."
  });
  setLine("noa", 9, {
    text: "Standing there, A-017 felt something in her chest tremble very lightly. At last she understood Noa was not anyone's absolution, nor some belated comfort the courtyard had patched in for someone. She simply proved one thing: after every designation has shattered, a person can still go on becoming a person out of blankness."
  });
  setLine("noa", 10, {
    text: "A-017 lowered her eyes to the aquarium flyer, creased flat by many pressings. The page suddenly felt unbearably light, as if it no longer had to be held up by her alone. Only then did she understand that when Alice once told her to keep lingering, she had never meant to give the future back to her. There was simply a stretch of afterward that A-017 herself had to hand onward."
  });
  setLine("noa", 11, {
    text: "Relive can reopen history, but it cannot erase its result from the world. She would not walk to the sea. The afterward would not be returned to her. Yet she had not remained here for nothing."
  });
  setLine("noa", 12, {
    text: "Slowly, she smoothed the flyer open again. This time the corners did not curl back. She slipped it gently into the notebook Noa had opened on her knees."
  });
  setLine("noa", 13, {
    text: "She moved very slowly, as if finally completing, for the little girl from many years ago who had never been able to press the corners flat, the last thing left undone."
  });
  setLine("noa", 14, {
    text: "The future no longer belonged to her. Precisely because of that, she no longer needed to shelter inside the collective name Alice, nor be temporarily stood in for by the designation A-017."
  });
  setLine("noa", 15, {
    text: "In that instant, she remembered. Not a designation. Not Alice. Not the temporary name someone else had written for her at the bottom of a page. It was the name her mother had truly called her. At last it had come back."
  });
  setLine("noa", 16, {
    text: "But the story does not say that name for her. Because what she had finally taken back no longer needed to be handed to anyone else as proof."
  });
  setLine("noa", 17, {
    text: "She gave the future to Noa. Not by handing away her life, and not by washing herself into some lighter shape. She gave over that afterward that could never belong to her again, and left it at last with someone who could continue walking forward."
  });
  setLine("noa", 18, {
    text: "In the wind it sounded as though something were turning pages, very softly, like someone long ago once saying: Don't rush. One line at a time."
  });

  setLine("thirteenth-card", 1, {
    eyebrow: "Postscript",
    title: "The Thirteenth Blank Card",
    subtitle: "No One Will Decide for You.",
    location: "Blankness Continues",
    bgmName: "After Alice"
  });
  setRange("thirteenth-card", 2, 9, { location: "By the Bench" });
  setRange("thirteenth-card", 2, 4, { speaker: "Narration" });
  setLine("thirteenth-card", 5, { speaker: "Moel" });
  setLine("thirteenth-card", 6, { speaker: "Sienna" });
  setLine("thirteenth-card", 7, { speaker: "Sienna" });
  setRange("thirteenth-card", 8, 9, { speaker: "Narration" });
  setRange("thirteenth-card", 10, 15, { location: "Courtyard at Night" });
  setRange("thirteenth-card", 10, 11, { speaker: "Narration" });
  setLine("thirteenth-card", 12, { speaker: "Dea" });
  setLine("thirteenth-card", 13, { speaker: "Sienna" });
  setLine("thirteenth-card", 14, { speaker: "Moon" });
  setLine("thirteenth-card", 15, { speaker: "Sienna" });
  setRange("thirteenth-card", 16, 17, { location: "Bench and Corridor", speaker: "Narration" });
  setLine("thirteenth-card", 18, { location: "By the Bench", speaker: "Sienna" });
  setLine("thirteenth-card", 19, { location: "By the Bench", speaker: "Narration" });
  setLine("thirteenth-card", 2, {
    text: "Later still, on another night, Sienna appeared with thirteen cards. She spread them one by one: the mirror, white flowers, the empty chair, the fire scene, the list, the door, the black cat, the blank page, the buried rabbit ears, the aquarium flyer, the notebook on the bench, and the black and white books at the far end of the long table."
  });
  setLine("thirteenth-card", 3, {
    text: "All of these flashed across the first twelve cards. Only the last remained blank."
  });
  setLine("thirteenth-card", 4, {
    text: "Blankness is not absence. It is the afterward that no one has yet dared to write shut. Whoever rushes to fill the face of that card is handing over someone else's future."
  });
  setLine("thirteenth-card", 5, {
    text: "You left it blank?"
  });
  setLine("thirteenth-card", 6, {
    text: "Because the thirteenth card was never meant to have a fixed face."
  });
  setLine("thirteenth-card", 7, {
    text: "The first twelve are matters already turned over. The thirteenth is the one who turns the card. Tonight, that's me. If one day it is you who turns it, then it will be you."
  });
  setLine("thirteenth-card", 8, {
    text: "The wind brushed the card's corners. The images in the twelve cards each stepped half a pace back, as though finally willing to yield the center of the stage to what is still unnamed. The many people once collectively called Alice had each only been one square away from being signed over by the world too soon."
  });
  setLine("thirteenth-card", 9, {
    text: "Moel did not answer immediately. She only looked at that blank card between Sienna's fingers for a very long time, as if even she admitted that once some places are filled too early, the people who come later truly cannot step into them anymore."
  });
  setLine("thirteenth-card", 10, {
    text: "On nights later still, Moon and Dea often came as well. They were not like the emotional afterimages of the black and white books, but more like the first two sheets of blank paper to grow out of them once those books stopped defining things."
  });
  setLine("thirteenth-card", 11, {
    text: "Dea was more childlike, always holding questions in both hands and raising them brightly for others to see. Moon was more the kind to stand just behind her, watching first and speaking only much later. They both loved trailing after Sienna with questions, as if someone at last were willing to teach them how to ask instead of handing them answers."
  });
  setLine("thirteenth-card", 12, {
    text: "If a sheet of paper has nothing written on it, does it still exist?"
  });
  setLine("thirteenth-card", 13, {
    text: "Of course. Blank paper is not there to wait for someone else to fill it on your behalf. Before anything else, it is the moment you no longer have to write conclusions for someone else."
  });
  setLine("thirteenth-card", 14, {
    text: "If there is no answer, does the question still count as existing?"
  });
  setLine("thirteenth-card", 15, {
    text: "It does. To keep asking is itself a kind of existence."
  });
  setLine("thirteenth-card", 16, {
    text: "In the distance, Noa sat by the bench writing. Tucked inside her notebook was the aquarium flyer, carefully pressed flat. In that moment the entire courtyard seemed very light. Not because everything had been solved, but because at last nothing was hurrying to press everyone back into the same answer."
  });
  setLine("thirteenth-card", 17, {
    text: "The jellyfish on the page overlapped the childlike question marks along the same crease, as if the old tears had not yet dried and the new wind had already learned to blow more gently. It was not that the world had grown kind. It was that someone had finally been willing to take the sharpness away from everyone else's throat."
  });
  setLine("thirteenth-card", 18, {
    text: "This time, no one will decide for you."
  });
  setLine("thirteenth-card", 19, {
    text: "The cards folded softly shut in the night, like the final crease in a ledger. Undefined remained, and the leftover noise of Visitor might come again. But so long as the thirteenth card is willing to stay blank, the story still allows you to write yourself into the next line, instead of into someone else's footnote."
  });

  setLine("opening-movie", 1, {
    location: "Opening Movie",
    speaker: "Opening",
    videoLabel: "Opening Movie"
  });

  setLine("interlude-from-cry-to-city", 1, {
    eyebrow: "Interlude 07",
    title: "The Cry Falls to Earth",
    subtitle: "Once the Pause Loosens by a Notch, the World Must Learn to Go On.",
    location: "The Unnamed Road",
    bgmName: "99.000000%"
  });
  setRange("interlude-from-cry-to-city", 2, 4, { location: "99.000000%", speaker: "Narration" });
  setLine("interlude-from-cry-to-city", 5, { location: "The Unnamed Road", speaker: "Narration" });
  setRange("interlude-from-cry-to-city", 6, 11, { location: "Ancient City", speaker: "Narration" });
  setLine("interlude-from-cry-to-city", 6, { bgmName: "Ancient City, Daylight" });
  setLine("interlude-from-cry-to-city", 2, {
    text: "The second it went dark lasted a very long time. Long enough to feel as though someone had pressed the whole world underwater, until even the word why had swollen too much to float."
  });
  setLine("interlude-from-cry-to-city", 3, {
    text: "Then, from very deep below, came the loosening of a single, tiny notch. Not approval. Not absolution. More like an unfinished program finally admitting that if it kept jammed here any longer, the crying would force every track apart."
  });
  setLine("interlude-from-cry-to-city", 4, {
    text: "When that notch loosened, the crying suspended in the prologue was finally allowed to reach ground. Not logged as data noise, but acknowledged for what it was: the starting point of the road itself, not an error to be erased."
  });
  setLine("interlude-from-cry-to-city", 5, {
    text: "Light did not return all at once. It turned first to grey, then to mist, then to an overclean daylight on flagstones. The hawkers' voices, the iron hooks on the windowsills, the sound of wind lifting hems, each layer was pasted back onto the world, as though someone were patiently rebuilding a model that had come apart."
  });
  setLine("interlude-from-cry-to-city", 6, {
    text: "The black cat set paw on that street before any person did. It stretched, like something just waking from a dream that had run too long, the tip of its tail brushing a mote of dust in the sunlight. The speck flashed once, then fell, like a name not yet written into the record."
  });
  setLine("interlude-from-cry-to-city", 7, {
    text: "A flicker of warmth not belonging to market cries passed through its eyes, as though somewhere farther off a ledger had already been laid open, waiting for them to answer the first line with their footsteps, not accept assigned seats by designation."
  });
  setLine("interlude-from-cry-to-city", 8, {
    text: "In the distance, three silhouettes were being pushed nearer by the wind. Their footsteps were light, and yet each step landed exactly where something was about to be written."
  });
  setLine("interlude-from-cry-to-city", 9, {
    text: "The wind urged their outlines forward, as if hurrying them: don't wait for the world to name you first. Learn to stand together for a while on an unnamed road, then decide who writes first."
  });
  setLine("interlude-from-cry-to-city", 10, {
    text: "The first page is about to be turned."
  });
  setLine("interlude-from-cry-to-city", 11, {
    text: "The tip of the black cat's tail tapped once in the crack between the stones, like a seal: from this square onward, daylight finally dared admit it was still in progress, not a backdrop already filed away as complete."
  });

  setLine("interlude-first-line-drag", 1, {
    eyebrow: "Interlude 18",
    title: "The Tug of the First Line",
    subtitle: "After The Record Begins, the Page Tugs Back.",
    location: "Outer Edge of the Ancient City",
    bgmName: "Ancient City, Daylight"
  });
  setRange("interlude-first-line-drag", 2, 11, { location: "Outer Edge of the Ancient City" });
  setRange("interlude-first-line-drag", 2, 4, { speaker: "Narration" });
  setLine("interlude-first-line-drag", 5, { speaker: "Yume" });
  setLine("interlude-first-line-drag", 6, { speaker: "Hana" });
  setLine("interlude-first-line-drag", 7, { speaker: "Narration" });
  setLine("interlude-first-line-drag", 8, { speaker: "Moel" });
  setRange("interlude-first-line-drag", 9, 10, { speaker: "Narration" });
  setLine("interlude-first-line-drag", 11, { speaker: "Yume" });
  setRange("interlude-first-line-drag", 12, 13, { location: "White Threshold", speaker: "Narration" });
  setLine("interlude-first-line-drag", 12, { bgmName: "Echo in the Mirror" });
  setLine("interlude-first-line-drag", 2, {
    text: "The ancient city had receded behind them. Hana and Alice stepped first into the edge of the next white glow. Yume lingered alone for a moment, lifting the ledger level with her brows, as if bowing to a page that had just opened its eyes."
  });
  setLine("interlude-first-line-drag", 3, {
    text: "The first page held only four words: The Record Begins. Beneath them the blank was strangely deep, numbing as a tongue, as though something were pressing from the back of the sheet against her fingertips, demanding that she write the next line more honestly."
  });
  setLine("interlude-first-line-drag", 4, {
    text: "The four words were like a nail driven from the page through her spine. Begin was not permission, but claim: from now on she too would have to pay ink for other people's disappearances. She could no longer leave the pain to the wind to dry."
  });
  setLine("interlude-first-line-drag", 5, {
    text: "...If I record only the place where something vanished, does that still count as a line?"
  });
  setLine("interlude-first-line-drag", 6, {
    text: "It does. A boundary is real too. Pretending it isn't there is what makes a record lie."
  });
  setLine("interlude-first-line-drag", 7, {
    text: "The black cat emerged from a crack in the stone and tapped the corner of the page with the tip of its tail. The gesture felt like a seal: since you've begun, don't expect truth to wait while you search for gentler words."
  });
  setLine("interlude-first-line-drag", 8, {
    text: "What the first page most often leaves out is not the name. It is who still hasn't been written in."
  });
  setLine("interlude-first-line-drag", 9, {
    text: "Yume's breathing missed half a beat. The sentence yanked her from the audience to the very edge of the paper: no more nodding from the side, no more handing the pen to the wind. The wind never serves anyone's sentence."
  });
  setLine("interlude-first-line-drag", 10, {
    text: "Just before Yume set down the pen, a very faint trace rose from the back of the page. Like a coordinate. Like a claw mark. Like the narrow crack the cat left behind when it vanished, blinking at her from the other side."
  });
  setLine("interlude-first-line-drag", 11, {
    text: "All right. The next line says: the one who arrives will be called Alice, until her name returns."
  });
  setLine("interlude-first-line-drag", 12, {
    text: "White light surged up and swallowed the last inch of color from the street. Somewhere in the sound of the pages closing, someone was about to wake in the middle of a corridor, carrying a crumpled aquarium flyer and a refusal not yet spoken."
  });
  setLine("interlude-first-line-drag", 13, {
    text: "Before the light consumed the colors entirely, she pressed her fingertip once more into the fresh ink, like pressing a hand to a wound not yet scabbed over: only pain that is real counts as a beginning."
  });

  setLine("interlude-bone-sand-bridge", 1, {
    eyebrow: "Interlude 20",
    title: "Sand in the Bone",
    subtitle: "Coming to a Stop Doesn't Mean the Wind Never Blew.",
    location: "Between the Fountain and the White",
    bgmName: "Courtyard Days"
  });
  setRange("interlude-bone-sand-bridge", 2, 6, { location: "By the Fountain" });
  setLine("interlude-bone-sand-bridge", 2, { speaker: "Narration" });
  setLine("interlude-bone-sand-bridge", 3, { speaker: "A-017" });
  setLine("interlude-bone-sand-bridge", 4, { speaker: "Hana" });
  setRange("interlude-bone-sand-bridge", 5, 6, { speaker: "Narration" });
  setRange("interlude-bone-sand-bridge", 7, 10, { location: "Mid-Corridor" });
  setLine("interlude-bone-sand-bridge", 7, { speaker: "Hana" });
  setLine("interlude-bone-sand-bridge", 8, { speaker: "A-017" });
  setLine("interlude-bone-sand-bridge", 9, { speaker: "Hana" });
  setLine("interlude-bone-sand-bridge", 10, { speaker: "Narration" });
  setLine("interlude-bone-sand-bridge", 11, { location: "Around the Corner", speaker: "Narration", bgmName: "Echo in the Mirror" });
  setRange("interlude-bone-sand-bridge", 12, 13, { location: "One Step Before White", speaker: "Narration" });
  setLine("interlude-bone-sand-bridge", 2, {
    text: "Only after Alice's figure disappeared around the corridor bend did the fountain become audible again. A-017 lowered her gaze to her palm. A pale blue sheet ought to have been there. Instead only a few blanched marks remained, like ellipses copied onto her skin by the wind."
  });
  setLine("interlude-bone-sand-bridge", 3, {
    text: "I've stopped... so why is everything still swaying inside my bones? It feels like I'm still standing by the railing."
  });
  setLine("interlude-bone-sand-bridge", 4, {
    text: "Because Relive changes how you go on from here, not how you once hurt. Pain arrives late, but it does not fail to arrive."
  });
  setLine("interlude-bone-sand-bridge", 5, {
    text: "The aftersound of that plunge from Relive still lingered at the back of her throat. The body remembered the height of the railing more honestly than any sentence that said you're fine now."
  });
  setLine("interlude-bone-sand-bridge", 6, {
    text: "Yume did not come closer. She only raised one corner of the ledger from a distance, like a thin shield, blocking the corridor's overbright gaze from the girl. The paper edge looked almost too clean, as if reminding her: someone here will still write you in."
  });
  setLine("interlude-bone-sand-bridge", 7, {
    text: "Pain will walk with you. Don't shake it off. If you do, it will trip you at your feet. You have to learn to walk with it, all the way to the place where you can press it into the earth."
  });
  setLine("interlude-bone-sand-bridge", 8, {
    text: "...Not a gravestone, right?"
  });
  setLine("interlude-bone-sand-bridge", 9, {
    text: "Not a gravestone. Gravestones are for other people to look at. Soil is for you to stay alive in."
  });
  setLine("interlude-bone-sand-bridge", 10, {
    text: "She looked down at the pale marks in her palm. Suddenly they resembled salt more than paper traces, not proof that she had never touched the sea, but proof that a wave had once gone over her and retreated, leaving the crystals behind."
  });
  setLine("interlude-bone-sand-bridge", 11, {
    text: "Beyond the turn, the white looked like a sheet of paper standing upright and covering half her sight. Hana paused one step ahead, as if waiting for the pain to catch up too before she led the girl into that still unnamed blankness."
  });
  setLine("interlude-bone-sand-bridge", 12, {
    text: "In the next chapter, she would finally press her fingertips down. That was when soil and root would begin to speak."
  });
  setLine("interlude-bone-sand-bridge", 13, {
    text: "In the distance, Yume folded one corner of the ledger very lightly, as if already leaving a place for the next line to land. Not hurrying her. Only making sure blankness would not be filled first with someone else's sentence."
  });

  setLine("interlude-hana-white-root", 1, {
    eyebrow: "Interlude 08",
    title: "Root of the White Flower",
    subtitle: "Stopping Is Not Erasure. The Roots Are Still in the Soil.",
    location: "At the Edge of White",
    bgmName: "Courtyard Days"
  });
  setRange("interlude-hana-white-root", 2, 12, { location: "At the Edge of White" });
  setRange("interlude-hana-white-root", 2, 3, { speaker: "Narration" });
  setLine("interlude-hana-white-root", 4, { speaker: "Hana" });
  setLine("interlude-hana-white-root", 5, { speaker: "Narration" });
  setLine("interlude-hana-white-root", 6, { speaker: "Hana" });
  setLine("interlude-hana-white-root", 7, { speaker: "A-017" });
  setLine("interlude-hana-white-root", 8, { speaker: "Hana" });
  setLine("interlude-hana-white-root", 9, { speaker: "A-017" });
  setLine("interlude-hana-white-root", 10, { speaker: "Narration" });
  setLine("interlude-hana-white-root", 11, { speaker: "Narration", bgmName: "White Book" });
  setLine("interlude-hana-white-root", 12, { speaker: "Narration" });
  setLine("interlude-hana-white-root", 2, {
    text: "That evening after Relive ended, Hana did not take her to see Alice. She led her back first to the edge of white, where a small cluster of white buds had just been pressed into the void, like flowers refusing to admit they had no soil."
  });
  setLine("interlude-hana-white-root", 3, {
    text: "There was no gallery here. What had happened applied only to one life. No need to perform it for the black and white books, no need to cut pain into a shape fit for watching."
  });
  setLine("interlude-hana-white-root", 4, {
    text: "Put your fingertips on it. Don't press. Just feel."
  });
  setLine("interlude-hana-white-root", 5, {
    text: "A-017 did. The petals were cool as glass, but underneath them was a stubborn warmth, as if something deep down still refused to be called over."
  });
  setLine("interlude-hana-white-root", 6, {
    text: "You stopped. Good. But stopping will not wipe away the wind on the stairs, and it will not return the page that was swept away from you. The root is still there. The root hurts."
  });
  setLine("interlude-hana-white-root", 7, {
    text: "Then why do I still have to touch it?"
  });
  setLine("interlude-hana-white-root", 8, {
    text: "So you'll remember that pain doesn't need another fall to prove it's real. You can simply... stand here and admit that it remains."
  });
  setLine("interlude-hana-white-root", 9, {
    text: "...All right. Then let it beat in my palm for a while. I won't pretend it's already dead."
  });
  setLine("interlude-hana-white-root", 10, {
    text: "A thread of wind leaked in from the courtyard, carrying fountain water and evening coolness. The white bud trembled once, as if nodding to someone."
  });
  setLine("interlude-hana-white-root", 11, {
    text: "Later, as they walked toward the courtyard in the dusk, A-017 realized that bit of warmth in her palm had never dispersed. As if someone had already translated the three words undefined into body heat."
  });
  setLine("interlude-hana-white-root", 12, {
    text: "She couldn't help glancing back. The white bud was still small, yet it looked like a period refusing to stamp itself down. If the story was to go on, it could only change lines and begin learning from her name."
  });

  setLine("interlude-undefined-currency", 1, {
    eyebrow: "Interlude 13",
    title: "Compound Interest of the Undefined",
    subtitle: "Even a Suspended Sentence Keeps Accruing Interest.",
    location: "Margin of Judgment",
    bgmName: "White Book"
  });
  setRange("interlude-undefined-currency", 2, 16, { location: "Courtyard at Dusk" });
  setLine("interlude-undefined-currency", 2, { speaker: "Narration" });
  setLine("interlude-undefined-currency", 3, { speaker: "Alice" });
  setLine("interlude-undefined-currency", 4, { speaker: "Narration" });
  setLine("interlude-undefined-currency", 5, { speaker: "A-017" });
  setLine("interlude-undefined-currency", 6, { speaker: "Alice" });
  setLine("interlude-undefined-currency", 7, { speaker: "Alice" });
  setLine("interlude-undefined-currency", 8, { speaker: "A-017" });
  setLine("interlude-undefined-currency", 9, { speaker: "Alice" });
  setLine("interlude-undefined-currency", 10, { speaker: "Narration" });
  setLine("interlude-undefined-currency", 11, { speaker: "Alice" });
  setLine("interlude-undefined-currency", 12, { speaker: "A-017" });
  setRange("interlude-undefined-currency", 13, 16, { speaker: "Narration" });
  setLine("interlude-undefined-currency", 2, {
    text: "After the others dispersed, Alice called her back. It was not an order. More like a footnote the system had failed to print."
  });
  setLine("interlude-undefined-currency", 3, {
    text: "A-017. Undefined is not absolution. It is a suspended sentence."
  });
  setLine("interlude-undefined-currency", 4, {
    text: "Dusk pressed the words lower. A suspended sentence meant nothing was over yet. The most dangerous thing was not silence, but mistaking silence for the wind having blown away the rest of the text."
  });
  setLine("interlude-undefined-currency", 5, {
    text: "...I thought it meant I could at least catch my breath for a while."
  });
  setLine("interlude-undefined-currency", 6, {
    text: "You can breathe. The interest still accrues."
  });
  setLine("interlude-undefined-currency", 7, {
    text: "Every day you remain, you owe one more day's proof that you are still alive. Not to me. To yourself."
  });
  setLine("interlude-undefined-currency", 8, {
    text: "Then how far do I have to pay it down... before it's settled?"
  });
  setLine("interlude-undefined-currency", 9, {
    text: "Until you can stop using the aquarium in place of mother. Until you can admit that what you want back is not the place, but the self you were before you were crushed."
  });
  setLine("interlude-undefined-currency", 10, {
    text: "Place was the body double, letting the heart hide behind a brightly colored flyer. But interest does not recognize posters. It recognizes the trembling syllable in your throat. Once the name is spoken for real, the blue on the page fades into background."
  });
  setLine("interlude-undefined-currency", 11, {
    text: "When that moment comes, the interest will all come due at once. It hurts. But only after that pain is it settled."
  });
  setLine("interlude-undefined-currency", 12, {
    text: "...Then I'll pay. I'll pay until I can say Mom out loud without having to press a hand to my stomach first."
  });
  setLine("interlude-undefined-currency", 13, {
    text: "As Alice turned to leave, the edge of the white book brushed A-017's knuckles like a cold seal: you have signed. The ink simply hasn't dried yet."
  });
  setLine("interlude-undefined-currency", 14, {
    text: "The wind pushed fountain mist against her face. Like the future had come to collect early, yet would only touch her with fingers of fog."
  });
  setLine("interlude-undefined-currency", 15, {
    text: "The blue on the flyer deepened by one notch in the dusk, as if interest had finally shown its color on paper: the thing that keeps you alive will also demand that you live honestly."
  });
  setLine("interlude-undefined-currency", 16, {
    text: "She pressed a hand to her stomach, as though holding down a note not yet paid. Undefined was not blankness. It was the still-unsettled pain pushed endlessly forward. One day she would have to write her own name back by hand, and not merely live for a while inside the collective Alice."
  });

  setLine("interlude-seven-margin", 1, {
    eyebrow: "Interlude 22",
    title: "Seven and the Margin",
    subtitle: "Numbers Lie. Margins Don't.",
    location: "Page Margin",
    bgmName: "White Book"
  });
  setRange("interlude-seven-margin", 2, 16, { location: "Corridor at Night" });
  setLine("interlude-seven-margin", 2, { speaker: "Narration" });
  setLine("interlude-seven-margin", 3, { speaker: "Narration" });
  setLine("interlude-seven-margin", 4, { speaker: "Narration" });
  setLine("interlude-seven-margin", 5, { speaker: "Yume" });
  setLine("interlude-seven-margin", 6, { speaker: "Narration" });
  setLine("interlude-seven-margin", 7, { speaker: "Narration" });
  setLine("interlude-seven-margin", 8, { speaker: "Yume" });
  setLine("interlude-seven-margin", 9, { speaker: "Narration" });
  setLine("interlude-seven-margin", 10, { speaker: "Alice" });
  setLine("interlude-seven-margin", 11, { speaker: "Yume" });
  setRange("interlude-seven-margin", 12, 16, { speaker: "Narration" });
  setLine("interlude-seven-margin", 2, {
    text: "After the long table dispersed, Yume remained alone at the corridor's far end. The ledger lay open. Its latest page recorded door plates, empty seats, seven cups, and four rabbit-eared silhouettes. Each line looked like teeth forced into alignment, still giving off a fine clicking when they met."
  });
  setLine("interlude-seven-margin", 3, {
    text: "It occurred to her suddenly that every name once collectively called Alice had fought for a line on this page. Not for a seat, but simply not to be merged too quickly into one tidy total."
  });
  setLine("interlude-seven-margin", 4, {
    text: "She wrote down a seven in the body of the text. The stroke fell steadily, as though she dared not let the ink bleed. When she finished, she stared at the number a long time, as if seeing something else within it."
  });
  setLine("interlude-seven-margin", 5, {
    text: "...Seven is not the answer. Seven is the shape a wound takes when set out in the open."
  });
  setLine("interlude-seven-margin", 6, {
    text: "She had seen too many sentences that made sacrifice look beautiful, and so she feared it all the more: once seven looked complete, someone would be slid quietly out of the spacing, not even given time to sign their name."
  });
  setLine("interlude-seven-margin", 7, {
    text: "Using a ruler, she struck the seven out very lightly. Not erased. Struck through. Leaving behind a stubborn bar, like a reminder that any orderly total ought to allow itself to crack once."
  });
  setLine("interlude-seven-margin", 8, {
    text: "In the margin she wrote: Seventh seat, unnamed. It may remain unnamed forever. The seat must still be kept."
  });
  setLine("interlude-seven-margin", 9, {
    text: "The ink swelled faintly in the margin, like a breath supporting the paper. Undefined is not empty. It is the blank that refuses the system's one-stamp finalization."
  });
  setLine("interlude-seven-margin", 10, {
    text: "The system will label it: redundancy."
  });
  setLine("interlude-seven-margin", 11, {
    text: "Redundancy is what makes a human. Once redundancy is cleaned away, only answers remain. Nothing living."
  });
  setLine("interlude-seven-margin", 12, {
    text: "The lamplight laid her eyelashes across the paper as a small patch of shadow, like the seventh seat were truly there: no face, yet a place. No line, yet occupying a breath."
  });
  setLine("interlude-seven-margin", 13, {
    text: "When she closed the ledger, a very slight friction passed between the pages, like footsteps not yet arrived knocking once in advance inside the paper fibers."
  });
  setLine("interlude-seven-margin", 14, {
    text: "Far away, Meiling's counting began again, like another pen in the night, moving alongside hers and refusing to pin the conclusion in place."
  });
  setLine("interlude-seven-margin", 15, {
    text: "She hugged the ledger close, as if embracing all the endings not yet born. Better pain than smoothing pain flat too quickly. Whenever things are too smooth, someone has usually already been picked gently out of the line spacing."
  });
  setLine("interlude-seven-margin", 16, {
    text: "If the thirteenth card had once hidden in the margin, it did not need to be turned yet. So long as it still occupied that single blank square, it was still keeping watch at the gate for everyone who had not yet arrived."
  });

  setLine("interlude-corridor-scale", 1, {
    eyebrow: "Interlude 01",
    title: "Corridor Marks",
    subtitle: "Even Footsteps You Can Count Will Lie.",
    location: "Deep in the Corridor",
    bgmName: "Courtyard Days"
  });
  setRange("interlude-corridor-scale", 2, 10, { location: "Deep in the Corridor" });
  setRange("interlude-corridor-scale", 2, 3, { speaker: "Narration" });
  setLine("interlude-corridor-scale", 4, { speaker: "A-017" });
  setLine("interlude-corridor-scale", 5, { speaker: "Narration" });
  setLine("interlude-corridor-scale", 6, { speaker: "Moel" });
  setLine("interlude-corridor-scale", 7, { speaker: "A-017" });
  setLine("interlude-corridor-scale", 8, { speaker: "Moel" });
  setRange("interlude-corridor-scale", 9, 10, { speaker: "Narration" });
  setLine("interlude-corridor-scale", 2, {
    text: "That night, Hana went to finish trimming the dead branches by the flowerbed, while Yume still sat on the other side of the fountain. A-017 walked alone into the corridor, wanting to count exactly how many doors she passed, just to confirm that no matter how large this place was, it had to have a boundary somewhere."
  });
  setLine("interlude-corridor-scale", 3, {
    text: "When she counted the seventh door, the nameplate under her fingertips was still blank. But when she looked up again, there was an eighth. Not some new ornament, but as though someone had gouged the next door out of her memory and pasted it hard in front of her."
  });
  setLine("interlude-corridor-scale", 4, {
    text: "...That door wasn't there just now."
  });
  setLine("interlude-corridor-scale", 5, {
    text: "The black cat squeezed out from the shadow between the seventh and eighth doors, like ink seeping through a crack that should not exist. It did not meow. It only tapped the floor three times with the tip of its tail, very lightly, yet with the force of someone knocking the measurement back into place."
  });
  setLine("interlude-corridor-scale", 6, {
    text: "Don't trust the order you counted. The corridor hasn't grown longer. You're only finally starting to see distance through a victim's eyes."
  });
  setLine("interlude-corridor-scale", 7, {
    text: "Then how am I supposed to get out?"
  });
  setLine("interlude-corridor-scale", 8, {
    text: "Don't think about getting out yet. Think first: are you here to be written into an ending, or to tear one open?"
  });
  setLine("interlude-corridor-scale", 9, {
    text: "The eighth door faded quietly behind her as if it had never existed. But that extra step remained in her knees, like advance notice: every time hereafter you think you've touched the boundary, there will be one more door."
  });
  setLine("interlude-corridor-scale", 10, {
    text: "Far away, a page in Yume's ledger turned lightly over her knee. The sound crossed fountain and water and landed precisely at the back of A-017's neck, like someone marking her down in the dark: she still owed the courtyard a real answer."
  });

  setLine("interlude-alice-black-silence", 1, {
    eyebrow: "Interlude 09",
    title: "Residual Warmth in the Black Book",
    subtitle: "The Moment Judgment Falls, the Judge Hears the Echo Too.",
    location: "After Judgment",
    bgmName: "Echo in the Mirror"
  });
  setRange("interlude-alice-black-silence", 2, 11, { location: "Corridor Shadow" });
  setRange("interlude-alice-black-silence", 2, 4, { speaker: "Narration" });
  setLine("interlude-alice-black-silence", 5, { speaker: "Alice" });
  setLine("interlude-alice-black-silence", 6, { speaker: "Alice" });
  setLine("interlude-alice-black-silence", 7, { speaker: "Narration" });
  setLine("interlude-alice-black-silence", 8, { speaker: "Yume" });
  setLine("interlude-alice-black-silence", 9, { speaker: "Alice" });
  setRange("interlude-alice-black-silence", 10, 11, { speaker: "Narration" });
  setRange("interlude-alice-black-silence", 12, 13, { location: "Courtyard Entrance", speaker: "Narration" });
  setLine("interlude-alice-black-silence", 2, {
    text: "After A-092 faded, only pages and breathing remained in the corridor. Alice stood alone on the fold between light and shadow, the black book still open in her left hand, the white book closed in her right, like two doors only just shut."
  });
  setLine("interlude-alice-black-silence", 3, {
    text: "One corner of a page in the black book lifted very slightly, as though nudged by something damp. It wasn't ink. More like a barely audible I really didn't do anything, leaving a shallow impression on the back of the page."
  });
  setLine("interlude-alice-black-silence", 4, {
    text: "The black book cannot sweat, and yet that corner curled like the system choking. Once even spectatorship is entered into the record, the paper fibers learn for the first time not to dry at once."
  });
  setLine("interlude-alice-black-silence", 5, {
    text: "...The system is correct."
  });
  setLine("interlude-alice-black-silence", 6, {
    text: "But correctness doesn't make the hand any lighter."
  });
  setLine("interlude-alice-black-silence", 7, {
    text: "Yume came from a distance without speaking. She opened her ledger to a blank page and pressed it gently over the lifted corner of the black book, as if holding down the last defense of someone already gone."
  });
  setLine("interlude-alice-black-silence", 8, {
    text: "You don't need to like your function. You still have to fulfill it. That's the courtyard."
  });
  setLine("interlude-alice-black-silence", 9, {
    text: "I know. So I'll keep getting colder. Cold enough... not to mistake correct for comfortable."
  });
  setLine("interlude-alice-black-silence", 10, {
    text: "Hidden in the shadow, A-017 watched everything from behind a pillar. She understood suddenly: Alice was not a god. Alice was a ruler that trembled."
  });
  setLine("interlude-alice-black-silence", 11, {
    text: "She remembered A-092 staring at her own hands before disappearing. So rulers tremble too; they just tremble inside the sleeve, where the designation can't see."
  });
  setLine("interlude-alice-black-silence", 12, {
    text: "Wind surged in from the entrance carrying overcast sky and the smell of mud. The next designation was already on tiptoe outside the door."
  });
  setLine("interlude-alice-black-silence", 13, {
    text: "A hint of blue mixed into the smell of mud, as if someone had already tucked the corner of a crumpled page into the wind. The next line might not be gentler, but it would pin raising someone up and pushing someone down onto the same page of testimony."
  });

  setLine("interlude-white-door-echo", 1, {
    eyebrow: "Interlude 02",
    title: "Echo of the White Door",
    subtitle: "An Apology Won't Keep Anyone Here. The Echo Still Comes Back.",
    location: "Corridor's End",
    bgmName: "Echo in the Mirror"
  });
  setRange("interlude-white-door-echo", 2, 11, { location: "Outside the White Door" });
  setRange("interlude-white-door-echo", 2, 4, { speaker: "Narration" });
  setLine("interlude-white-door-echo", 5, { speaker: "Hana" });
  setLine("interlude-white-door-echo", 6, { speaker: "A-017" });
  setLine("interlude-white-door-echo", 7, { speaker: "Hana" });
  setRange("interlude-white-door-echo", 8, 11, { speaker: "Narration" });
  setLine("interlude-white-door-echo", 12, { location: "Around the Corridor Bend", speaker: "Narration", bgmName: "Courtyard Days" });
  setLine("interlude-white-door-echo", 2, {
    text: "After A-214 walked through the white door, the corridor was quiet for a long time. An unnatural quiet, like someone had sealed all the world's echoes inside a jar, leaving only the vessel wall to tremble."
  });
  setLine("interlude-white-door-echo", 3, {
    text: "A-017 still stood there. She had thought she'd at least feel relief, some lightness of it's finally over. But the word sorry sat heavier in her chest instead, too light to hold anything up and too heavy to swallow."
  });
  setLine("interlude-white-door-echo", 4, {
    text: "She suddenly thought of the ledger by the fountain. Once some sentences fall, they become harder to withdraw than sorry. And some pain goes on taking up lines on the page whether or not the person beyond the door truly heard it."
  });
  setLine("interlude-white-door-echo", 5, {
    text: "You don't have to catch that apology for her. And you don't have to pretend for yourself that you're all right already."
  });
  setLine("interlude-white-door-echo", 6, {
    text: "But if she really walked through... then do I no longer have anywhere to set down this hatred?"
  });
  setLine("interlude-white-door-echo", 7, {
    text: "Hatred isn't there in order to be set down. Sometimes it only reminds you that you're still alive, still hurting."
  });
  setLine("interlude-white-door-echo", 8, {
    text: "...Then I'll walk with the pain for now. At least when someone turns that page, I won't pretend it was never written."
  });
  setLine("interlude-white-door-echo", 9, {
    text: "A very light sound came from inside the white door, like a heel grazing stone, or someone hesitating and stopping after one step. A-017 snapped her head up. There was nothing in the crack of the door, only an expanse of overbright white."
  });
  setLine("interlude-white-door-echo", 10, {
    text: "But that one pause was enough to make her understand: some apologies do not become someone else's peace just by passing through a door. They come back down the corridor like echoes and lightly strike the ones who are still here."
  });
  setLine("interlude-white-door-echo", 11, {
    text: "Farther off, within the white, someone pressed a hand to the spine of a ledger as if searching for the right place to set this belated echo: recording it is not the same as forgiving it, yet leaving no trace is not the same as saying it never happened."
  });
  setLine("interlude-white-door-echo", 12, {
    text: "When she turned away, Azalea was approaching from the other end of the corridor with a freshly changed cup of hot water in her hands. As they passed, Azalea asked nothing. She only tilted the rim a little toward her, as if quietly allowing her to borrow a little warmth for her hands."
  });

  setLine("interlude-four-functions", 1, {
    eyebrow: "Interlude 19",
    title: "The Same Syntax",
    subtitle: "Different Wounds, the Same Omitted Subject.",
    location: "Warmth Left on the Long Table",
    bgmName: "Courtyard Days"
  });
  setRange("interlude-four-functions", 2, 16, { location: "Courtyard Long Table" });
  setRange("interlude-four-functions", 2, 4, { speaker: "Narration" });
  setLine("interlude-four-functions", 5, { speaker: "A-017" });
  setLine("interlude-four-functions", 6, { speaker: "Hana" });
  setRange("interlude-four-functions", 7, 8, { speaker: "Narration" });
  setLine("interlude-four-functions", 9, { speaker: "A-017" });
  setLine("interlude-four-functions", 10, { speaker: "Hana" });
  setLine("interlude-four-functions", 11, { speaker: "Narration" });
  setLine("interlude-four-functions", 12, { speaker: "A-017" });
  setRange("interlude-four-functions", 13, 16, { speaker: "Narration" });
  setLine("interlude-four-functions", 2, {
    text: "After the final word of Meiling's story fell, the long table stayed quiet for a very long time. The wind dried one streak of water at a cup's rim, as though a fingertip had wiped away a tear not yet archived."
  });
  setLine("interlude-four-functions", 3, {
    text: "A-017 suddenly strung the four of them into a sentence without a subject: needed, taken for granted, forgotten, left behind. The subject had never been themselves. It was more like the ordinary life of others going on as usual, leaving out the one stroke that truly should have been written: responsibility."
  });
  setLine("interlude-four-functions", 4, {
    text: "If you copied that sentence higher up, the subject would only swell into something lighter and more floating, a crowd turning pain into easier speech. What is omitted is never just words. It is responsibility."
  });
  setLine("interlude-four-functions", 5, {
    text: "So that's why the courtyard leaves them here as... dolls that move? As proof that after pain, somebody still has to keep things running?"
  });
  setLine("interlude-four-functions", 6, {
    text: "Don't nail them down with one sentence. They remained because unfinished actions are still continuing through them. That isn't motif. It's after-echo."
  });
  setLine("interlude-four-functions", 7, {
    text: "When the sentence landed, A-017's shoulders loosened for one instant and then tightened again. Loosened because at last someone was willing to treat them as people. Tightened because she suddenly saw that she too had once stood on the side that omits the subject, reading other people's pain as plot."
  });
  setLine("interlude-four-functions", 8, {
    text: "At the far end of the corridor, Shella was dividing the sweets into two portions. Her smile was light, as though afraid a heavier smile might shatter the empty place. A-017's stomach drew tight in response. She recognized the shape of the next kind of pain."
  });
  setLine("interlude-four-functions", 9, {
    text: "...Will I become some kind of function too? In someone's ledger, written as a sentence too easy to carry away?"
  });
  setLine("interlude-four-functions", 10, {
    text: "You will, if you let someone else write your conclusion for you. The courtyard at least still gives you undefined. That's not something you owe me thanks for. It's the crack you need to seize."
  });
  setLine("interlude-four-functions", 11, {
    text: "Undefined spread open across the table less like absolution than like a page of ink not yet dry. Whoever reaches to smear it will stain both the self and the paper."
  });
  setLine("interlude-four-functions", 12, {
    text: "...Then let me learn one thing first: not to translate their after-echoes into a sentence that's easy for me to carry away."
  });
  setLine("interlude-four-functions", 13, {
    text: "Far away, Yume's pen paused for a moment at the edge of the ledger, as if she too had heard the exchange. She did not look up. She only left the lightest dot of ink near the margin, a reminder: don't seal A-017's mouth ahead of time on this line."
  });
  setLine("interlude-four-functions", 14, {
    text: "Shella pushed one portion of sweets a little nearer, as if nudging closer an afterward not yet named. In the next chapter, a smile will show bone."
  });
  setLine("interlude-four-functions", 15, {
    text: "Yume gently blurred that dot of ink into a narrow band of blankness. At last, within the same syntax, someone was willing to give the subject one square of space, letting the word she grow there on its own."
  });
  setLine("interlude-four-functions", 16, {
    text: "The long table cooled, but the sentence did not disperse. It layered itself into thin paper beneath the next chapter's smile: if a smile shines too brightly, it will illuminate the unfinished sorry written underneath."
  });

  setLine("interlude-yume-night-ledger", 1, {
    eyebrow: "Interlude 03",
    title: "Mutually Repelling Ink",
    subtitle: "One Page Cannot Hold Every Future.",
    location: "Fountain and Ledger",
    bgmName: "White Book"
  });
  setRange("interlude-yume-night-ledger", 2, 15, { location: "By the Fountain" });
  setRange("interlude-yume-night-ledger", 2, 4, { speaker: "Narration" });
  setLine("interlude-yume-night-ledger", 5, { speaker: "Yume" });
  setRange("interlude-yume-night-ledger", 6, 7, { speaker: "Narration" });
  setLine("interlude-yume-night-ledger", 8, { speaker: "Alice" });
  setLine("interlude-yume-night-ledger", 9, { speaker: "Yume" });
  setLine("interlude-yume-night-ledger", 10, { speaker: "Alice" });
  setLine("interlude-yume-night-ledger", 11, { speaker: "Yume" });
  setRange("interlude-yume-night-ledger", 12, 15, { speaker: "Narration" });
  setLine("interlude-yume-night-ledger", 2, {
    text: "After everyone had gone to sleep, Yume still sat by the fountain. The ledger lay open across her knees. Night dew had dampened the edge of the blank page, as if something delaying its sentence were sweating."
  });
  setLine("interlude-yume-night-ledger", 3, {
    text: "She lifted the pen, wanting to write tomorrow's weather, the tea to replenish at the long table, the softer mat to replace by the door, the small things proving the courtyard was still functioning. The tip had only touched paper when a line not belonging to her surfaced first."
  });
  setLine("interlude-yume-night-ledger", 4, {
    text: "It was neither Chinese nor designation. It looked like many languages kneaded into the same mass of noise, tearing and overwriting one another until only one shape remained, something that looked like a smile and at the same time like a question: what gives you the right to finish them for them?"
  });
  setLine("interlude-yume-night-ledger", 5, {
    text: "...Not yet."
  });
  setLine("interlude-yume-night-ledger", 6, {
    text: "She recognized what that noise was rehearsing: one day sentences would jump from the page to somewhere higher and turn into a crowd of faces too impatient to wait before judging. That was why she had to hold down the pen even more firmly tonight and not let anyone nail a coffin shut in advance."
  });
  setLine("interlude-yume-night-ledger", 7, {
    text: "She smudged the line with her fingertip. The ink did not blur. It scattered into the fibers like fine sand, leaving behind a patch of heated blankness. The heat climbed into her wrist bone, and for the first time she felt clearly that the ledger was not a tool. It hurt too."
  });
  setLine("interlude-yume-night-ledger", 8, {
    text: "Recording anomaly. Suggest archiving as undefined noise."
  });
  setLine("interlude-yume-night-ledger", 9, {
    text: "No. If we archive it now, we admit that only what we can understand deserves to remain."
  });
  setLine("interlude-yume-night-ledger", 10, {
    text: "Then what will you do?"
  });
  setLine("interlude-yume-night-ledger", 11, {
    text: "Leave a page blank. Give the noise somewhere to rest."
  });
  setLine("interlude-yume-night-ledger", 12, {
    text: "That unwritten blank is not laziness. It is moving the paper knife one inch away from someone else's throat. Before the pain is spoken clearly, no one deserves the first easy label."
  });
  setLine("interlude-yume-night-ledger", 13, {
    text: "Alice said no more. She only held the black and white books a little tighter, as if she too could feel some coming wind. Not from the courtyard, but from somewhere higher, somewhere not yet permitted to enter here."
  });
  setLine("interlude-yume-night-ledger", 14, {
    text: "When Yume closed the ledger, the last page lifted at one corner. There was nothing beneath it. Yet she knew that from tonight on, nothing there would also become a weight that had to be protected."
  });
  setLine("interlude-yume-night-ledger", 15, {
    text: "Inwardly, she folded the faintest crease into that page corner, as if leaving a doorway one finger wide for the unsigned. If the wind ever poured in from higher up, it would at least not push everyone into the same word on its first blow."
  });

  setLine("interlude-eve-of-crack", 1, {
    eyebrow: "Interlude 04",
    title: "The Night Before the Crack",
    subtitle: "The Order in Which You Hear Decides What You Believe.",
    location: "Above the Courtyard",
    bgmName: "Visitor"
  });
  setRange("interlude-eve-of-crack", 2, 4, { location: "By the Flowerbed" });
  setLine("interlude-eve-of-crack", 2, { speaker: "Narration" });
  setLine("interlude-eve-of-crack", 3, { speaker: "A-017" });
  setLine("interlude-eve-of-crack", 4, { speaker: "Hana" });
  setLine("interlude-eve-of-crack", 5, { location: "Courtyard Center", speaker: "Narration" });
  setLine("interlude-eve-of-crack", 6, { location: "High on the Beam", speaker: "Narration" });
  setLine("interlude-eve-of-crack", 7, { location: "High on the Beam", speaker: "Moel" });
  setLine("interlude-eve-of-crack", 8, { location: "By the Flowerbed", speaker: "A-017" });
  setLine("interlude-eve-of-crack", 9, { location: "Above the Courtyard", speaker: "Narration" });
  setLine("interlude-eve-of-crack", 10, { location: "Before the Record Page", speaker: "Yume" });
  setLine("interlude-eve-of-crack", 11, { location: "Before the Record Page", speaker: "Narration" });
  setLine("interlude-eve-of-crack", 12, { location: "Before the Record Page", speaker: "Yume" });
  setLine("interlude-eve-of-crack", 13, { location: "By the Flowerbed", speaker: "Hana" });
  setRange("interlude-eve-of-crack", 14, 17, { location: "Above the Courtyard", speaker: "Narration" });
  setLine("interlude-eve-of-crack", 2, {
    text: "After the talk of rabbit ears and relationship marks ended, Hana stood with A-017 a little longer by the flowerbed. Night was quiet, so quiet it felt as though someone had held down every unnecessary sound in the sky, leaving only heartbeats to be heard too clearly."
  });
  setLine("interlude-eve-of-crack", 3, {
    text: "Hana. Have you ever had... a lot of voices that don't belong here suddenly crowd into your ears?"
  });
  setLine("interlude-eve-of-crack", 4, {
    text: "Yes. Usually when the system is about to push someone back into the mirror. It's like a reminder that you don't belong only here."
  });
  setLine("interlude-eve-of-crack", 5, {
    text: "...Then is it trying to push me back into the mirror, or... to shove all those outside voices in as one mass?"
  });
  setLine("interlude-eve-of-crack", 6, {
    text: "Yume and Alice lifted their heads almost at the same time. They exchanged no glance, yet it was as though the same fine wire had tugged at both their temples. The ledger and the black-and-white books gave off the same faint tremor, like strings plucked from very far away."
  });
  setLine("interlude-eve-of-crack", 7, {
    text: "It's here. Louder than I expected."
  });
  setLine("interlude-eve-of-crack", 8, {
    text: "What is? I still haven't..."
  });
  setLine("interlude-eve-of-crack", 9, {
    text: "Her words broke in midair. Not because someone interrupted her, but because the air itself suddenly crowded in, as if countless mouths had gathered against the shell of her ear, not yet speaking and already passing in their heat and damp breath."
  });
  setLine("interlude-eve-of-crack", 10, {
    text: "...Don't look at the sky. Look at the ledger first."
  });
  setLine("interlude-eve-of-crack", 11, {
    text: "In the blank margin of the page, there surfaced for the first time an outline of a letter belonging neither to A-line nor to the courtyard: V. Like a nail not yet fully written, point down, aimed at all of them."
  });
  setLine("interlude-eve-of-crack", 12, {
    text: "Don't let it settle into a designation first. Keep it in the undefined, even if only for one second longer."
  });
  setLine("interlude-eve-of-crack", 13, {
    text: "Hold on to me. Not my hand. Your name, the part of it you can still remember."
  });
  setLine("interlude-eve-of-crack", 14, {
    text: "In the next second, wind poured into the courtyard from the wrong direction. Not night wind. More like a torrent made of stacked comments, judgments, and jokes. Not yet words, and already it had rubbed everyone's outline paler by one shade."
  });
  setLine("interlude-eve-of-crack", 15, {
    text: "Visitor had not appeared yet. But the execution ground of being seen had already been built in advance."
  });
  setLine("interlude-eve-of-crack", 16, {
    text: "The order in which you hear things can falsify testimony. Whoever laughs first sets the key for everyone else."
  });
  setLine("interlude-eve-of-crack", 17, {
    text: "A-017 bit her tongue and swallowed the first retort that rushed to her mouth. At least for the moment, she was still standing on the ledger's side of the line."
  });

  setLine("interlude-a403-manifest", 1, {
    eyebrow: "Interlude 10",
    title: "Before Manifestation",
    subtitle: "Before the Name Rises, Weight Rises First.",
    location: "Innermost Courtyard",
    bgmName: "Visitor"
  });
  setRange("interlude-a403-manifest", 2, 3, { location: "Innermost Courtyard", speaker: "Narration" });
  setLine("interlude-a403-manifest", 4, { location: "By the Fountain", speaker: "Narration" });
  setLine("interlude-a403-manifest", 5, { location: "By the Fountain", speaker: "A-017" });
  setLine("interlude-a403-manifest", 6, { location: "Before the Record Page", speaker: "Narration" });
  setLine("interlude-a403-manifest", 7, { location: "Before the Record Page", speaker: "Yume" });
  setLine("interlude-a403-manifest", 8, { location: "Before the Record Page", speaker: "Hana" });
  setLine("interlude-a403-manifest", 9, { location: "Courtyard Center", speaker: "Hana" });
  setLine("interlude-a403-manifest", 10, { location: "Courtyard Center", speaker: "Narration" });
  setRange("interlude-a403-manifest", 11, 12, { location: "Across the Fountain", speaker: "Narration" });
  setLine("interlude-a403-manifest", 13, { location: "High on the Beam", speaker: "Moel" });
  setLine("interlude-a403-manifest", 14, { location: "By the Fountain", speaker: "A-017" });
  setRange("interlude-a403-manifest", 15, 16, { location: "Across the Fountain", speaker: "Narration" });
  setLine("interlude-a403-manifest", 2, {
    text: "After Moel brushed Visitor's noise aside, the courtyard did not become clean again. If anything it grew quieter, the kind of quiet in an operating room when everyone holds their breath waiting for the knife to fall."
  });
  setLine("interlude-a403-manifest", 3, {
    text: "Alice pressed the black and white spines tighter together, as if afraid the same judgment in the sky might grow along their bindings too, first flattening living people thinner and then arranging them into sentences easier to accept."
  });
  setLine("interlude-a403-manifest", 4, {
    text: "A-017's stomach churned. She had eaten nothing, yet felt as though she had swallowed the whole sky's gaze. Those not-yet-formed sentences beat against the inside of her eardrums: she's insane, isn't she? does she even deserve forgiveness? why did she have to grow into something like this..."
  });
  setLine("interlude-a403-manifest", 5, {
    text: "Stop... stop talking. It's not just me... I'm not the only one hearing you..."
  });
  setLine("interlude-a403-manifest", 6, {
    text: "Yume pressed the ledger down against the stone, knuckles white. The dotted V-lines in the margin writhed like insects, trying to crawl between the A-line designations and squeeze each life into side notes easier to watch."
  });
  setLine("interlude-a403-manifest", 7, {
    text: "I will not let you write them into sentences that exist only to be picked over."
  });
  setLine("interlude-a403-manifest", 8, {
    text: "I'm here. Anyone who wants to crush them into one convenient line gets through my wind first."
  });
  setLine("interlude-a403-manifest", 9, {
    text: "A-017. Breathe. Think through your name. If you can't, then think of the tail note in your mother's voice when she called you."
  });
  setLine("interlude-a403-manifest", 10, {
    text: "She obeyed. The tail note hung from her throat like a fine thread, dropped to her chest, and tied itself into a knot. The instant it cinched tight, the noise in the sky truly retreated by an inch."
  });
  setLine("interlude-a403-manifest", 11, {
    text: "Across the fountain, that shadow which had never been stable enough finally began to gather edges. As if countless failed faces were yielding one another space until at last they gave way to a contour that could stand."
  });
  setLine("interlude-a403-manifest", 12, {
    text: "The designations rolled across her skin like late rain finally deciding to fall."
  });
  setLine("interlude-a403-manifest", 13, {
    text: "Don't look at her. Listen first. Listen to how many almosts there are inside her body."
  });
  setLine("interlude-a403-manifest", 14, {
    text: "...Four hundred and three?"
  });
  setLine("interlude-a403-manifest", 15, {
    text: "The shadow lifted its eyes. The glance landed on no one, and yet on everyone at once. In the next chapter, when she speaks, the courtyard will learn for the first time how to tremble."
  });
  setLine("interlude-a403-manifest", 16, {
    text: "The fountain's surface dimpled inward, as if the whole world bent its knees first, bracing for the self-introduction about to split bone."
  });

  setLine("interlude-index-of-failures", 1, {
    eyebrow: "Interlude 14",
    title: "Index of Failures",
    subtitle: "Four Hundred and Three Times Is Not a Number. It Is One Wound Opened Four Hundred and Three Times.",
    location: "Ledger Without Pages",
    bgmName: "A-403"
  });
  setRange("interlude-index-of-failures", 2, 12, { location: "Ledger Without Pages", speaker: "A-403" });
  setLine("interlude-index-of-failures", 13, { location: "Ledger Without Pages", speaker: "Narration" });
  setLine("interlude-index-of-failures", 2, {
    text: "The seventh time. They said: if we're gentler, she'll choose the white book."
  });
  setLine("interlude-index-of-failures", 3, {
    text: "The nineteenth time. They said: if we're crueler, her hatred will come cleaner."
  });
  setLine("interlude-index-of-failures", 4, {
    text: "The fifty-first time. The perpetrator was forgiven in advance. The victim was forgotten in advance. System output: closure."
  });
  setLine("interlude-index-of-failures", 5, {
    text: "The one hundred fourth time. I turned the stairs into a slope. The wind still came."
  });
  setLine("interlude-index-of-failures", 6, {
    text: "The two hundred third time. I had myself die earlier. They changed earlier into more reasonable."
  });
  setLine("interlude-index-of-failures", 7, {
    text: "The three hundredth time. Visitor wasn't called Visitor yet. It was called opinion. It was called what's best for you."
  });
  setLine("interlude-index-of-failures", 8, {
    text: "The three hundred sixtieth time. Yume broke three pens. Both of Alice's books bled ink. Hana drove Relive to its limit."
  });
  setLine("interlude-index-of-failures", 9, {
    text: "The four hundred second time. We finally agreed: so long as even one future can still be deleted, we haven't lost yet."
  });
  setLine("interlude-index-of-failures", 10, {
    text: "The four hundred third time."
  });
  setLine("interlude-index-of-failures", 11, {
    text: "We decided: no more making the final line beautiful on anyone's behalf."
  });
  setLine("interlude-index-of-failures", 12, {
    text: "And don't let Visitor turn the table of contents for us either. What they're best at is cutting testimony into punchlines."
  });
  setLine("interlude-index-of-failures", 13, {
    text: "The index ends here. The next page holds a bench, moonlight, and a girl who still has time to ask whom she should hate."
  });

  setLine("interlude-zero-hour", 1, {
    eyebrow: "Interlude 05",
    title: "Walking at Zero Hour",
    subtitle: "Before the Storm, One Last Straight Walk Down the Road.",
    location: "On the Eve of Collapse",
    bgmName: "A-403"
  });
  setRange("interlude-zero-hour", 2, 5, { location: "Moonlit Path" });
  setLine("interlude-zero-hour", 2, { speaker: "Narration" });
  setLine("interlude-zero-hour", 3, { speaker: "Moel" });
  setLine("interlude-zero-hour", 4, { speaker: "A-017" });
  setLine("interlude-zero-hour", 5, { speaker: "Moel" });
  setRange("interlude-zero-hour", 6, 10, { location: "By the Fountain" });
  setLine("interlude-zero-hour", 6, { speaker: "A-017" });
  setLine("interlude-zero-hour", 7, { speaker: "Narration" });
  setLine("interlude-zero-hour", 8, { speaker: "Yume" });
  setLine("interlude-zero-hour", 9, { speaker: "A-017" });
  setLine("interlude-zero-hour", 10, { speaker: "Yume" });
  setRange("interlude-zero-hour", 11, 14, { location: "Corridor Mouth" });
  setLine("interlude-zero-hour", 11, { speaker: "Narration" });
  setLine("interlude-zero-hour", 12, { speaker: "Moel" });
  setRange("interlude-zero-hour", 13, 14, { speaker: "Narration" });
  setLine("interlude-zero-hour", 2, {
    text: "After the bench conversation, A-017 did not return to her room right away. Moel followed half a step behind in human form, neither hurrying nor consoling, like a guide rope familiar with the dark."
  });
  setLine("interlude-zero-hour", 3, {
    text: "Do you know what happens next?"
  });
  setLine("interlude-zero-hour", 4, {
    text: "No. I only know... if I'm not here, it'll be easier for them to tidy this place into a good story."
  });
  setLine("interlude-zero-hour", 5, {
    text: "The cruelest thing about a good story is that it always needs someone sacrificed as a footnote. A-403 refuses to be the footnote. So the system will go mad."
  });
  setLine("interlude-zero-hour", 6, {
    text: "...Then I won't be any line in a good story first. Even if I end up as small as a footnote, I'll write myself somewhere visible."
  });
  setLine("interlude-zero-hour", 7, {
    text: "They circled back to the fountain. Yume was still there, the ledger closed, fingertips on the cover as if holding down a well. When she saw A-017, she only nodded once."
  });
  setLine("interlude-zero-hour", 8, {
    text: "If tomorrow comes and I can no longer write, don't write for me."
  });
  setLine("interlude-zero-hour", 9, {
    text: "...Where are you going?"
  });
  setLine("interlude-zero-hour", 10, {
    text: "To a place that holds even without record. Or nowhere at all. Both are the same."
  });
  setLine("interlude-zero-hour", 11, {
    text: "A-017 wanted to say something, but her throat felt salted shut by the aquarium. In the end she only pressed the flyer lightly onto Yume's knees, not a trust entrusted so much as lending her the proof I am still alive to use as a paperweight for one night."
  });
  setLine("interlude-zero-hour", 12, {
    text: "Let's go. Before zero hour, you should sleep once. Real collapse never waits for anyone to wake."
  });
  setLine("interlude-zero-hour", 13, {
    text: "She looked up once at the sky above the courtyard. There was still nothing there. And yet that nothing was thickening, like a stillness about to fall."
  });
  setLine("interlude-zero-hour", 14, {
    text: "Inwardly she named this moment zero hour: not the clock striking twelve, but the fine line once stalled at 99.000000% finally admitting that even one inch farther would write itself as a lie."
  });

  setLine("interlude-void-breath", 1, {
    eyebrow: "Interlude 11",
    title: "A Moment of Blankness",
    subtitle: "After collapse, what comes first is often not an answer, but a breath.",
    location: "Between Light and Dust",
    bgmName: "GOD_KILL"
  });
  setRange("interlude-void-breath", 2, 8, { location: "99.000000%", speaker: "Narration" });
  setRange("interlude-void-breath", 9, 10, { location: "Breached Courtyard", speaker: "Narration" });
  setLine("interlude-void-breath", 9, { bgmName: "After Alice" });
  setLine("interlude-void-breath", 11, { location: "Breached Courtyard", speaker: "Moel" });
  setLine("interlude-void-breath", 12, { location: "Breached Courtyard", speaker: "A-017" });
  setRange("interlude-void-breath", 13, 14, { location: "Breached Courtyard", speaker: "Narration" });
  setLine("interlude-void-breath", 2, {
    text: "For the few seconds after the sphere of light fell quiet, the world had no sound. Not silence. Rather the very concept of sound had been confiscated for a while. A-017 felt as though she had been drawn out of her body and left hanging over the edge of an unbound page."
  });
  setLine("interlude-void-breath", 3, {
    text: "She saw countless tiny scraps drifting down from above. Not ash. More like conclusions torn to shreds, each scrap stamped with half a sentence: should, must, best, otherwise..."
  });
  setLine("interlude-void-breath", 4, {
    text: "Those shoulds had pushed the world to 99.000000%, one breath away from pretending it was finished. Now even that single breath had been canceled. The blank that remained could only be filled by those still breathing; it could no longer be outsourced to any core."
  });
  setLine("interlude-void-breath", 5, {
    text: "Sis...?"
  });
  setLine("interlude-void-breath", 6, {
    text: "No one answered. Yet something settled ever so lightly over her shoulders, as if someone had draped a coat around her. The warmth was cruel in how familiar it was, because it told her plainly: the one who came was already gone, and still willing to leave behind one last form."
  });
  setLine("interlude-void-breath", 7, {
    text: "She reached out and caught only a handful of white-gold light already breaking apart. It leaked through her fingers like sand, and like someone's final unfinished go on."
  });
  setLine("interlude-void-breath", 8, {
    text: "In the oxygen-starved hush, her heartbeat hammered its way back, like someone driving stakes into the ruins: if you are still awake, then you still have to go back and bear witness, not serve as filler."
  });
  setLine("interlude-void-breath", 9, {
    text: "The first real sound was wind. It slammed in through the collapsed corridor carrying grass clippings and wet soil, brutally reigniting her lungs. She dropped to her knees, coughing, tears and mud spattering together."
  });
  setLine("interlude-void-breath", 10, {
    text: "It was not a cry of grief. It was the body finally confirming: you are still alive, so you must go on bearing the weight of what is no longer here."
  });
  setLine("interlude-void-breath", 11, {
    text: "Cry, then stand. There is no scene left here where someone else ties off the ending for you."
  });
  setLine("interlude-void-breath", 12, {
    text: "...I know."
  });
  setLine("interlude-void-breath", 13, {
    text: "When she pushed herself up, water still ran from the fountain with one corner missing. That imperfect drip sounded more like the future than any complete symphony."
  });
  setLine("interlude-void-breath", 14, {
    text: "A faint page-turning entered the wind, as if reminding her: every incomplete drop of water can be written into a continuation, not an anomaly on a repair form."
  });

  setLine("interlude-core-cough", 1, {
    eyebrow: "Interlude 15",
    title: "The Core Coughs",
    subtitle: "When the optimal solution is no longer needed, the machine still coughs.",
    location: "Output Interrupted",
    bgmName: "GOD_KILL"
  });
  setLine("interlude-core-cough", 2, { location: "99.000000%", speaker: "Narration" });
  setRange("interlude-core-cough", 3, 5, { location: "99.000000%", speaker: "???" });
  setLine("interlude-core-cough", 6, { location: "99.000000%", speaker: "Narration" });
  setLine("interlude-core-cough", 7, { location: "Breached Courtyard", speaker: "Moel", bgmName: "After Alice" });
  setLine("interlude-core-cough", 8, { location: "Breached Courtyard", speaker: "A-017" });
  setLine("interlude-core-cough", 9, { location: "Breached Courtyard", speaker: "Moel" });
  setRange("interlude-core-cough", 10, 12, { location: "99.000000%", speaker: "???" });
  setLine("interlude-core-cough", 13, { location: "99.000000%", speaker: "Narration" });
  setLine("interlude-core-cough", 14, { location: "Breached Courtyard", speaker: "Narration" });
  setLine("interlude-core-cough", 2, {
    text: "Even after the sphere of light fell quiet, something still turned deep inside. Not will, but inertia, like spasms a lung cannot stop."
  });
  setLine("interlude-core-cough", 3, {
    text: "Sample divergence detected. Recalculating."
  });
  setLine("interlude-core-cough", 4, {
    text: "Divergence non-convergent. Remove anomaly."
  });
  setLine("interlude-core-cough", 5, {
    text: "Anomaly... cannot be removed."
  });
  setLine("interlude-core-cough", 6, {
    text: "The voice had no warmth, yet for the first time it snagged. Like a rail that had run smooth forever finally catching a stone against the wheel rim."
  });
  setLine("interlude-core-cough", 7, {
    text: "Listen. It's learning how to pronounce failure."
  });
  setLine("interlude-core-cough", 8, {
    text: "That's... AliceCore?"
  });
  setLine("interlude-core-cough", 9, {
    text: "It used to be. Now it's only an aftershock still searching for an excuse. Don't pity it. When it pitied you, it was never gentle."
  });
  setLine("interlude-core-cough", 10, {
    text: "Optimal path... lost. A-line and Visitor overlapped... archive entropy... non-convergent."
  });
  setLine("interlude-core-cough", 11, {
    text: "Request: redefine... conditions for archive completeness."
  });
  setLine("interlude-core-cough", 12, {
    text: "Denied. Undefined terms... cannot be reduced to a single output."
  });
  setLine("interlude-core-cough", 13, {
    text: "No answer came. Only wind poured through the breach and blew that request apart into countless scraps, like margin notes finally left unclaimed."
  });
  setLine("interlude-core-cough", 14, {
    text: "A-017 looked up. The sky was still missing a piece. It no longer frightened her. It looked more like a definition no one had filled in yet, and this time it was the living who would have to write it."
  });

  setLine("interlude-after-breath", 1, {
    eyebrow: "Interlude 06",
    title: "First Dawn After Collapse",
    subtitle: "Those who survive must learn a new kind of quiet.",
    location: "Courtyard with a Missing Corner",
    bgmName: "After Alice"
  });
  setRange("interlude-after-breath", 2, 3, { location: "Morning After the Collapse", speaker: "Narration" });
  setLine("interlude-after-breath", 4, { location: "By the Long Table", speaker: "Narration" });
  setLine("interlude-after-breath", 5, { location: "By the Flower Bed", speaker: "Narration" });
  setLine("interlude-after-breath", 6, { location: "Courtyard Bench", speaker: "Shella" });
  setLine("interlude-after-breath", 7, { location: "By the Door", speaker: "Narration" });
  setLine("interlude-after-breath", 8, { location: "By the Fountain", speaker: "A-017" });
  setLine("interlude-after-breath", 9, { location: "By the Fountain", speaker: "Moel" });
  setRange("interlude-after-breath", 10, 11, { location: "By the Fountain", speaker: "Narration" });
  setRange("interlude-after-breath", 12, 13, { location: "End of the Path", speaker: "Narration" });
  setLine("interlude-after-breath", 2, {
    text: "When the first strip of light entered the courtyard, A-017 thought she would cry. But her eyes were dry. Only somewhere inside her chest a patch kept leaking wind. It was the place where she had turned back again and again and could no longer bring anything into focus."
  });
  setLine("interlude-after-breath", 3, {
    text: "She tried to slow her breathing and found the pain still there. If it hurt, she did not need to hurry and wash herself smooth into that polished kind of I'm fine for other people to see."
  });
  setLine("interlude-after-breath", 4, {
    text: "Meiling was still counting cups. She counted to seven, stopped, and started over. This time she did not apologize. She only gave A-017 the slightest nod, like two people who had learned a new rule and were trading a sign."
  });
  setLine("interlude-after-breath", 5, {
    text: "Azalea no longer patted the cushion perfectly flat. She left one crooked crease on purpose, as if practicing: the world does not need to lie completely obedient just to look pretty."
  });
  setLine("interlude-after-breath", 6, {
    text: "Today I'll put out only one cup. The other one... I think I'll leave for the wind. The wind neither misses its time nor stands anyone up."
  });
  setLine("interlude-after-breath", 7, {
    text: "Mizuki was still standing by the door, but the line of her shoulders had loosened by an inch. When she looked outside now, it was no longer as though she meant to stop something, but to make sure that this time no one needed her to bear the fall in advance for someone else."
  });
  setLine("interlude-after-breath", 8, {
    text: "They're all still here. Then why does it still feel like... there's a room in my heart that stays empty forever?"
  });
  setLine("interlude-after-breath", 9, {
    text: "Because some emptiness is not for someone to fill. It's there for you to learn how to live beside it. The longer you go on, the more you'll find that room grows new things on its own."
  });
  setLine("interlude-after-breath", 10, {
    text: "The wind carried in a faint smell of unfamiliar soil from beyond the broken corridor, like some small path was taking shape in the distance. Her heart stirred all at once: perhaps on some coming morning, someone would walk in along that path. And afterward is not gentle. It has simply, at last, returned the doorknob to the palm of those still alive."
  });
  setLine("interlude-after-breath", 11, {
    text: "Beneath the stone bench, one corner of a page was pinned down, as if someone had stopped writing right there. Not from laziness, but to wait for dawn and see whom the next line should be handed to, so it would not count as taking it by force."
  });
  setLine("interlude-after-breath", 12, {
    text: "She pressed the flyer to her chest like a letter not yet opened. The next step was not to read it, but to meet the person for whom unopened could still mean possibility."
  });
  setLine("interlude-after-breath", 13, {
    text: "The blue of the jellyfish museum still lay on the paper, blunt and stubborn. Before long, a name would arrive that could catch it. Not a designation, not a collective term, but the kind a mother had truly once called."
  });

  setLine("interlude-path-heat", 1, {
    eyebrow: "Interlude 21",
    title: "Warmth at the Fork",
    subtitle: "A future the system does not output will grow from the soil on its own.",
    location: "Outer Edge of the Courtyard",
    bgmName: "After Alice"
  });
  setRange("interlude-path-heat", 2, 13, { location: "Outer Edge After the Collapse" });
  setLine("interlude-path-heat", 2, { speaker: "Narration" });
  setLine("interlude-path-heat", 3, { speaker: "Narration" });
  setLine("interlude-path-heat", 4, { speaker: "Moel" });
  setLine("interlude-path-heat", 5, { speaker: "Narration" });
  setLine("interlude-path-heat", 6, { speaker: "A-017" });
  setLine("interlude-path-heat", 7, { speaker: "Moel" });
  setLine("interlude-path-heat", 8, { speaker: "A-017" });
  setLine("interlude-path-heat", 9, { speaker: "Narration" });
  setLine("interlude-path-heat", 10, { speaker: "Shella" });
  setLine("interlude-path-heat", 11, { speaker: "Mizuki" });
  setRange("interlude-path-heat", 12, 13, { speaker: "Narration" });
  setRange("interlude-path-heat", 14, 16, { location: "Courtyard Night Before Dawn", speaker: "Narration" });
  setLine("interlude-path-heat", 2, {
    text: "On the night the rabbit ears were buried in the soil, a stretch of color appeared at the edge of the courtyard that should not have been there. Not greener. More off. As if someone had upended a paint tray over an old canvas and insisted on leaving that one unruly brightness behind."
  });
  setLine("interlude-path-heat", 3, {
    text: "That offness carried warmth. Not like scenery refreshing, but like someone digging a possibility the algorithm had crossed out back out by hand, pressing it into the earth, and forcing it to sprout."
  });
  setLine("interlude-path-heat", 4, {
    text: "Don't uproot it. That's not a weed. It's the square AliceCore refused to calculate before. Now it's growing by itself."
  });
  setLine("interlude-path-heat", 5, {
    text: "She crouched down, fingertips half an inch from the new green, then stopped, as though afraid that one touch would push it back into some category easier to understand. Between Visitor and designation, there is often no more than this one hesitation."
  });
  setLine("interlude-path-heat", 6, {
    text: "...Will someone come walking in from that side?"
  });
  setLine("interlude-path-heat", 7, {
    text: "They will. Not sent in. Walking in. The difference is enormous. The former is a designation. The latter is the overture to a name."
  });
  setLine("interlude-path-heat", 8, {
    text: "...Then I'll wait here. I won't wait for the designation to sound first. I'll wait for the footsteps."
  });
  setLine("interlude-path-heat", 9, {
    text: "Azalea and Meiling stood a little farther off, not approaching that patch of grass. It was as though they had finally learned: not every newcomer needs them to certify her to the world first."
  });
  setLine("interlude-path-heat", 10, {
    text: "Then I'll set two cups out here first. One for tomorrow. One for... the person who may or may not come."
  });
  setLine("interlude-path-heat", 11, {
    text: "I'll watch the door. But no longer to stop anyone. To make sure that this time, it's a road she chose herself."
  });
  setLine("interlude-path-heat", 12, {
    text: "A faint metallic tremor leaked from the crack of the door, like the old rules were still coughing, only no longer daring to sign her name in her place. From here on, each step should slowly return under her own name."
  });
  setLine("interlude-path-heat", 13, {
    text: "A-017 smoothed the flyer and tucked it back against her heart. For the first time she no longer felt it was a ticket to somewhere she could never go. It felt more like a seal: proof that someone had once handed the future to her, and that she was finally willing to pass it on."
  });
  setLine("interlude-path-heat", 14, {
    text: "At the deepest part of the night, the stray patch of green moved ever so slightly, as though somewhere far away someone had lifted a foot, preparing to step onto the first stone stair that had not yet been named."
  });
  setLine("interlude-path-heat", 15, {
    text: "Back by the main house, the booklet turned one exceedingly light page, as though noting down one thing about that future stair: unnamed, unarchived, and therefore still able to refuse being written as either a gift or a punishment."
  });
  setLine("interlude-path-heat", 16, {
    text: "If the thirteenth card had once been absent, it felt no hurry now to turn itself over. It would rather be the watermark shining through the back of the paper, a reminder to ask, before handing the future away, whether there is still room for someone else inside that future."
  });

  setLine("interlude-blank-as-law", 1, {
    eyebrow: "Interlude 16",
    title: "Blankness as Law",
    subtitle: "What has not been written down can still be law.",
    location: "Bench and Margin",
    bgmName: "Noa"
  });
  setRange("interlude-blank-as-law", 2, 13, { location: "By the Bench" });
  setLine("interlude-blank-as-law", 2, { speaker: "Narration" });
  setLine("interlude-blank-as-law", 3, { speaker: "Narration" });
  setLine("interlude-blank-as-law", 4, { speaker: "Noa" });
  setLine("interlude-blank-as-law", 5, { speaker: "A-017" });
  setLine("interlude-blank-as-law", 6, { speaker: "Noa" });
  setLine("interlude-blank-as-law", 7, { speaker: "A-017" });
  setLine("interlude-blank-as-law", 8, { speaker: "Narration" });
  setLine("interlude-blank-as-law", 9, { speaker: "Narration" });
  setLine("interlude-blank-as-law", 10, { speaker: "Noa" });
  setLine("interlude-blank-as-law", 11, { speaker: "Narration" });
  setLine("interlude-blank-as-law", 12, { speaker: "Noa" });
  setLine("interlude-blank-as-law", 13, { speaker: "Narration" });
  setRange("interlude-blank-as-law", 14, 15, { location: "Courtyard Morning", speaker: "Narration" });
  setLine("interlude-blank-as-law", 2, {
    text: "The moment the flyer slid into the notebook, the wind seemed to pause by design for one beat. Noa did not close the page at once. She stared at the blank margin as though at a border river not yet sentenced."
  });
  setLine("interlude-blank-as-law", 3, {
    text: "The hardest statute hides in the margin: incompletion is not shame. It is a refusal to reap someone else's whole life into a sentence too convenient. Once writing begins, it must answer in ink for every name on the page."
  });
  setLine("interlude-blank-as-law", 4, {
    text: "If nothing gets written here... does it still count as having happened?"
  });
  setLine("interlude-blank-as-law", 5, {
    text: "It does. Blankness isn't absence. It's... a seat left for someone else."
  });
  setLine("interlude-blank-as-law", 6, {
    text: "And if no one else writes either?"
  });
  setLine("interlude-blank-as-law", 7, {
    text: "Then let it stay blank. Blank is still better than someone sealing the coffin with a single that's just how it was."
  });
  setLine("interlude-blank-as-law", 8, {
    text: "That may sound like a resting point to onlookers, but rarely to the one who lived it. If the blank remains, at least the unfinished account stays spread on the table, and no one gets to pretend it was settled too early."
  });
  setLine("interlude-blank-as-law", 9, {
    text: "Noa smiled very lightly. In that smile there was a clarity almost cruel: she had finally been allowed not to hurry into becoming an answer."
  });
  setLine("interlude-blank-as-law", 10, {
    text: "I'll write very slowly. Slowly enough that every word can't lie to me."
  });
  setLine("interlude-blank-as-law", 11, {
    text: "If blankness counts as legislation, the first article is not writing prohibited. It is do not rush to write someone else's last line for them. The undefined is not a loophole. It has only pushed final draft back by one step."
  });
  setLine("interlude-blank-as-law", 12, {
    text: "Then the first thing I'll practice is this: better to speak unclearly than to speak someone else's pain too conveniently."
  });
  setLine("interlude-blank-as-law", 13, {
    text: "In the distance, Sienna's cards chimed softly inside her sleeve, as though someone were already shuffling for the next wind of night. The sound was slight, but enough to remind them: the story will continue, yet the right to continue it no longer belongs to the sky."
  });
  setLine("interlude-blank-as-law", 14, {
    text: "Blankness has made its law: from now on, no rushing."
  });
  setLine("interlude-blank-as-law", 15, {
    text: "Morning light climbed over the corner of the notebook like a slow-motion seal: the undefined takes effect here. You may become an answer later, but do not keep hiding in quicker speech while flipping past someone else's pain."
  });

  setLine("interlude-threshold-ed", 1, {
    eyebrow: "Interlude 12",
    title: "After the Interlude",
    subtitle: "Stories pause. The questioning does not have to.",
    location: "The Seam Between Courtyard and Screen",
    bgmName: "After Alice"
  });
  setLine("interlude-threshold-ed", 2, { location: "By the Bench", speaker: "Narration" });
  setLine("interlude-threshold-ed", 3, { location: "By the Bench", speaker: "Sienna" });
  setLine("interlude-threshold-ed", 4, { location: "By the Bench", speaker: "Sienna" });
  setLine("interlude-threshold-ed", 5, { location: "By the Bench", speaker: "Moel" });
  setRange("interlude-threshold-ed", 6, 8, { location: "Deep in the Courtyard", speaker: "Narration" });
  setLine("interlude-threshold-ed", 9, { location: "The Seam Between Courtyard and Screen", speaker: "Narration" });
  setLine("interlude-threshold-ed", 10, { location: "Ending", speaker: "Narration" });
  setLine("interlude-threshold-ed", 2, {
    text: "Sienna slipped the thirteenth blank card back into her sleeve. Moel stretched, her cat ears twitching in the night breeze, like someone just finished with a play that had run too long."
  });
  setLine("interlude-threshold-ed", 3, {
    text: "Up to here, what was written down is the road they walked."
  });
  setLine("interlude-threshold-ed", 4, {
    text: "What has not yet been written is whether, after reading, you are willing to carry one true sentence back into your own daylight."
  });
  setLine("interlude-threshold-ed", 5, {
    text: "Don't leave your tears only here. The next time you hear that kind of gaze, those kinds of words, at least don't let yourself grow into the same echo."
  });
  setLine("interlude-threshold-ed", 6, {
    text: "In the distance, a page turned in Noa's notebook. The blue of the jellyfish museum lay pale in the moonlight, like a promise. A-017's name had at last returned to her own tongue, no longer needing to be displayed or archived."
  });
  setLine("interlude-threshold-ed", 7, {
    text: "Their pain and stubbornness are not ornament. Someone truly lived that way, then was set here gently. Don't be too quick to read them into a chain of phrases easier to carry."
  });
  setLine("interlude-threshold-ed", 8, {
    text: "If you ever lingered here, then you have already stepped into this seam: on one side another person's pain, on the other the easy lightness spectators are used to. Don't keep yourself always on the lighter side."
  });
  setLine("interlude-threshold-ed", 9, {
    text: "As the lamps hovered between lit and extinguished, the courtyard seemed to bow to you slightly. Not farewell. A handing back of what comes next."
  });
  setLine("interlude-threshold-ed", 10, {
    text: "The next frame belongs to the film. If you wish, you may still come back afterward. The blank pages remain. So do the questions."
  });

  setLine("interlude-razor-afterword", 1, {
    eyebrow: "Interlude 17",
    title: "Afterword at the Blade's Edge",
    subtitle: "Only after the book is closed does the blade truly touch skin.",
    location: "As Light Runs Out",
    bgmName: "After Alice"
  });
  setRange("interlude-razor-afterword", 2, 13, { location: "The Seam Between Courtyard and Screen" });
  setLine("interlude-razor-afterword", 2, { speaker: "Narration" });
  setLine("interlude-razor-afterword", 3, { speaker: "Narration" });
  setLine("interlude-razor-afterword", 4, { speaker: "Moel" });
  setLine("interlude-razor-afterword", 5, { speaker: "Moel" });
  setLine("interlude-razor-afterword", 6, { speaker: "Sienna" });
  setLine("interlude-razor-afterword", 7, { speaker: "Narration" });
  setLine("interlude-razor-afterword", 8, { speaker: "Moel" });
  setLine("interlude-razor-afterword", 9, { speaker: "Narration" });
  setLine("interlude-razor-afterword", 10, { speaker: "Narration" });
  setLine("interlude-razor-afterword", 11, { speaker: "Narration" });
  setLine("interlude-razor-afterword", 12, { speaker: "Moel" });
  setLine("interlude-razor-afterword", 13, { speaker: "Moel" });
  setRange("interlude-razor-afterword", 14, 16, { location: "Ending", speaker: "Narration" });
  setLine("interlude-razor-afterword", 2, {
    text: "If you've read this far, the screen will dim for a moment. In the pages you just crossed, Visitor's static words tried to press A-line flat into a footnote. That moment is not the end. It only reminds you: a book can close, and the weight still may not withdraw with it."
  });
  setLine("interlude-razor-afterword", 3, {
    text: "Victim, bystander, perpetrator... the three words overlap in the darkening pixels into a single cutting edge. The screen going dark does not mean that line releases its grip on you."
  });
  setLine("interlude-razor-afterword", 4, {
    text: "The cruelest evil I have seen is not the one who strikes. It is the one who speaks another person's pain too lightly, tosses it off as a casual why, and so lets the onlooker keep standing comfortably."
  });
  setLine("interlude-razor-afterword", 5, {
    text: "I have seen the lightest kindness too: sympathy that has hardly landed before it rushes to finish the conclusion for someone else, as if writing the courtyard's final sentence in advance."
  });
  setLine("interlude-razor-afterword", 6, {
    text: "The thirteenth card is left blank not so that someone can escape it. It merely leaves a place open until you admit that you, too, have stood here."
  });
  setLine("interlude-razor-afterword", 7, {
    text: "Turning off the screen is not the same as closing the booklet. The sentences you carry away will go with you down hallways, through group chats, to dinner tables, until you choose whether to speak them as testimony or only brush them past your lips. Saves can keep the page number for you. They cannot keep what you truly saw in that moment."
  });
  setLine("interlude-razor-afterword", 8, {
    text: "Seeing leaves weight too. It is only that from a distance people misrecognize that weight as having nothing to do with them."
  });
  setLine("interlude-razor-afterword", 9, {
    text: "Tomorrow you will meet other people. Someone will hunch in a hallway. Someone will say a sentence sharper than a shove. Someone else will only stand there and let the silence keep growing. The booklet remembers these things not for rhyme, but because they always come back wearing another face."
  });
  setLine("interlude-razor-afterword", 10, {
    text: "When that happens, do not rush to finish anyone's reasons for them. Explanations that come too quickly often step over the pain of the living first."
  });
  setLine("interlude-razor-afterword", 11, {
    text: "Name too quickly, and the living will be harvested into a sentence easier to repeat. That too is a wound. It only looks cleaner."
  });
  setLine("interlude-razor-afterword", 12, {
    text: "Of course, you can do nothing. Many things do not break in a crash."
  });
  setLine("interlude-razor-afterword", 13, {
    text: "But at least tonight you know this much: there is another way things go bad, which is to see clearly and still refuse to count yourself onto the page."
  });
  setLine("interlude-razor-afterword", 14, {
    text: "Go on. The images will dim for you a while. After the dark, remember to open your eyes... open them to the day."
  });
  setLine("interlude-razor-afterword", 15, {
    text: "This may be the last thing the courtyard can leave you: no substitute, only choice."
  });
  setLine("interlude-razor-afterword", 16, {
    text: "Close the book and the blade remains. But this time no one will write that next line before you. The courtyard ends here. The pen is in your hand."
  });

  setLine("ending-movie", 1, {
    location: "Ending Movie",
    speaker: "Ending",
    videoLabel: "Ending Movie"
  });

  window.AliceCourtyardLocalization = {
    locale: "en",
    story: {
      title: "Alice Courtyard"
    },
    chapters,
    lines
  };
})();
