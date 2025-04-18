import { images } from "./dados.js";
const galleryContainer = document.querySelector("#gallery-container");
const loadMoreButton = document.querySelector("#load-more");
const imagesPerPage = 4;
let currentImageIndex = 0;

function loadImages() {
  const pageImages = images.slice(
    currentImageIndex,
    currentImageIndex + imagesPerPage
  );
  const fragment = document.createDocumentFragment();
  pageImages.forEach((images) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = `gallery-item ${images.wide ? "wide" : ""}`;

    const imageItem = document.createElement("img");
    imageItem.src = images.src;
    imageItem.alt = images.alt;

    galleryItem.appendChild(imageItem);
    galleryContainer.appendChild(galleryItem);
  });

  currentImageIndex += imagesPerPage;
  if (currentImageIndex >= images.length) {
    isLastPage = true;
    loadMoreButton.style.display = "none";
  }
}

loadMoreButton.addEventListener("click", loadImages);