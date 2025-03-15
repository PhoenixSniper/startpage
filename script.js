// Open URLs
function openLink(url) {
    window.open(url, '_blank');
}

// Dynamic Clock
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

