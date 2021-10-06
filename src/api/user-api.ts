import {HTTPrequest} from '../utils/HTTPRequest';
  import { BaseAPI } from './base-api';


const host = 'https://ya-praktikum.tech';
const userAPIInstance = new HTTPrequest(`${host}/api/v2/user`);

class userAPI extends BaseAPI {

    editprofile(){
        return userAPIInstance.put('/profile', {title: 'string'});
    }
    updateAvetar(){
        return userAPIInstance.put('/avatar', {title: 'string'});
    }
    userSearch(){
        return userAPIInstance.post('/search', {title: 'string'});
    }
    getUsersInfo(id){
        return userAPIInstance.get(`/users/:${id}`, {title: 'string'});
    }
}