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

