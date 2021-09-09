import SignUpPage from "./signUp";

const data = {
    title: 'Регистрация',
    login: {
        type: 'text',
        name: 'Логин',
        prefix: 'signup'
    },
    password: {
        type: 'text',
        name: 'Пароль',
        prefix: 'signup'
    },
    passwordDup: {
        type: 'text',
        name: 'Пароль (ещё раз)',
        prefix: 'signup'
    },
    mail: {
        type: 'text',
        name: 'Почта',
        prefix: 'signup'
    },
    name: {
        type: 'text',
        name: 'Имя',
        prefix: 'signup'
    },
    lastName: {
        type: 'text',
        name: 'Фамилия',
        prefix: 'signup'
    },
    phone: {
        type: 'text',
        name: 'Телефон',
        prefix: 'signup'
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

const page = new SignUpPage(data);

const pageContent = document.getElementById('page-content');
pageContent.innerHTML = page.render();