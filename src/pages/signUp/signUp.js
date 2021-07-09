import Handlebars from 'handlebars';
import { SignUp } from '../../templates/Authorization/SignUp.tmpl';


const data = {
    title: 'Регистрация',
    inputs: {
        login: "Логин",
        password:  "Пароль",
        passwordDup:  "Пароль (ещё раз)",
        mail: "Почта",
        name: "Имя",
        lastName: "Фамилия",
        phone: "Телефон"
    },       
    submitBtn: "Авторизоваться",
    returnBtn: "Нет аккаунта?"
};

const tamplate = Handlebars.compile(SignUp);
const htmlContent = tamplate(data);

const pageContent = document.getElementById('page-content');

pageContent.innerHTML = htmlContent;
