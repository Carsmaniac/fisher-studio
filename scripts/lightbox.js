function showLightbox(clickedImage) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-image").src = clickedImage.src.replace(".jpg", "-full.jpg");
}

function hideLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("lightbox-image").src = "";
}

function maybeHideLightbox() {
    var image = document.getElementById("lightbox-image");
    // Only hide the lighbox if the mouse clicked outside the image
    if (!image.matches(":hover")) {
        hideLightbox()
    }
}

document.addEventListener("keyup", function (keyEvent) {
    if (event.key == "Escape") {
        hideLightbox();
    }
})
