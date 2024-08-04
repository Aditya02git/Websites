// JavaScript to control the mute/unmute functionality
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    var muteButton = document.getElementById('mute-button');

    muteButton.addEventListener('click', function() {
        if (audio.muted) {
            audio.muted = false;
            muteButton.innerHTML = '&#9654';
        } else {
            audio.muted = true;
            muteButton.innerHTML = '&#128263';
        }
    });
});
