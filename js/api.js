function getPictures() {
  return fetch('https://31.javascript.htmlacademy.pro/kekstagram/data/').then((response) => {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Не удалось получить данные');
  }
  );
}

function postForm(form) {
  return fetch(
    'https://31.javascript.htmlacademy.pro/kekstagram/',
    {
      method: 'POST',
      body: form,
    },
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Не удалось отправить форму');
  });
}

const api = {
  getPictures,
  postForm
};

export { api };
