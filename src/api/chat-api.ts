import {HTTPrequest} from '../utils/HTTPRequest';
  import { BaseAPI } from './base-api';


const host = 'https://ya-praktikum.tech';
const chatAPIInstance = new HTTPrequest(`${host}/api/v2/chats`);

class ChatAPI extends BaseAPI {

    getChats(){
        return chatAPIInstance.get('/', {title: 'string'});
    }
    createChat(){
        return chatAPIInstance.post('/', {title: 'string'});
    }
    deleteChat(){
        return chatAPIInstance.delete('/', {title: 'string'});
    }
    getChatUsers(id){
        return chatAPIInstance.get(`/:${id}/users`, {title: 'string'});
    }
    getNewMsg(id){
        return chatAPIInstance.get(`/new/:${id}`, {title: 'string'});
    }
    putAvatar(){
        return chatAPIInstance.put('/avatar', {title: 'string'});
    }
    deleteUser(){
        return chatAPIInstance.put('/avatar', {title: 'string'});
    }
    addUser(){
        return chatAPIInstance.put('/users', {title: 'string'});
    }
    create() {
        return chatAPIInstance.post('/', {title: 'string'});
    }
    request() {
        return chatAPIInstance.get('/full');
    }
}
