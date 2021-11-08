import { SignUpForm } from '../../templates/Authorization/SignUp.tmpl';
import Block from "../../utils/block/block";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import { validationForm } from "../../utils/validation";
import router from '../index';
import UserAuthController from '../../controllers/user-auth';
import './signUp.scss';
const Handlebars = require("handlebars");

const signUpInstance = new UserAuthController;

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

    collectInput(){
        let inputs = document.querySelectorAll('input');
        let data = {};
        inputs.forEach((input) => {
            data[input.dataset.type] = input.value;
        });
        return data;
    }

    clickHandler (event: Event){
        if(event.target){
            event.preventDefault();
            if((event.target as HTMLTextAreaElement).id === 'signup-btn'){
                let inputs = document.querySelectorAll('.input-block input');
                inputs.forEach((input) => {
                    console.log((input as HTMLTextAreaElement).dataset.type, (input as HTMLTextAreaElement).value);
                    let isValid = validationForm((input as HTMLTextAreaElement).value, (input as HTMLTextAreaElement).dataset.type);
                    if (!isValid){
                        input.classList.add('input-error');
                    }
                    else{
                        input.classList.remove('input-error');
                    }
                });
                if (document.querySelectorAll('.input-error').length == 0){
                    let inputs = document.querySelectorAll('.input-block input');

                    if((inputs[inputs.length-1] as HTMLTextAreaElement).value === (inputs[inputs.length-2] as HTMLTextAreaElement).value){
                        signUpInstance.signup(this.collectInput());    
                    }
                    else{
                        alert('Passwords not match!');
                    }
                }
            }
            else if((event.target as HTMLTextAreaElement).id === 'signin-btn'){
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
