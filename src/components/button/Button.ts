import Handlebars from 'handlebars';
import { buttonTmpl } from "../../templates/button/button.tmpl";
import Block from '../../utils/block'


class Button extends Block{
    constructor(props: { text: string; type: string; style?: string; link?: string;}) {
        super('div', props);
    }


    render(){
        const templateBtn = Handlebars.compile(buttonTmpl);
        return templateBtn(this.props);
    }
}

export default Button;