import app from './app.js'

const createGalleryMarkUp = ({preview, original, description}) => {
    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
                </a>
            </li>`
}

// console.log(createGalleryMarkUp)

const galleryList = document.querySelector('.js-gallery');
// console.log(galleryList)

galleryList.insertAdjacentHTML = createGalleryMarkUp;
console.log(galleryList.insertAdjacentHTML)