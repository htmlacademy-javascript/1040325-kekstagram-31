function validateMaxWordNumber(value, max) {
  return value.trim().split(' ').length <= max;
}

function validateRepeatHashtag(value) {
  const valueLowerCase = value.toLowerCase();
  return valueLowerCase.split(' ').every((elem, idx, array) => array.indexOf(elem) === idx);
}

Pristine.addValidator('max-word-number', validateMaxWordNumber, 'Количество слов должно быть меньше ${1}'); //eslint-disable-line
Pristine.addValidator('unic-array-elem', validateRepeatHashtag, '${1} должы быть уникальными'); //eslint-disable-line


function createFormValidator(form) {
  const hashtagInput = form.querySelector('.text__hashtags');
  const commentInput = form.querySelector('.text__description');
  commentInput.dataset.pristineMaxlength = '140';
  commentInput.dataset.pristineMaxlengthMessage = 'Максимальная длина комментария 140 символов';
  hashtagInput.dataset.pristineMaxWordNumber = '5';
  hashtagInput.dataset.pristineUnicArrayElem = 'Хэштеги';
  hashtagInput.dataset.pristinePattern = /^(#[a-zа-яё0-9]{1,19} ?)*$/i;
  hashtagInput.dataset.pristinePatternMessage = 'Некоректное значение хэштега';

  return new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--error',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'div',
  });
}

export { createFormValidator };
