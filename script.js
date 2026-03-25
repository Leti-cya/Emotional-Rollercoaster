// Song Data
const songs = [
    {
        title: "Quill Pen",
        artist: "Hyunjin",
        mood: "Reflective & Melancholic",
        description: "This song evokes a sense of introspection, capturing the bittersweet essence of fleeting memories.",
        quote: '"Chueogeul ssachadeoni tuk jugo ganeun geudae"',
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
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1322196958&color=%237a6cff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
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
        quote: '"Geoul sogui naega natseolgiman hae"',
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