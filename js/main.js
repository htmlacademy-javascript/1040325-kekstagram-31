import {createUserPhoto} from './data.js';

const photosNumber = 25;

const photos = Array.from({ length: photosNumber }, createUserPhoto);

console.log(photos); //eslint-disable-line
