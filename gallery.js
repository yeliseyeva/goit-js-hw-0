import galleryItems from './app.js'

const galleryList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const btnClose = document.querySelector('.lightbox__button')
const overlay = document.querySelector('.lightbox__overlay')

//Разметка

const createGalleryMarkUp = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" 
                    src="${preview}" 
                    data-source="${original}" 
                    alt="${description}"/>
                </a>
            </li>`
});

galleryList.insertAdjacentHTML('afterbegin', createGalleryMarkUp.join(''));

//Событие клика

galleryList.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    };
    
    const imageSource = event.target.dataset.source;
    const imageAlt = event.target.alt;

    lightbox.classList.add('is-open');

    lightboxImage.src = imageSource;
    lightboxImage.alt = imageAlt;
})

btnClose.addEventListener('click', (event) => {
    lightbox.classList.remove('is-open');
    lightboxImage.src = '';
    lightboxImage.alt = '';
})

overlay.addEventListener('click', event => {
    lightbox.classList.remove('is-open');
})

document.addEventListener('keydown', event => {
    if (lightbox.classList.contains('is-open')){
        if(event.key ===  'Escape'){
            lightbox.classList.remove('is-open');
        }
    }
})
