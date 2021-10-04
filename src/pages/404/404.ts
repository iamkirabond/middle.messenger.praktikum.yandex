import Handlebars from 'handlebars';
import Block from "../../utils/block";
import {ErrorTmpl}  from '../../templates/Error/Error.tmpl';


const templateForm = Handlebars.compile(ErrorTmpl);

class Error404 extends Block{
    constructor(props) {
        super('div', props)
    }


    render() {
        const data = this.props;
        return templateForm({
            error: data.error,
            description: data.description,            
        });
    }
}

export default Error404;
