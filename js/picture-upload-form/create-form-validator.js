function validateMaxWordNumber(value, max) {
  return value.trim().split(/ +/).length <= max;
}

function validateRepeatHashtag(value) {
  const valueLowerCase = value.toLowerCase();
  return valueLowerCase.trim().split(/ +/).every((elem, idx, array) => array.indexOf(elem) === idx);
}

const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
function validateCorrectHashtags(value) {
  return value.split(' ').filter(Boolean).every((str) => HASHTAG_REGEX.test(str));
}

Pristine.addValidator('max-word-number', validateMaxWordNumber);
Pristine.addValidator('unic-array-elem', validateRepeatHashtag);
Pristine.addValidator('correct-hashtags', validateCorrectHashtags, 'Некоректное значение хэштега');

function createFormValidator(form) {
  const hashtagInput = form.querySelector('.text__hashtags');
  const commentInput = form.querySelector('.text__description');
  commentInput.dataset.pristineMaxlength = '140';
  commentInput.dataset.pristineMaxlengthMessage = 'Максимальная длина комментария 140 символов';
  hashtagInput.dataset.pristineMaxWordNumber = '5';
  hashtagInput.dataset.pristineMaxWordNumberMessage = 'Количество слов должно быть меньше 5';
  hashtagInput.dataset.pristineUnicArrayElem = 'Хэштеги';
  hashtagInput.dataset.pristineUnicArrayElemMessage = 'Хэштеги должы быть уникальными';
  hashtagInput.dataset.pristineCorrectHashtags = true;

  return new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--error',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'div',
  });
}

export { createFormValidator };
