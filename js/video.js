var video;

// page load
window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	if (video) {
		video.autoplay = false;
		video.loop = false;
		video.load();
		console.log("auto play is set to false");
		console.log("looping is set to false");
	}
}
);


// play the video
document.querySelector("#play").addEventListener("click", function () {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerText = video.volume * 100 + "%"
	console.log("volume information")
});

// pause button
document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
	console.log("Video pause")
});

// slow down
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Video slows down");
});

// speed up
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate * 1.10;
	console.log("Video speeds up");
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function () {
	skip = video.currentTime + 10;

	if (skip > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = skip;
	}
	console.log("The current video time is " + video.currentTime);
});

// mute
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerText = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerText = "Mute";
	}
	console.log("mute/unmute the video")
});

// volumn slider
document.querySelector("#slider").addEventListener("input", function () {
	var slider = document.querySelector("#slider");
	video.volume = slider.value / 100;
	document.querySelector("#volume").innerText = slider.value + "%";
});



