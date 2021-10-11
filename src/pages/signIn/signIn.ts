import Handlebars from 'handlebars';
import { SignInForm } from '../../templates/Authorization/SignIn.tmpl';
import Block from "../../utils/block";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import { validationForm } from "../../utils/validation";
import router from '../index';
import UserAuthController from '../../controllers/user-auth';
import './signIn.scss';

const signInInstance = new UserAuthController();

class SignInPage extends Block{
    constructor(props) {
        super('div', {
            ...props,
            events: {
                click: event => this.clickHandler(event),
                focusout: event => this.blurNow(event),
            }
        })
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

    componentDidMount(){
        signInInstance.getUserInfo().then(()=>{router.go('/messenger')})
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
            if(event.target.id === 'signin-btn'){
                let inputs = document.querySelectorAll('input');
                inputs.forEach((input) => {
                   let isValid = validationForm(input.value, input.dataset.type);
                   if (!isValid){
                       input.classList.add('input-error');
                   }
                   else{
                       input.classList.remove('input-error');
                   }
               });
                if (document.querySelectorAll('.signin-inputs-area .input-error').length == 0){
                    signInInstance.login(this.collectInput());
                }
            }
            else if(event.target.id === 'signup-btn'){
                router.go('/signup');
            }
            
        }
    }

    render() {
        const templateForm = Handlebars.compile(SignInForm);
        const data = this.props;
        return templateForm({
            title: data.title,
            login: new InputField(data.login).render(),
            password: new InputField(data.password).render(),
            signInBtn: new Button(data.signInBtn).render(),
            signUpBtn: new Button(data.signUpBtn).render(),
        });
    }
}

export default SignInPage;
