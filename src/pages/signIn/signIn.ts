import Handlebars from 'handlebars';
import { SignIn } from '../../templates/Authorization/SignIn.tmpl';


const data = {
    title: 'Вход',
    inputs: {
        login: "Логин",
        password:  "Пароль"
    },       
    submitBtn: "Авторизоваться",
    returnBtn: "Нет аккаунта?"
};       


const tamplate = Handlebars.compile(SignIn);
const htmlContent = tamplate(data);

const pageContent = document.getElementById('page-content');

pageContent.innerHTML = htmlContent;
