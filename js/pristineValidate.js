function validateMaxWordNumber(value, max) {
  return value.trim().split(' ').length <= max;
}

function validateRepeatHashtag(value) {
  return value.split(' ').every((elem, idx, array) => array.indexOf(elem) === idx);
}

Pristine.addValidator('max-word-number', validateMaxWordNumber, 'Количество слов должно быть меньше ${1}'); //eslint-disable-line
Pristine.addValidator('unic-array-elem', validateRepeatHashtag, '${1} должы быть уникальными'); //eslint-disable-line

