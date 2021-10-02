import Profile from './profile';

const user = {
  name: {
    name: 'Имя',
    data: 'Иван',
  },
  lastname: {
    name: 'Фамилия',
    data: 'Иван',
  },
  nickname: {
    name: 'Имя в чате',
    data: 'Иван',
  },
  mail: {
    name: 'Почта',
    data: 'pochta@yandex.ru',
  },
  login: {
    name: 'Логин',
    data: 'ivanivanov',
  },
  phone: {
    name: 'Телефон',
    data: '+7 (909) 967 30 30',
  },
  image: 'static/images/basic-img.png',
};

const page = new Profile(user);

const pageContent = document.getElementById('page-content');
pageContent.innerHTML = page.render();
