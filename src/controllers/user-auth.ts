import AuthAPI from '../api/auth-api';
import router from '../pages/index';

const authInstance = new AuthAPI();

interface LoginFormModel {
    login: string;
    password: string;
}
interface SignUpFormModel {
    login: string;
    password: string;
}

const loginApi = new AuthAPI();

export default class UserAuthController {
  public async login(data: LoginFormModel) {
    try {
        const response = await authInstance.signin(JSON.stringify(data));
        console.log(response)
        router.go('/messenger');
    } 
    catch (error) {
        alert('Wrong login or password!')
    }
  }
  public async signup(data) {
    console.log(data)
    try {
        const response = await authInstance.signup(JSON.stringify(data));
        router.go('/messenger');
    } 
    catch (error) {
        alert('This email already in use!')
    }
  }
} 