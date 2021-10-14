// @ts-ignore
import Handlebars from 'handlebars';
import { buttonTmpl } from "../../templates/button/button.tmpl";
import Block from '../../utils/block/block'

interface ButtonProps {
    text: string;
    type: string;
    style?: string;
    link?: string;
    id?: string;
}
const templateBtn = Handlebars.compile(buttonTmpl);

class Button extends Block{
    constructor(props: ButtonProps) {
        super('div', props);
    }

    render(){
        return templateBtn(this.props);
    }
}

export default Button;