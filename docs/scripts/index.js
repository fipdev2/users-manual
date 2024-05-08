function zoomOut(id) {
    let image = document.getElementById(id);
    let overlay = document.getElementById('overlay');

    image.style.animation = "zoomout 200ms ease-out";
    overlay.parentNode.insertBefore(image, overlay);
    overlay.parentNode.removeChild(overlay);
    setTimeout(() => {
        image.style.animation = "";
    }, 200);
}

function handleZoomInZoomOut(id) {
    let image = document.getElementById(id);
    let images = document.getElementsByTagName("img");
    let clickedImages = document.getElementsByClassName("clicked");
    let imgArray = [...images];

    const sidebar = document.querySelector('.sidebar');

    if (!clickedImages.length) {
        image.classList.add("clicked");
        let overlay = document.createElement('div');
        overlay.classList.add("overlay-active");
        overlay.id = "overlay";
        image.parentNode.insertBefore(overlay, image);
        overlay.appendChild(image);

        document.body.addEventListener("click", handleZoomOut);
        document.body.addEventListener("keydown", handleKeyDown);
    } else {
        image.classList.remove("clicked");
        document.body.removeEventListener("click", handleZoomOut);
        if (!clickedImages.length) {

            zoomOut(id);
        }
    }
}


function handleZoomOut(event) {
    let image = document.querySelector(".clicked");

    if (!image.contains(event.target)) {
        image.classList.remove("clicked");
        zoomOut(image.id);

        document.body.removeEventListener("click", handleZoomOut);
    }
}

function handleKeyDown(event) {
    if (event.key === "Escape") {
        let image = document.querySelector(".clicked");
        image.classList.remove("clicked");
        zoomOut(image.id);
    }
}
