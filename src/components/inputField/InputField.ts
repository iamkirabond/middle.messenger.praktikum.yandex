import Handlebars from 'handlebars';
import { InputFieldTmpl } from "../../templates/inputField/inputField.tmpl";
import Block from '../../utils/block'

const templateBtn = Handlebars.compile(InputFieldTmpl);

class InputField extends Block{

    constructor(props: { prefix: string; type: string; name: string; warning?: string;}) {
        super('div', props);
    }
    render(){
        return templateBtn(this.props);
    }
}

export default InputField;