import Handlebars from 'handlebars';
import { InputFieldTmpl } from "../../templates/inputField/inputField.tmpl";
import Block from '../../utils/block'

class InputField extends Block{
    constructor(props: { prefix: string; type: string; name: string; warning?: string;}) {
        super('div', props);
    }

    render(){
        const templateBtn = Handlebars.compile(InputFieldTmpl)
        return templateBtn(this.props);
    }
}

export default InputField;