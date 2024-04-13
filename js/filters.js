import { getRandomArrayElement } from './utils.js';
import { debounce } from './utils.js';
import { renderPictures } from './render-pictures.js';

const filterDefaultButtton = document.getElementById('filter-default');
const filterRandomButtton = document.getElementById('filter-random');
const filterDiscussedButtton = document.getElementById('filter-discussed');
const RERENDER_DELAY = 500;

function getRandomPictures(pictures) {
  const randomPictures = pictures.slice();
  for (let i = 0; i < randomPictures.length; i++) {
    const id = getRandomArrayElement(0, randomPictures.length - 1);
    [randomPictures[i], randomPictures[id]] = [randomPictures[id], randomPictures[i]];
  }
  return randomPictures.slice(0, 10);
}

function getPicturesRangedByComments(pictures) {
  const sortedPictures = pictures.slice().sort((a, b) => b.comments.length - a.comments.length);
  return sortedPictures;
}

function addActiveClass(evt) {
  const buttons = document.querySelectorAll('.img-filters__button');
  buttons.forEach((button) => evt.target === button ? button.classList.add('img-filters__button--active') : button.classList.remove('img-filters__button--active'));
}

function filterPictures(pictures, type) {
  if (type === 'filter-random') {
    return getRandomPictures(pictures);
  }

  if (type === 'filter-discussed') {
    return getPicturesRangedByComments(pictures);
  }

  return pictures;
}

function renderPicturesFilter(pictures) {
  const filter = debounce((filterType) => {
    renderPictures(filterPictures(pictures, filterType));
  }, RERENDER_DELAY);

  [filterDefaultButtton, filterRandomButtton, filterDiscussedButtton]
    .forEach((button) => {
      button.addEventListener('click', (event) => {
        filter(event.currentTarget.id);
        addActiveClass(event);
      });
    });
}

export {renderPicturesFilter};
