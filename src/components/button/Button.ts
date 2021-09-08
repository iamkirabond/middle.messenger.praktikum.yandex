import Handlebars from 'handlebars';
import { buttonTmpl } from "../../templates/button/button.tmpl";


const templateBtn = Handlebars.compile(buttonTmpl)
const button = function (
    props: { text: string; type: string; style?: string; link?: string,}){
    props.style = props.style ? `button ${props.style}` : '';
    return templateBtn(props);
}

export { button };