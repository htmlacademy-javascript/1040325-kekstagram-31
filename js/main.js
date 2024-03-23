import {createUserPicture} from './data.js';
import {renderPictures} from './renderPictures.js';

const picturesNumber = 25;

const pictures = Array.from({ length: picturesNumber }, createUserPicture);

renderPictures(pictures);
