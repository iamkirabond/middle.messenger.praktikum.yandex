import AuthAPI from '../api/auth-api';
import UserAPI from '../api/user-api';


interface LoginFormModel {
  login: string;
  password: string;
}

const authInstance = new AuthAPI();
const userApi = new UserAPI();

export default class UserAuthController {
  public async login(data: LoginFormModel) {
    try {
        await authInstance.signin(JSON.stringify(data));
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
       return await authInstance.getUserInfo();
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
  public async getProfileInfo(id:string) {
    try {
        await userApi.getUsersInfo(id);
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
  public async logout() {
    try {
        await authInstance.userExit();
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
} 