import Handlebars from 'handlebars';
import { SignInForm } from '../../templates/Authorization/SignIn.tmpl';
import Block from "../../utils/block";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import * as events from "events";



class SignInPage extends Block{
    constructor(props) {
        super('div', {
            ...props,
            events: {
                click: event => this.clickHandler(event),
            }
        })
    }

    clickHandler (event: Event){
        event.preventDefault();
        alert('here the click')
    }

    render() {
        const templateForm = Handlebars.compile(SignInForm);
        const data = this.props;
        return templateForm({
            login: new InputField(data.login).render(),
            password: new InputField(data.password).render(),
            signInBtn: new Button(data.signInBtn).render(),
            signUpBtn: new Button(data.signUpBtn).render(),
        });
    }
}

export default SignInPage;
