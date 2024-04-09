import {renderPictures} from './render-pictures.js';
import './picture-upload-form';
import {api} from './api.js';
import {showGetPicturesError} from './notifications.js';
import {renderPicturesFilter} from './filters.js';


api.getPictures()
  .then((pictures) => {
    renderPictures(pictures);
    renderPicturesFilter(pictures);
  })
  .catch(() => showGetPicturesError());


