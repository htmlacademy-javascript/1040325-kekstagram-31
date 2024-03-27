import { isEscapeKey } from '../util.js';
import { picturePreviewEditing } from './picturePreviewEditing.js';
import { createFormValidator } from './createFormValidator.js';

const formElement = document.querySelector('.img-upload__form');
const imgUploadInput = formElement.querySelector('.img-upload__input');
const imgEditingForm = formElement.querySelector('.img-upload__overlay');
const cancelButton = formElement.querySelector('.img-upload__cancel');
const addDescriptionForm = formElement.querySelector('.img-upload__text');

const validator = createFormValidator(formElement);

picturePreviewEditing(formElement);

formElement.addEventListener('submit', (evt) => {
  if(!validator.validate()) {
    evt.preventDefault();
  }
});

function escapeHandler(evt) {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    const isInputFocused = Array.from(
      addDescriptionForm.querySelectorAll('input,textarea')
    ).every((elem) => document.activeElement !== elem);

    if(isInputFocused) {
      closePictureUploadForm();
    }
  }
}

function openPictureUploadForm() {
  imgEditingForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', escapeHandler);
}

function closePictureUploadForm() {
  imgUploadInput.value = '';
  imgEditingForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeHandler);
}

imgUploadInput.addEventListener('change', () => openPictureUploadForm());
cancelButton.addEventListener('click', () => closePictureUploadForm());

