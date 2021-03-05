//export default
  const gallery = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
// Создание и рендер разметки по массиву данных и предоставленному шаблону.

console.log(createGalleryItem(gallery));
const galleryContainer = document.querySelector('.js-gallery');
const galleryItems = createGalleryItem(gallery);

galleryContainer.insertAdjacentHTML('beforeend', galleryItems);

function createGalleryItem(gallery) {
  return gallery.map(({preview, original, description})=> {
    return `
    <li class="gallery__item">
      <a
       class="gallery__link"
       href="${original}"
       >
         <img
           loading="lazy";
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
          />
      </a>
      </li>`;
  }).join('');
}

// оригинальное изображение картинки для модалки

const modalImageEl = document.querySelector('.lightbox__image')


// Открытие модального окна по клику на элементе галереи.

const lightboxModal = document.querySelector(".js-lightbox");

galleryContainer.addEventListener('click', onModalOpen);


function onModalOpen(event) {
  event.preventDefault();
  window.addEventListener('keydown', onEscKeyPress);
  
  
  const isGalleryImage = event.target.classList.contains('gallery__image');
  if (!isGalleryImage) {
    return;
}
  lightboxModal.classList.add('is-open');
  
  modalImageEl.src = event.target.dataset.source;
  modalImageEl.alt=event.target.alt;

}

// закрытие модального окна по клику на кнопку

const closeModalBtn=document.querySelector('[data-action="close-lightbox"]')
closeModalBtn.addEventListener('click', onCloseModal);

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  lightboxModal.classList.remove('is-open');
}
// по нажатию на lightbox__overlay

const overlayEl = document.querySelector('.lightbox__overlay');
overlayEl.addEventListener('click', onOverlayClick);

function onOverlayClick(event) {
  console.log(event.currentTarget);
    console.log(event.target);
   if (event.currentTarget === event.target) {
        onCloseModal();
    }
 }

// по нажатию клавиши ESC
function onEscKeyPress(event) {
    
    console.log(event.code);
    if (event.code === 'Escape') {
        onCloseModal();
    }
}


