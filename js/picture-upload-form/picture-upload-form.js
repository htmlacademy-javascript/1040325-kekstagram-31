import { picturePreviewEditing } from './picture-preview-editing.js';
import { createFormValidator } from './create-form-validator.js';
import { api } from '../api.js';
import { showUploadFormNotification } from '../notifications.js';
import { createHotkey } from '../hotkey-handler.js';
import './picture-upload.js';

const formElement = document.querySelector('.img-upload__form');
const imgUploadInput = formElement.querySelector('.img-upload__input');
const imgEditingForm = formElement.querySelector('.img-upload__overlay');
const cancelButton = formElement.querySelector('.img-upload__cancel');
const addDescriptionForm = formElement.querySelector('.img-upload__text');
const firstEffect = document.getElementById('effect-none');
const submitButton = formElement.querySelector('.img-upload__submit');


const validator = createFormValidator(formElement);

const resetSlider = picturePreviewEditing(formElement);

function resetForm() {
  resetSlider();
  formElement.reset();
}

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if(validator.validate()) {
    const formData = new FormData(evt.target);
    submitButton.disabled = true;
    api.postForm(formData)
      .then(() => {
        showUploadFormNotification('success');
        resetForm();
        closePictureUploadForm();
      })
      .catch(() => {
        showUploadFormNotification('error');
      })
      .finally(() => {
        submitButton.disabled = false;
      });
  }
});

function escapeHandler() {
  const isInputFocused = Array.from(
    addDescriptionForm.querySelectorAll('input,textarea')
  ).every((elem) => document.activeElement !== elem);

  if(isInputFocused) {
    closePictureUploadForm();
  }
}

let escHotkey;

function openPictureUploadForm() {
  imgEditingForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  escHotkey = createHotkey({
    key: 'Escape',
    handler: escapeHandler,
  });
  firstEffect.focus();
}

function closePictureUploadForm() {
  imgUploadInput.value = '';
  imgEditingForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetForm();
  escHotkey.destroy();
  validator.reset();
}

imgUploadInput.addEventListener('change', () => openPictureUploadForm());
cancelButton.addEventListener('click', () => closePictureUploadForm());

