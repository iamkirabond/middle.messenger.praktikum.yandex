import Handlebars from 'handlebars';
import { SignUpForm } from '../../templates/Authorization/SignUp.tmpl';
import Block from "../../utils/block";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import {validationForm} from "../../utils/validation";
import './signUp.scss';
import Router from '../../utils/router';

const router = new Router('#page-content');


class SignUp extends Block{
    constructor(props) {
        super('div', {...props,
            events: {
                click: event => this.clickHandler(event),
                focusout: event => this.blurNow(event),
            }});
    }

    blurNow(event) {
        if(event.target.tagName === 'INPUT'){
            let isValid = validationForm(event.target.value, event.target.dataset.type);
            if (!isValid){
                event.target.classList.add('input-error');
            }
            else{
                event.target.classList.remove('input-error');
            }
        }
    }


    clickHandler (event: Event){
        if(event.target){
            event.preventDefault();
            if(event.target.id === 'signup-btn'){
                let inputs = document.querySelectorAll('input');
                inputs.forEach((input) => {
                    console.log(input.dataset.type, input.value)
                    let isValid = validationForm(input.value, input.dataset.type);
                    if (!isValid){
                        input.classList.add('input-error');
                    }
                    else{
                        input.classList.remove('input-error');
                        router.go('/messenger');
                    }
                });
            }
            else if(event.target.id === 'signin-btn'){
                router.go('/');
            }

        }
    }

    render() {
        const templateForm = Handlebars.compile(SignUpForm);
        const data = this.props;

        return templateForm({
            title: data.title,
            email: new InputField(data.email).render(),
            login: new InputField(data.login).render(),
            first_name: new InputField(data.name).render(),
            second_name: new InputField(data.lastName).render(),
            phone: new InputField(data.phone).render(),
            password: new InputField(data.password).render(),
            passwordDup: new InputField(data.passwordDup).render(),
            signUpBtn: new Button(data.signUpBtn).render(),
            signInBtn: new Button(data.signInBtn).render(),
        });
    }
}

export default SignUp;
