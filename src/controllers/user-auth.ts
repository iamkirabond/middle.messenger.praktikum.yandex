import AuthAPI from '../api/auth-api';
import router from '../pages/index';

const authInstance = new AuthAPI();

interface LoginFormModel {
    login: string;
    password: string;
}

const loginApi = new AuthAPI();

export default class UserAuthController {
  public async login(data: LoginFormModel) {
    try {
        await authInstance.signin(JSON.stringify(data));
        //router.go('/messenger');
    } 
    catch (error) {
        alert('Wrong login or password!')
    }
  }
  public async signup(data) {
    try {
        await authInstance.signup(JSON.stringify(data));
        
    } 
    catch (error) {
        alert('This email already in use!')
    }
  }
  public async getUserInfo() {
    try {
        await authInstance.getUserInfo();
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
} 