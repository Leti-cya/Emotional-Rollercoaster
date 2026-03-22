//Song Data
const songs = [
    {
        title: "Quill Pen",
        artist: "Hyunjin",
        mood: "Reflective & Melancholic",
        description: "This song evokes a sense of introspection, capturing the bittersweet essense of fleeting memories.",
        quote: '"Chueogeul ssachadeoni tuk jugo ganeun geudae"',
        color: "#e3d0c9", //light beige/pink mood section
        bgColor: "#fdf6f0", //soft parchment white
        textColor: "#3b2f2f", //deep brown
        quoteBgColor: "#f4ebe3", //warm parchment beige
        quoteBorderColor: "#bfae9a", //soft vibe, minimal
        font: "'Crimson Text', serif", //bookish, reflective feel
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1996251703&color=%23967356&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://th.bing.com/th/id/OIP.XWMa6uuLgMouZqoMwCiC0QHaHa?rs=1&pid=ImgDetMain",
        fact: "Music can evoke powerful emotions and memories, making it a universal language of the soul.",
        particleType: "feathers"
    },
    {
        title: "Inception",
        artist: "ATEEZ",
        mood: "Dreamy & Yearning",
        description: "A haunting belnd of desire and illusion, this track feels like chasing a dream you can't quite grasp.",
        quote: '"Dasin kkaeji mothal neoran kkume sara"',
        color: "#6a5acd", //soft purple-blue mood section
        bgColor: "#0d0f1a", //dark blue-black twilight
        textColor: "#f0eaff", //etherreal light text
        quoteBgColor: "#1a1333", //rich twilight purple
        quoteBorderColor: "#8a7cba", //faint lavender line
        font: "'Raleway', sans-serif", //clean and modern
        audioURL: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1322196958&color=%23967356&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&show_title=false",
        image: "https://i.pinimg.com/736x/3a/dc/8c/3adc8c146f8b07e1d27df272905b2740.jpg",
        fact: "Songs with dreamy synths often activate the imagination and emotional centerss of the brain.",
        particleType: "dreamy-rain"
    }
    //Add more songs here...
];

//DOM Elements
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
let songCount = 0; //Track the number of songs played

//Load song
function loadSong(index) {
    localStorage.setItem("lastSongIndex", index);
    const song = songs[index];
    currentSongIndex = index;
    songCount++;

    //IF 10 songs have bee played, trigger the Easter egg
    if (songCount >= 10) {
        triggerEasterEgg();
    }

    //Update content
    songTitle.textContent = `"${song.title}"`;
    artistName.textContent = song.artist;
    moodText.textContent = song.mood;
    moodDesc.textContent = song.description;
    quote.textContent = song.quote;
    footerFact.textContent = `Fun Fact: ${song.fact}`;
    audioPlayer.src = song.audioURL;
    albumArt.src = song.image;

    //Theme
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

    //Font
    document.body.style.fontFamily = song.font;

    //Next button
    document.getElementById("nextSongBtn").style.backgroundColor = song.color;

    //Particle effects
    addParticleEffect(song.particleType);
    setParticleAnimation(song.particleType);
}

//Easter egg
function triggerEasterEgg() {
    body.style.animation = "chaosMode 2s ease-in-out";
    setTimeout(() => {
        body.style.animation = "";
        alert("Congratulations! You've unlocked the chaos mode!");
        songCount = 0; //Reset song count
    }, 2000);
}

//Initial load
window.addEventListener("load", () => {
    const savedIndex = localStorage.getItem("lastSongIndex");
    if (savedIndex !== null && songs[savedIndex]) {
        currentSongIndex = parseInt(savedIndex);
    } else {
        currentSongIndex = Math.floor(Math.random()*songs.length);
    }
    loadSong(currentSongIndex);
});

//Get random index that's not the current
function getRandomIndex(excludeIndex) {
    if (songs.length <= 1) return excludeIndex; //No other song to switch to
    let newIndex;
    do {
        newIndex = Math.floor(Math.random()*songs.length);
    } while (newIndex === excludeIndex);
    return newIndex;
}

//Next button
document.getElementById("nextSongBtn").addEventListener("click", () => {
    const nextIndex = getRandomIndex(currentSongIndex);

    body.classList.add("fade"); //Add fade effect
    setTimeout(() => {
        loadSong(nextIndex);
        body.classList.remove("fade");
    }, 300); //Wait a before switching
});