import {HTTPrequest} from '../utils/HTTPRequest';
  import { BaseAPI } from './base-api';


const host = 'https://ya-praktikum.tech';
const chatAPIInstance = new HTTPrequest(`${host}/api/v2/auth`);

class ChatAPI extends BaseAPI {

    signin(){
        return chatAPIInstance.post('/signin', {title: 'string'});
    }
    getUserInfo(){
        return chatAPIInstance.get('/user', {title: 'string'});
    }
    userExit(){
        return chatAPIInstance.post('/logout', {title: 'string'});
    }
}
