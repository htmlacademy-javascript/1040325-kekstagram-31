import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');

closeButton.addEventListener('click', hideBigPicture);


function renderCommentsList(comments) {
  commentsList.innerHTML = '';

  for (let i = 0; i < comments.length; i++) {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = comments[i].avatar;
    newComment.querySelector('.social__picture').alt = comments[i].name;
    newComment.querySelector('.social__text').textContent = comments[i].message;
    commentsList.appendChild(newComment);
  }
}

function updateBigPictureElement(picture) {
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.social__comment-total-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  renderCommentsList(picture.comments);
}

function showBigPicture(picture) {
  updateBigPictureElement(picture);
  document.querySelector('body').classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      hideBigPicture();
    }
  });
}

function hideBigPicture() {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

export {showBigPicture};
