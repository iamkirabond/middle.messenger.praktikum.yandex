import AuthAPI from '../api/auth-api';
import UserAPI from '../api/user-api';
import ChatAPI from '../api/chat-api';


interface LoginFormModel {
  login: string;
  password: string;
}

const authInstance = new AuthAPI();
const userInstance = new UserAPI();
const chatInstance = new ChatAPI()

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
        await userInstance.getUsersInfo(id);
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
  public async updateInfo(data) {
    try {
        await userInstance.editprofile(JSON.stringify(data));
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
  public async updateAvatar(data) {
    try {
        await userInstance.updateAvatar(data);
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
  public async addChat(data) {
    try {
        await userInstance.updateAvatar(data);
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
  public async createChat(chatName) {
    try {
        await chatInstance.createChat(chatName);
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
  public async getChats() {
    try {
        return await chatInstance.getChats();
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
  public async userSearch(nickname) {
    try {
        return await userInstance.userSearch(nickname);
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
  public async addUserToChat(id, chatId) {
    try {
        return await chatInstance.addUser([id], chatId);
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
  public async getChatUsers(chatId) {
    try {
        return await chatInstance.getChatUsers(chatId);
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
  public async deleteUser(id, chatId) {
    try {
        return await chatInstance.deleteUser([id], chatId);
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
  public async changePassword(oldPwd, newPwd) {
    console.log(oldPwd, newPwd)
    try {
        return await userInstance.updatePassword(oldPwd, newPwd);
    } 
    catch (error) {
        console.log(JSON.parse(error.response));
    }
  }
} 