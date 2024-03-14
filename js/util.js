function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumberGenerator() {
  let counter = 1;

  return () => counter++;
}

function getRandomItem(arr) {
  return arr[getRandomNumber(0, arr.length - 1)];
}

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomNumber, getRandomItem, getNumberGenerator, isEscapeKey};
