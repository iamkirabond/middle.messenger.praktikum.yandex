import Handlebars from 'handlebars';
import { Error } from '../../templates/Error/Error.tmpl';


const data = {
    error: '404',
    description: 'Не туда попали',
};

const template = Handlebars.compile(Error);
const htmlContent = template(data);

const pageContent = document.getElementById('page-content')!;

pageContent.innerHTML = htmlContent;
