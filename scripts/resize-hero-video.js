var ticking = false;

const heroVideo = document.getElementById("hero-video");
const videoContainer = document.getElementById("hero-video-container");

function resizeVideo() {
    if (videoContainer.clientWidth / videoContainer.clientHeight >= 16 / 9) {
        heroVideo.style.width = videoContainer.clientWidth + "px";
        heroVideo.style.height = videoContainer.clientWidth * 9 / 16 + "px";
    } else {
        heroVideo.style.height = videoContainer.clientHeight + "px";
        heroVideo.style.width = videoContainer.clientHeight * 16 / 9 + "px";
    }
}

heroVideo.onload = resizeVideo();

// Debouncing function from html5rocks via MDN
window.addEventListener('resize', function(e) {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            resizeVideo();
            ticking = false;
        });

        ticking = true;
    }
});
