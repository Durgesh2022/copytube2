var videos = [
    { src: "video1.mp4", title: "Video 1" },
    { src: "video2.mp4", title: "Video 2" },
    // Add more video objects as needed
];

var videoContainer = document.getElementById("video-container");

function initializeVideos() {
    videos.forEach(function(video, index) {
        var videoElement = document.createElement("video");
        videoElement.src = video.src;
        videoElement.controls = true;

        var button = document.createElement("button");
        button.textContent = "Play " + video.title;
        button.onclick = function() {
            playVideo(index);
        };

        videoContainer.appendChild(videoElement);
        videoContainer.appendChild(button);
    });
}

function playVideo(index) {
    videos.forEach(function(video, i) {
        var videoElement = videoContainer.querySelector("video:nth-child(" + (i + 1) + ")");
        
        if (i === index) {
            if (videoElement.paused) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        } else {
            videoElement.pause();
        }
    });
}

window.onload = function() {
    initializeVideos();
};
