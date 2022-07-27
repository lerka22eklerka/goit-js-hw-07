import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const imRef = document.querySelector("a");

const galleryItemsCreate = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
  )
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", galleryItemsCreate);
galleryRef.addEventListener('click', handleItemClick);

function handleItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    const imageMove = instance.element().querySelector('a');

    imRef.addEventListener('click', instance.close);
    window.addEventListener(`keydown`, onEscKeyPress);
    
    function onEscKeyPress(event) {
    if (event.code !== `Escape`) {
      return;
    }
    instance.close();
  }
    instance.show();
}
