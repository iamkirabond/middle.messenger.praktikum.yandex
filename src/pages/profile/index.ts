import Profile from './profile';


export function ProfileWrapper(){
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
      data: '+79099673030',
    },
    image: 'static/images/basic-img.png',
  };

  return new Profile(user);
}
