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



const lightboxButtonEl = document.querySelector(".lightbox__button");
const lightboxImageEl = document.querySelector(".lightbox__image");
const lightbox = document.querySelector('.js-lightbox');

function onGalleryContainerClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  } else {
    lightboxImageEl.src = evt.target.dataset.source;
    lightboxImageEl.alt = evt.target.alt;
  }
  workWithModal();
  stopDefAction(evt);
  console.log(evt.target.dataset.source);
}

function stopDefAction(evt) {
  evt.preventDefault();
}

function workWithModal() {
  lightbox.classList.add('is-open');
  lightboxButtonEl.addEventListener('click', onCloseModal);
}

function onCloseModal() {
  lightbox.classList.remove('is-open');
}


