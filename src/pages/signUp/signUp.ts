import Handlebars from 'handlebars';
import { SignUpForm } from '../../templates/Authorization/SignUp.tmpl';
import Block from "../../utils/block";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";


class SignUpPage extends Block{
    constructor(props) {
        super('div', props);
    }

    render() {
        const templateForm = Handlebars.compile(SignUpForm);
        const data = this.props;

        return templateForm({
            title: data.title,
            mail: new InputField(data.mail).render(),
            login: new InputField(data.login).render(),
            name: new InputField(data.name).render(),
            lastname: new InputField(data.lastname).render(),
            phone: new InputField(data.phone).render(),
            password: new InputField(data.password).render(),
            passwordDub: new InputField(data.passwordDub).render(),
            signInBtn: new Button(data.signInBtn).render(),
            signUpBtn: new Button(data.signUpBtn).render(),
        });
    }
}

export default SignUpPage;
