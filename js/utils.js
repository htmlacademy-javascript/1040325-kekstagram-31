function getRandomArrayElement(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomArrayElement, debounce};
