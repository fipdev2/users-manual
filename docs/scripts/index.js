function zoomOut(id) {
    let images = document.getElementsByTagName("img");
    let imgArray = [...images];
    imgArray.map(image => image.style.cursor = "zoom-in")
    let image = document.getElementById(id);
    image.style.animation = "zoomout 200ms ease-out";
    setTimeout(() => {
        image.style.animation = "";
    }, 200);
}

function handleZoomInZoomOut(id) {
    let image = document.getElementById(id);
    let images = document.getElementsByTagName("img");
    let clickedImages = document.getElementsByClassName("clicked");
    let imgArray = [...images];

    if (!clickedImages.length) {
        image.classList.add("clicked");
        imgArray.map((image) => {
            image.style.cursor = "not-allowed"
        })
        image.style.cursor = "zoom-out";
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