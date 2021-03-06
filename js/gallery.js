import gallery from "./arraygallery.js"
import refs from './refs.js'
import createGalleryItem from './gallery-items.js'

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const galleryItems = createGalleryItem(gallery);

refs.galleryContainer.insertAdjacentHTML('beforeend', galleryItems);

// Открытие модального окна по клику на элементе галереи.
refs.galleryContainer.addEventListener('click', onModalOpen);

// закрытие модального окна по клику на кнопку
refs.closeModalBtn.addEventListener('click', onCloseModal);

// по нажатию на lightbox__overlay
refs.overlayEl.addEventListener('click', onCloseModal);

// по нажатию на стрелки "влево","вправо" - меняются картинки
window.addEventListener('keydown', onModalChangeImgByKeyDown)


function modalImageAtr(src, alt) {
  refs.modalImageEl.src = src;
  refs.modalImageEl.alt = alt;
}

function onModalOpen(event) {
  event.preventDefault();
  window.addEventListener('keydown', onCloseModal);
  
  const isGalleryImage = event.target.classList.contains('gallery__image');
  if (!isGalleryImage) {
    return;
}
  refs.lightboxModal.classList.add('is-open');
  
  modalImageAtr(event.target.dataset.source, event.target.alt);

}



function onCloseModal(event) {
    window.removeEventListener('keydown', onCloseModal);
    if (event.currentTarget === event.target || event.code === 'Escape') {
        refs.lightboxModal.classList.remove('is-open');
        modalImageAtr('', '')
    }
}

// function onOverlayClick(event) {
//   console.log(event.currentTarget);
//     console.log(event.target);
//    if (event.currentTarget === event.target) {
//         onCloseModal();
//     }
//  }

// // по нажатию клавиши ESC
// function onEscKeyPress(event) {
    
//     console.log(event.code);
//     if (event.code === 'Escape') {
//         onCloseModal();
//     }
// }


const arrayWithImgRefs = gallery.map(item => item.original)
const arrayWithAltRefs = gallery.map(item => item.description)
  

function onModalChangeImgByKeyDown(event) {
    
    let indexOfImg = arrayWithImgRefs.indexOf(refs.modalImageEl.src);
    let indexOfIAlt = indexOfImg
    const indexOfLastElement = arrayWithImgRefs.length-1
  if (event.code === 'ArrowRight') {
    if (indexOfImg < indexOfLastElement) {
      indexOfImg += 1;
      indexOfIAlt += 1;
      
      modalImageAtr(arrayWithImgRefs[indexOfImg], arrayWithAltRefs[indexOfImg]);
    }
    else if (indexOfImg = indexOfLastElement) {
      
      modalImageAtr(arrayWithImgRefs[0], arrayWithAltRefs[0]);
    }
  }
  else if (event.code === 'ArrowLeft') {
    if (indexOfImg > 0) {
      indexOfImg -= 1;
      indexOfIAlt -= 1;
      
      modalImageAtr(arrayWithImgRefs[indexOfImg], arrayWithAltRefs[indexOfImg]);
    }
    else {
      
      modalImageAtr(arrayWithImgRefs[indexOfLastElement], arrayWithAltRefs[indexOfLastElement]);
    }
    }
  }
