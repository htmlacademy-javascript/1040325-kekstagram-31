import {isEscapeKey} from './util.js';
import './pristineValidate.js';

const formElement = document.querySelector('.img-upload__form');
const imgUploadInput = formElement.querySelector('.img-upload__input');
const imgEditingForm = formElement.querySelector('.img-upload__overlay');
const cancelButton = formElement.querySelector('.img-upload__cancel');
const hashtagInput = formElement.querySelector('.text__hashtags');
const commentInput = formElement.querySelector('.text__description');
const addDescriptionForm = formElement.querySelector('.img-upload__text');

commentInput.dataset.pristineMaxlength = '140';
commentInput.dataset.pristineMaxlengthMessage = 'Максимальная длина комментария 140 символов';
hashtagInput.dataset.pristineMaxWordNumber = '5';
hashtagInput.dataset.pristineUnicArrayElem = 'Хэштеги';
hashtagInput.dataset.pristinePattern = /^(#[a-zа-яё0-9]{1,19} ?)*$/i;
hashtagInput.dataset.pristinePatternMessage = 'Некоректное значение хэштега';

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
});

formElement.addEventListener('submit', (evt) => {
  if(!pristine.validate()) {
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
