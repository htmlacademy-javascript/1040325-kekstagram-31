//модуль с вспомогательными функциями
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

export {getRandomNumber, getRandomItem, getNumberGenerator};
