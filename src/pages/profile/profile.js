import Handlebars from 'handlebars';
import { Profile } from '../../templates/Profile/Profile.tmpl';

const user = {
    name: "Иван",
    lastname: "Иванов", 
    nickname: "Иван",
    mail: "pochta@yandex.ru",
    login: "ivanivanov",
    phone: "+7 (909) 967 30 30",
    image: "static/images/basic-img.png",
};

const tamplate = Handlebars.compile(Profile);
const htmlContent = tamplate(user);
const pageContent = document.getElementById('page-content');

pageContent.innerHTML = htmlContent;
