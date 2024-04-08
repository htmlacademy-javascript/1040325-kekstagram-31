import {renderPictures} from './renderPictures.js';
import './pictureUploadForm';
import {api} from './api.js';
import {showGetPicturesError} from './notifications.js';

api.getPictures()
  .then((pictures) => renderPictures(pictures))
  .catch(() => showGetPicturesError());
