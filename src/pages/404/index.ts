import { render } from '../../utils/renderDOM';
import Error404 from './404';



const data = {
    error: '404',
    description: 'Не туда попали',
};

const page = new Error404(data);

render('#page-content', page);