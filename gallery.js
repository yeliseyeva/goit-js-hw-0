import galleryItems from './app.js'

const galleryList = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');

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

    lightbox.classList.add('is-open');
    

})