import {HTTPrequest} from '../utils/HTTPRequest';
  import { BaseAPI } from './base-api';


const host = 'https://ya-praktikum.tech';
const chatAPIInstance = new HTTPrequest(`${host}/api/v2/user`);

class ChatAPI extends BaseAPI {

    editprofile(){
        return chatAPIInstance.put('/profile', {title: 'string'});
    }
    updateAvetar(){
        return chatAPIInstance.put('/avatar', {title: 'string'});
    }
    userSearch(){
        return chatAPIInstance.post('/search', {title: 'string'});
    }
    getUsersInfo(id){
        return chatAPIInstance.get(`/users/:${id}`, {title: 'string'});
    }
}