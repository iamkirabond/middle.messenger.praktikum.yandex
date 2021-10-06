import {HTTPrequest} from '../utils/HTTPRequest';
  import { BaseAPI } from './base-api';


const host = 'https://ya-praktikum.tech';
const authAPIInstance = new HTTPrequest(`${host}/api/v2/auth`);

class AuthAPI extends BaseAPI {

    signin(){
        return authAPIInstance.post('/signin', {title: 'string'});
    }
    getUserInfo(){
        return authAPIInstance.get('/user', {title: 'string'});
    }
    userExit(){
        return authAPIInstance.post('/logout', {title: 'string'});
    }
}
