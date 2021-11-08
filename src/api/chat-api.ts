import HTTPrequest from '../utils/HTTPRequest/HTTPRequest';
import { BaseAPI } from './base-api';

const host = 'https://ya-praktikum.tech';
const chatAPIInstance = new HTTPrequest(`${host}/api/v2/chats`);

export default class ChatAPI extends BaseAPI {
  getChats() {
    return chatAPIInstance.get('/', { title: 'string' });
  }

  createChat(title) {
    return chatAPIInstance.post('/', {data: { title }}); 
  }

  deleteChat() {
    return chatAPIInstance.delete('/', { title: 'string' });
  }

  getChatUsers(id) {
    return chatAPIInstance.get(`/${id}/users`);
  }

  getNewMsg(id) {
    return chatAPIInstance.get(`/new/${id}`, { title: 'string' });
  }

  getToken(id) {
    return chatAPIInstance.post(`/token/${id}`, {});
  }

  putAvatar() {
    return chatAPIInstance.put('/avatar', { title: 'string' });
  }

  deleteUser(users, chatId) {
    return chatAPIInstance.delete('/users', { data: { users, chatId } });
  }

  addUser(users, chatId) {
    return chatAPIInstance.put('/users', { data: { users, chatId } });
  }

  create() {
    return chatAPIInstance.post('/', { title: 'string' });
  }

  request() {
    return chatAPIInstance.get('/full');
  }
}
