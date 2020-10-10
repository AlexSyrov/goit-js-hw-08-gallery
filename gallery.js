import imgs from './gallery-items.js';

const listContainer = document.querySelector('.js-gallery');
const cardImagesGallery = createImagesGallery(imgs);

listContainer.insertAdjacentHTML('beforeend', cardImagesGallery);
listContainer.addEventListener('click', onGalleryContainerClick);

function createImagesGallery() {
  return imgs
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

function stopDefAction(evt) {
  evt.preventDefault();
}

const lightboxButtonEl = document.querySelector(".lightbox__button");
const lightboxImageEl = document.querySelector(".lightbox__image");

function onGalleryContainerClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  } else {
    document.querySelector('.lightbox.js-lightbox').classList.add('is-open');
    lightboxImageEl.src = evt.target.dataset.source;
    lightboxImageEl.alt = evt.target.alt;
    lightboxButtonEl.addEventListener('click', onCloseModal);
  }
  stopDefAction(evt);
  console.log(evt.target.dataset.source);
}

function onCloseModal() {
  document.querySelector('.lightbox.js-lightbox').classList.remove('is-open');
}


