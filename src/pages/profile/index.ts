import Profile from './profile';

export function ProfileWrapper(){
  const user = {
    name: {
      name: 'Имя',
      data: 'Иван',
      dataType: 'first_name'
    },
    lastname: {
      name: 'Фамилия',
      data: 'Иван',
      dataType: 'second_name'
    },
    nickname: {
      name: 'Имя в чате',
      data: 'Иван',
      dataType: 'login'
    },
    mail: {
      name: 'Почта',
      data: 'pochta@yandex.ru',
      dataType: 'email'
    },
    login: {
      name: 'Логин',
      data: 'ivanivanov',
      dataType: 'login'
    },
    phone: {
      name: 'Телефон',
      data: '+79099673030',
      dataType: 'phone'
    },
    image: 'static/images/basic-img.png',
  };

  return new Profile(user);
}
