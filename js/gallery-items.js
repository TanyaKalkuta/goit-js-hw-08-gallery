export default


// Создание и рендер разметки по массиву данных и предоставленному шаблону.

//console.log(createGalleryItem(gallery));

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