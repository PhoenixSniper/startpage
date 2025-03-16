// Open URLs
function openLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Dynamic Clock
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// Progress Bar
function updateDayProgress() {
    const now = new Date();
    const totalMinutes = 24 * 60; // Total minutes in a day
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const progress = (currentMinutes / totalMinutes) * 100;

    const progressBar = document.getElementById('day-progress');
    progressBar.style.width = `${progress}%`;

    console.log(`Current Progress: ${progress.toFixed(2)}%`); // Debugging
}

setInterval(updateDayProgress, 60000); // Update every minute
updateDayProgress(); // Run immediately on load

//Music Logic
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeControl = document.getElementById('volumeControl');
const trackName = document.getElementById('trackName');

let audio = new Audio();
let isPlaying = false;
let currentTrackIndex = 0;

// List of local music files (simulating a directory structure)
const musicDirectory = [
    "music/Tevvez - Legend Ψ.mp3",
    "music/Tristam & Braken - Frame of Mind.mp3",
    "music/VØJ, Narvent - HEAR ME (The Perfect Girl Phonk Remix).mp3",
    "music/VØJ, Narvent, KoruSe - Euphoria.mp3",
    "music/washing machine heart (slowed).mp3"
];

// Function to load and play a track
function loadTrack(index) {
    audio.src = musicDirectory[index];
    trackName.textContent = musicDirectory[index].split('/').pop(); // Show only filename
    audio.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸️';
}

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (!audio.src) loadTrack(currentTrackIndex);

    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    } else {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
});

// Next track
nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicDirectory.length;
    loadTrack(currentTrackIndex);
});

// Previous track
prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + musicDirectory.length) % musicDirectory.length;
    loadTrack(currentTrackIndex);
});

// Volume control
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Auto-play the next track when the current one ends
audio.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicDirectory.length;
    loadTrack(currentTrackIndex);
});

// Initialize volume on load
audio.volume = 0.5;

