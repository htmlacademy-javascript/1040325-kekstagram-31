const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data/',
  SEND_DATA: '/',
};

function getPictures() {
  return fetch(`${BASE_URL}${Route.GET_DATA}`).then((response) => {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Не удалось получить данные');
  }
  );
}

function postForm(form) {
  return fetch(
    `${BASE_URL}${Route.SEND_DATA}`,
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
