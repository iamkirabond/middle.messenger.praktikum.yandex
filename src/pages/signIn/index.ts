import SignInPage from "./signIn";

const data = {
    login: {
        type: 'text',
        name: 'Логин',
        prefix: 'signin',
    },
    password: {
        type: 'password',
        name: 'Пароль',
        prefix: 'signin',
    },
    signInBtn: {
        text: `Авторизоваться`,
        type: 'submit',
        style: `signin-btn`,
    },
    signUpBtn: {
        text: `Нет аккаунта?`,
        type: 'submit',
        style: `signup-btn`,
        link: '/signUp',
    },
};

const page = new SignInPage(data);

const pageContent = document.getElementById('page-content');
pageContent.innerHTML = page.render();