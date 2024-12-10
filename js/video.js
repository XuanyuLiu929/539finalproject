const X = document.getElementById('main-video');


const Y = document.getElementById('playBtn');


const Z = document.getElementById('rangeArea');


const A = document.getElementById('muteBtn');


const B = document.getElementById('volumeArea');

// Play/Pause Button Event
Y.addEventListener('click', function () {
    console.log("Play/Pause button clicked");
    if (X.paused) {
        X.play();
        Y.innerHTML = '&#10074;&#10074;'; // Pause symbol
        console.log("Video playing");
    } else {
        X.pause();
        Y.innerHTML = '&#9658;'; // Play symbol
        console.log("Video paused");
    }
});

// Video Time Update
X.addEventListener('timeupdate', function () {
    const progress = (X.currentTime / X.duration) * 100;
    Z.value = progress;
});

// Seekbar Input
Z.addEventListener('input', function () {
    const time = (Z.value / 100) * X.duration;
    X.currentTime = time;
});

// Mute/Unmute Button Event
A.addEventListener('click', function () {
    if (X.muted) {
        X.muted = false;
        A.innerHTML = '&#128266;'; // Unmute symbol
        B.value = X.volume * 100;
    } else {
        X.muted = true;
        A.innerHTML = '&#128263;'; // Mute symbol
        B.value = 0;
    }
});

// Volume Control
B.addEventListener('input', function () {
    X.volume = B.value / 100;
    if (B.value > 0) {
        X.muted = false;
        A.innerHTML = '&#128266;'; // Unmute symbol
    }
});

// learn from https://www.youtube.com/watch?v=54I2kBLkYNE 