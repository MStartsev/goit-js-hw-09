// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryName = 'gallery';
const galleryEl = document.querySelector(`.${galleryName}`);

const createGallery = ({ gallery, galleryName }) =>
  (gallery.innerHTML = galleryItems.reduce(
    (arr, { preview, original, description }) =>
      `${arr}\n
        <a class='${galleryName}__item ${galleryName}__link' href='${original}'>
            <img class='${galleryName}__image' src='${preview}' alt='${description}' width='320px'>
        </a>
    `,
    ''
  ));

createGallery({ gallery: galleryEl, galleryName: galleryName });

new SimpleLightbox('.gallery__item', {
  captionDelay: 250,
  captionsData: 'alt',
  fadeSpeed: 250,
  scrollZoom: false,
});
