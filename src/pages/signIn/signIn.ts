// @ts-ignore
import Handlebars from 'handlebars';
import { SignInForm } from '../../templates/Authorization/SignIn.tmpl';
import Block from "../../utils/block/block";
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
                //focusout: event => this.blurNow(event),
            }
        })
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
                let inputsData = this.collectInput();

                signInInstance.login(inputsData).then(response => {
                    console.log(response);
                })
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
