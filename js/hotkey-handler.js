const handlers = {};

document.addEventListener('keydown', (evt) => {
  const key = evt.key;

  if(handlers[key]?.length) {
    handlers[key].at(-1)(evt);
  }
});

function createHotkey({key, handler}) {
  if(handlers[key]) {
    handlers[key].push(handler);
  } else {
    handlers[key] = [handler];
  }

  return {
    destroy: () => {
      handlers[key] = handlers[key].filter((h) => handler !== h);
    }
  };
}

export {createHotkey};
