import Handlebars from 'handlebars';
import Block from '../../utils/block';
import {ProfileFieldTmpl} from "../../templates/Profile/profileField.tmpl";

class ProfileField extends Block{
    constructor(props: { name: string; data: string;}) {
        super('div', props);
    }

    render(){
        const templateBtn = Handlebars.compile(ProfileFieldTmpl);
        return templateBtn(this.props);
    }
}

export default ProfileField;