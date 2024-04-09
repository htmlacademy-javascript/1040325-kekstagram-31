import {renderPictures} from './renderPictures.js';
import './pictureUploadForm';
import {api} from './api.js';
import {showGetPicturesError} from './notifications.js';
import {renderPicturesFilter} from './filters.js';


api.getPictures()
  .then((pictures) => {
    renderPictures(pictures);
    renderPicturesFilter(pictures);
  })
  .catch(() => showGetPicturesError());


