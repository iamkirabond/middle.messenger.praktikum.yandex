import Handlebars from 'handlebars';
import Error404 from './404';

export function Error404Wrapper(){
    const data = {
        error: '404',
        description: 'Не туда попали',
    };
    
    return new Error404(data);
}
