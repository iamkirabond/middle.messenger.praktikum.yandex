import { render } from '../../utils/renderDOM';
import Error500 from './500';



const data = {
    error: '500',
    description: 'Мы уже фиксим',
};

const page = new Error500(data);

render('#page-content', page);