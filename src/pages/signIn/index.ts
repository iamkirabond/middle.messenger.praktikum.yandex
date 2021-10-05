import SignInPage from './signIn';

export function SignInWrapper(){
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
      link: '/signUp',
    },
  };

  return new SignInPage(data);

}
