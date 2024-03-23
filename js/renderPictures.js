import { showBigPicture } from './showFullSizePicture';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picuresListFragment = document.createDocumentFragment();

function renderPictures(pictures) {
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
}

export {renderPictures};
