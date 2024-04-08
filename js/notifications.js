import { createHotkey } from './hotkeyHandler.js';

function showGetPicturesError() {
  const errorElementTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
  const errorElement = errorElementTemplate.cloneNode(true);

  document.body.appendChild(errorElement);

  setTimeout(() => errorElement.remove(), 5000);
}

function showUploadFormNotification(result) {
  const postMessageTemplate = document.querySelector(`#${result}`).content.querySelector(`.${result}`);
  const postMessage = postMessageTemplate.cloneNode(true);
  const button = postMessage.querySelector(`.${result}__button`);
  const hotkey = createHotkey({
    key: 'Escape',
    handler: onclose,
  });

  function onclose() {
    postMessage.remove();
    document.removeEventListener('click', clickOutOfFormHandler);
    hotkey.destroy();
  }

  function clickOutOfFormHandler(evt) {
    if(!evt.target.closest(`.${result}__inner`)) {
      onclose();
    }
  }

  button.addEventListener('click', onclose);
  document.addEventListener('click', clickOutOfFormHandler);

  document.body.appendChild(postMessage);
}

export {showGetPicturesError, showUploadFormNotification};
