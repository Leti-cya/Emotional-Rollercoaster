// Song Data
const songs = [
    {
        title: "Quill Pen",
        artist: "Hyunjin",
        mood: "Reflective & Melancholic",
        description: "This song evokes a sense of introspection, capturing the bittersweet essence of fleeting memories.",
        quote: '"Geudaeui sarangeun wae Oeroumgwa gataseo"',
        color: "#e3d0c9", // Light beige/pink for mood section
        bgColor: "#fdf6f0", // Soft parchment white
        textColor: "#3b2f2f", // Deep brown for text
        quoteBgColor: "#f4ebe3", // Warm quote background
        quoteBorderColor: "#bfae9a", // Minimal soft border
        font: "'Crimson Text', serif", // Bookish, reflective feel
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1996251703&color=%23967356&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://tse1.explicit.bing.net/th/id/OIP.KskqRrVuyhiN9U2JgCBkZQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        fact: "Music can evoke powerful emotions and memories, making it a universal language of the soul.",
        particleType: "feathers",
        isChaos: false  // isChaos → determines if song is only played during chaos mode (not in normal rotation)
    },
    {
        title: "Inception",
        artist: "ATEEZ",
        mood: "Dreamy & Yearning",
        description: "A haunting blend of desire and illusion, this track feels like chasing a dream you can't quite grasp.",
        quote: '"Dasin kkaeji mothal neoran kkume sara"',
        color: "#6a5acd",
        bgColor: "#0d0f1a",
        textColor: "#f0eaff",
        quoteBgColor: "#1a1333",
        quoteBorderColor: "#8a7cba",
        font: "'Raleway', sans-serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A866155096&color=%237a6cff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://i.pinimg.com/736x/3a/dc/8c/3adc8c146f8b07e1d27df272905b2740.jpg",
        fact: "Songs with dreamy synths often activate the imagination and emotional centers of the brain.",
        particleType: "dreamy-rain",
        isChaos: false
    },
    {
        title: "Drunk-Dazed",
        artist: "ENHYPEN",
        mood: "Chaotic & Hypnotic",
        description: "A dizzy, intoxicating spiral of sound.",
        quote: '"Wonham wonhaneun daero, gal ttaekkaji gabwa, go"',
        color: "#ff0033",
        bgColor: "#0a0000",
        textColor: "#ffffff",
        quoteBgColor: "#1a0000",
        quoteBorderColor: "#ff0033",
        font: "'Orbitron', sans-serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1314216916&color=7c0820&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://i1.sndcdn.com/artworks-pNs25GwhN84X-0-t1080x1080.jpg",
        fact: "High BPM songs increase adrenaline.",
        particleType: "bubbles",
        isChaos: true   // Mark chaos song
    },
    {
        title: "Love Poem",
        artist: "MAYFLY (메이플라이) (Kingdom)",
        mood: "Emotional & Soothing",
        description: "A tender cover full of quiet warmth, carrying the weight of unspoken feelings.",
        quote: '"I`ll be there hollo geonneun neoye dwie singing till the end"',
        color: "#bab5ca",
        bgColor: "#1f1b2e",
        textColor: "#f0eaff",
        quoteBgColor: "#2a263c",
        quoteBorderColor: "#bfa6e0",
        font: "'Raleway', sans-serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1052087935&color=%235c707c&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://tse2.mm.bing.net/th/id/OIP.gZdnrUFTKnMlhc3jmQliigHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        fact: "Covers can bring out new emotions and textures in a song you thought you knew.",
        particleType: "feathers",
        isChaos: false
    },
    {
        title: "XO (Only If You Say Yes)",
        artist: "ENHYPEN",
        mood: "Dreamy & Playful",
        description: "A soft yet uplifting track that flutters between longing and joy.",
        quote: '"Nal umjigineun dan hana yeolsoe"',
        color: "#c6e2ff",
        bgColor: "#0d1a2b",
        textColor: "#f0f8ff",
        quoteBgColor: "#1a2c42",
        quoteBorderColor: "#7aa2ff",
        font: "'Raleway', sans-serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1869770106&color=%237a6cff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://t2.genius.com/unsafe/834x0/https:%2F%2Fimages.genius.com%2Ff06e11e5d28dab6bf1d3cfce584626be.1000x1000x1.png",
        fact: "Soft synths and playful melodies evoke youthful energy.",
        particleType: "feathers",
        isChaos: false
    },
    {
        title: "Chk Chk Boom",
        artist: "Stray Kids",
        mood: "Energetic & Fun",
        description: "A high-energy track that makes you move and bounce with excitement.",
        quote: '"Nae haengboneun yeojeonhi geudaeum leveleman daeipae"',
        color: "#ffe0b3",
        bgColor: "#2a1a0d",
        textColor: "#534343",
        quoteBgColor: "#3c2b18",
        quoteBorderColor: "#ffb74d",
        font: "'Orbitron', sans-serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1881122505&color=%23ff9900&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://tse2.mm.bing.net/th/id/OIP.oJawUZYjtUMPVT254XsErQHaKl?rs=1&pid=ImgDetMain&o=7&rm=3",
        fact: "High BPM tracks spike adrenaline and energy.",
        particleType: "bubbles",
        isChaos: false
    },
    {
        title: "Red Lights",
        artist: "Bangchan & Hyunjin",
        mood: "Mysterious & Hypnotic",
        description: "Dark, seductive beats that pull you into a trance-like state.",
        quote: '"Aljana neol gamanhi dul su eomneun geol"',
        color: "#9b1b30",
        bgColor: "#1a0000",
        textColor: "#f8d7da",
        quoteBgColor: "#2c0000",
        quoteBorderColor: "#ff4c6d",
        font: "'Orbitron', sans-serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1111283017&color=%23d61a3c&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://wallpapercave.com/wp/wp10241608.png",
        fact: "Red lights symbolize tension, urgency, and emotion in music.",
        particleType: "bubbles",
        isChaos: false
    },
    {
        title: "Ddu-Du Ddu-Du",
        artist: "BLACKPINK",
        mood: "Chaotic & Fierce",
        description: "Bold, explosive beats with unstoppable energy—true chaos in sound.",
        quote: '"Hit you with that ddu-du, ddu-du, du"',
        color: "#ff1a75",
        bgColor: "#0a0000",
        textColor: "#ffffff",
        quoteBgColor: "#33000d",
        quoteBorderColor: "#ff1a75",
        font: "'Orbitron', sans-serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A465709557&color=%237c0820&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://tse3.mm.bing.net/th/id/OIP.EfA8lVJxBwf0Lv_eWQnxbAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        fact: "High intensity songs trigger chaos mode vibes perfectly.",
        particleType: "bubbles",
        isChaos: true
    },
    {
        title: "Merry-Go-Round",
        artist: "BTS",
        mood: "Reflective & Nostalgic",
        description: "A bittersweet melody capturing the cyclical nature of love and life.",
        quote: '"I wish that I could tell you that it`s over"',
        color: "#e3d0c9",
        bgColor: "#2e1f1a",
        textColor: "#f0eaff",
        quoteBgColor: "#3c2b2a",
        quoteBorderColor: "#bfae9a",
        font: "'Crimson Text', serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2287323173&color=%23967356&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://tse1.mm.bing.net/th/id/OIF.w51gicd3ZWJ8YDzyziT1kA?rs=1&pid=ImgDetMain&o=7&rm=3",
        fact: "BTS’s reflective songs often bring a comforting sense of nostalgia.",
        particleType: "feathers",
        isChaos: false
    },
    {
        title: "George the Lobster",
        artist: "Xdinary Heroes",
        mood: "Quirky & Playful",
        description: "A silly, upbeat tune with infectious energy and humor.",
        quote: '"Banbokdoen sangcheoga nareul hejimneun daedo geu modeun gotongeul jeulgil geoya on my own"',
        color: "#fff0b3",
        bgColor: "#1a140d",
        textColor: "#5a4848",
        quoteBgColor: "#2e250d",
        quoteBorderColor: "#ffcc33",
        font: "'Orbitron', sans-serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2061977964&color=%23ffcc00&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://tse4.mm.bing.net/th/id/OIP.S-EGfpd4x5hvmr0ur6T9UAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        fact: "Fun, quirky songs can lift the mood instantly.",
        particleType: "bubbles",
        isChaos: false
    },
    {
        title: "1&Only",
        artist: "XLOV",
        mood: "Romantic & Soft",
        description: "Gentle love ballad full of tender emotions and heartbeats.",
        quote: '"It doesn`t even matter as long as we keep turning it up"',
        color: "#f5d1e3",
        bgColor: "#2b1a2a",
        textColor: "#f0eaff",
        quoteBgColor: "#3a253a",
        quoteBorderColor: "#e6a0cc",
        font: "'Raleway', sans-serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2119083582&color=%237a6cff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://tse4.mm.bing.net/th/id/OIP.qXb26rEVRzaYs-T2AXzbWQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        fact: "Soft ballads help balance a playlist with gentle energy.",
        particleType: "feathers",
        isChaos: false
    },
    {
        title: "Escape",
        artist: "Bangchan & Hyunjin",
        mood: "Calm & Dreamy",
        description: "Smooth, flowing melodies perfect for losing yourself in thought.",
        quote: '"Let me take you to a place that nobody even knows"',
        color: "#b3dfff",
        bgColor: "#0d1a22",
        textColor: "#f0f8ff",
        quoteBgColor: "#1a2b34",
        quoteBorderColor: "#66a3ff",
        font: "'Raleway', sans-serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2129585772&color=%237a6cff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://tse1.mm.bing.net/th/id/OIP.NyDnYTzum8ny8Xyy4OfOaAHaE1?rs=1&pid=ImgDetMain&o=7&rm=3",
        fact: "Dreamy tracks allow moments of calm reflection.",
        particleType: "feathers",
        isChaos: false
    },
    {
        title: "Wonderland (Symphony No.9)",
        artist: "ATEEZ",
        mood: "Epic & Uplifting",
        description: "A grand, cinematic track that makes you feel like you’re in a storybook world.",
        quote: '"Kkeuti gidarineun sijageuro"',
        color: "#cce6ff",
        bgColor: "#0a1a33",
        textColor: "#f0f8ff",
        quoteBgColor: "#1a2c4d",
        quoteBorderColor: "#66b3ff",
        font: "'Raleway', sans-serif",
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1096064344&color=%237a6cff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://www.hellokpop.com/wp-content/uploads/2019/10/ateez-fin-1-768x960.jpg",
        fact: "Symphonic arrangements in K-pop add grandeur and emotion.",
        particleType: "feathers",
        isChaos: true
    }
];

// Separate Normal vs Chaos Songs for Controlled Playback
const normalSongs = songs.filter(song => !song.isChaos);
const chaosSongs = songs.filter(song => song.isChaos);

// DOM Elements
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const moodText = document.getElementById("mood");
const moodDesc = document.getElementById("mood-description");
const quote = document.getElementById("song-quote");
const quoteSection = document.getElementById("quote-section");
const moodSection = document.getElementById("mood-section");
const audioPlayer = document.querySelector(".audio-player iframe");
const albumArt = document.querySelector(".album-art img");
const footerFact = document.getElementById("fun-fact");
const body = document.body;
const header = document.querySelector("header");
const footer = document.querySelector("footer");

let currentSongIndex = 0;
let songCount = 0; // Tracks how many songs have been played in current cycle

// Load Song Function
function loadSong(index) {
    localStorage.setItem("lastSongIndex", index); // Save last played song
    const song = songs[index];
    currentSongIndex = index;
    songCount++;

    // If the loaded song is marked as chaos → activate chaos mode visuals
    if (song.isChaos) {
        triggerEasterEgg();
    }

    // Update page content dynamically
    songTitle.textContent = `"${song.title}"`;
    artistName.textContent = song.artist;
    moodText.textContent = song.mood;
    moodDesc.textContent = song.description;
    quote.textContent = song.quote;
    footerFact.textContent = `Fun Fact: ${song.fact}`;
    audioPlayer.src = song.audioURL;
    albumArt.src = song.image;

    // Theme colors
    body.style.backgroundColor = song.bgColor;
    body.style.color = song.textColor;
    moodSection.style.backgroundColor = song.color;
    moodSection.style.color = song.textColor;
    quote.style.color = song.textColor;
    quoteSection.style.backgroundColor = song.quoteBgColor;
    quoteSection.style.borderLeft = `5px solid ${song.quoteBorderColor}`;
    footer.style.backgroundColor = song.textColor;
    footer.style.color = song.bgColor;
    header.style.backgroundColor = song.textColor;
    header.style.color = song.bgColor;

    // Font
    document.body.style.fontFamily = song.font;

    // Next button color
    document.getElementById("nextSongBtn").style.backgroundColor = song.color;

    // Particle effects
    addParticleEffect(song.particleType);
}

// Particle Effect Function
function addParticleEffect(type) {
    const container = document.getElementById('particles-container');
    container.innerHTML = '';

    for (let i = 0; i < 35; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');

        // Random horizontal position
        p.style.left = Math.random() * 100 + "vw";

        // Random delay + duration
        p.style.animationDuration = (4 + Math.random() * 6) + "s";
        p.style.animationDelay = Math.random() * 5 + "s";

        // Different behaviour per type
        if (type === "dreamy-rain") {
            p.classList.add("rain");
        } 
        else if (type === "bubbles") {
            p.classList.add("bubble");
        } 
        else if (type === "feathers") {
            p.classList.add("feather");
        }

        container.appendChild(p);
    }
}

// Easter Egg: Chaos Mode
let chaosActive = false;

function triggerEasterEgg() {
    chaosActive = true;

    // Show alert immediately
    alert("Chaos mode unlocked 😈");

    // Add chaos class (instead of temporary animation)
    document.body.classList.add("chaos-mode");
}

// Initial Load
window.addEventListener("load", () => {
    const savedIndex = localStorage.getItem("lastSongIndex");
    if (savedIndex !== null && songs[savedIndex]) {
        currentSongIndex = parseInt(savedIndex);
    } else {
        currentSongIndex = Math.floor(Math.random()*songs.length);
    }
    loadSong(currentSongIndex);
});

// Get a Random Normal Song Index (Exclude Current Song)
function getRandomNormalIndex(excludeIndex) {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * normalSongs.length);
    } while (songs.indexOf(normalSongs[newIndex]) === excludeIndex);

    return songs.indexOf(normalSongs[newIndex]);
}

// Get a Random Chaos Song Index
function getRandomChaosIndex() {
    const randomChaos = chaosSongs[Math.floor(Math.random() * chaosSongs.length)];
    return songs.indexOf(randomChaos);
}

// Next Song Button
document.getElementById("nextSongBtn").addEventListener("click", () => {
    let nextIndex;

    // If currently in chaos mode → reset everything back
    if (chaosActive) {
        chaosActive = false;
        document.body.classList.remove("chaos-mode");
        songCount = 0;

        nextIndex = getRandomNormalIndex(currentSongIndex);
    }

    // If next song is 10th → trigger chaos
    else if (songCount === 9) {
        nextIndex = getRandomChaosIndex();
    }

    //  Normal flow
    else {
        nextIndex = getRandomNormalIndex(currentSongIndex);
    }

    body.classList.add("fade");

    setTimeout(() => {
        loadSong(nextIndex);
        body.classList.remove("fade");
    }, 800);
});