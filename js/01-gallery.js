import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".js-gallery");

const markup = galleryItems
  .map(({ preview, description }, idx) => `<li class="gallery__item">
    <img class="gallery__image" data-id="${idx}" src="${preview}" alt="${description}">
  </li>`
  ).join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", handlerClick);

function handlerClick(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }

  basicLightbox.create(`<img src="${galleryItems[evt.target.dataset.id].original}" alt="">`)
    .show();
}
