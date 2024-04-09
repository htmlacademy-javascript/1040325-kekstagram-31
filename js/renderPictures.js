import { showBigPicture } from './showBigPicture';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picuresListFragment = document.createDocumentFragment();
const filters = document.querySelector('.img-filters');

function clearPicturesList() {
  const pictureElements = document.querySelector('.pictures').querySelectorAll('.picture');
  if(pictureElements.length) {
    pictureElements.forEach((pic) => {
      pic.remove();
    });
  }
}

function renderPictures(pictures) {
  clearPicturesList();
  pictures.forEach((picture) => {
    const { url, description, likes, comments } = picture;
    const pictureElement = pictureTemplate.cloneNode(true);

    const pictureImg = pictureElement.querySelector('.picture__img');
    const pictureInfo = pictureElement.querySelector('.picture__info');
    const pictureComment = pictureInfo.querySelector('.picture__comments');
    const pictureLikes = pictureInfo.querySelector('.picture__likes');

    pictureImg.src = url;
    pictureImg.alt = description;
    pictureComment.textContent = comments.length;
    pictureLikes.textContent = likes;

    pictureElement.addEventListener('click', () => showBigPicture(picture));

    picuresListFragment.appendChild(pictureElement);
  });

  picturesList.appendChild(picuresListFragment);
  filters.classList.remove('img-filters--inactive');
}

export {renderPictures};
