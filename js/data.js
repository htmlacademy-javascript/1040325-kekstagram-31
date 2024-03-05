//модуль создает данные
import { descriptions, names, messages } from './constants.js';
import {getRandomNumber, getRandomItem, getNumberGenerator} from './util.js';

const getPhotoId = getNumberGenerator();
const getCommentId = getNumberGenerator();

function createNewComment() {
  const message = [getRandomItem(messages)];

  if (Math.random() > 0.5) {
    message.push(getRandomItem(messages));
  }

  return {
    id: getCommentId(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: message.join(' '),
    name: getRandomItem(names),
  };
}

function createUserPhoto() {
  const id = getPhotoId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: descriptions[id - 1],
    likes: getRandomNumber(15, 200),
    comments: Array.from({ length: getRandomNumber(0, 30) }, createNewComment),
  };
}

export {createUserPhoto};
