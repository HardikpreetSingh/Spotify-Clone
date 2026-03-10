let audio = document.getElementById("audioplayer");
let playBtn = document.getElementById("playpause");
let progressBar = document.querySelector(".progress-bar");
let currentTimeEl = document.querySelector(".curr-time");
let totalTimeEl = document.querySelector(".int-time");
let playIcon = playBtn.querySelector("i");

playBtn.addEventListener("click", function () {

    if (audio.paused) {
        audio.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
    } else {
        audio.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    }

});
audio.addEventListener("loadedmetadata", function () {
    let minutes = Math.floor(audio.duration / 60);
    let seconds = Math.floor(audio.duration % 60);
    if (seconds < 10) seconds = "0" + seconds;

    totalTimeEl.textContent = minutes + ":" + seconds;
});

audio.addEventListener("timeupdate", function () {

    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;

    let minutes = Math.floor(audio.currentTime / 60);
    let seconds = Math.floor(audio.currentTime % 60);
    if (seconds < 10) seconds = "0" + seconds;

    currentTimeEl.textContent = minutes + ":" + seconds;

});
progressBar.addEventListener("input", function () {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});
let volumeSlider = document.querySelector(".range");

volumeSlider.addEventListener("input", function () {
    audio.volume = volumeSlider.value / 100;
});
