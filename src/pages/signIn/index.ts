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
        id: 'signin-btn',
    },
    signUpBtn: {
        text: `Нет аккаунта?`,
        type: 'submit',
        style: `signup-btn`,
        link: '/signUp'
    },
};


let clickHandler = (event: Event) => {
    event.preventDefault();
    alert('hire')
}

const page = new SignInPage(data);

const pageContent = document.getElementById('page-content');
pageContent.innerHTML = page.render();

/*const signInForm = document.getElementById('signin-form');

if (signInForm) {
    signInForm.addEventListener('keydown', (event: Event) => {
        if (event.code === 'Enter') {
            event.preventDefault();
        }
    });
}*/