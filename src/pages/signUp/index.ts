import SignUpPage from './signUp';

export function SignUpWrapper(){
  const data = {
    title: 'Регистрация',
    login: {
      type: 'text',
      name: 'Логин',
      prefix: 'signup',
      dataType: 'login',
    },
    password: {
      type: 'password',
      name: 'Пароль',
      prefix: 'signup',
      dataType: 'password',
    },
    passwordDup: {
      type: 'password',
      name: 'Пароль (ещё раз)',
      prefix: 'signup',
      dataType: 'password',
    },
    email: {
      type: 'text',
      name: 'Почта',
      prefix: 'signup',
      dataType: 'email',
    },
    name: {
      type: 'text',
      name: 'Имя',
      prefix: 'signup',
      dataType: 'first_name',
    },
    lastName: {
      type: 'text',
      name: 'Фамилия',
      prefix: 'signup',
      dataType: 'second_name',
    },
    phone: {
      type: 'text',
      name: 'Телефон',
      prefix: 'signup',
      dataType: 'phone',
    },
    signUpBtn: {
      text: 'Зарегистрироваться',
      type: 'submit',
      style: 'signup-btn',
      id: 'signup-btn',
    },
    signInBtn: {
      text: 'Авторизоваться',
      type: 'submit',
      style: 'signin-btn',
      id: 'signin-btn',
    },
  };

  return new SignUpPage(data);

}
