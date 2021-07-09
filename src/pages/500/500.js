import Handlebars from 'handlebars';
import { Error } from '../../templates/Error/Error.tmpl';


const data = {
    error: '500',
    description: 'Мы уже фиксим',
};

const tamplate = Handlebars.compile(Error);
const htmlContent = tamplate(data);

const pageContent = document.getElementById('page-content');

pageContent.innerHTML = htmlContent;
