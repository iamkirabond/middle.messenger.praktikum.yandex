import SignInPage from './signIn';

export default function SignInWrapper() {
  const data = {
    title: 'Вход',
    login: {
      type: 'text',
      name: 'Логин',
      prefix: 'signin',
      dataType: 'login',
    },
    password: {
      type: 'password',
      name: 'Пароль',
      prefix: 'signin',
      dataType: 'password',
    },
    signInBtn: {
      text: 'Авторизоваться',
      type: 'submit',
      style: 'signin-btn',
      id: 'signin-btn',
    },
    signUpBtn: {
      text: 'Нет аккаунта?',
      type: 'submit',
      style: 'signup-btn',
      id: 'signup-btn',
    },
  };

  return new SignInPage(data);
}
