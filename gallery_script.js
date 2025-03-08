const imageGallery = [
    "https://unsplash.com/photos/buildings-and-body-of-water-WHHY-iBp3aI",
    "https://unsplash.com/photos/skyline-photography-of-boat-passing-on-waters-overlooking-buildings-2yN10KHNTzM",
    "https://unsplash.com/photos/three-brown-wooden-boat-on-blue-lake-water-taken-at-daytime-T7K4aEPoGGk",
    "https://unsplash.com/photos/pathway-in-forest-with-yellow-sunlight-F7HGqkkMYAU"
]
const imageElement = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImgIndex];
}
nextButton.addEventListener
updateImage();