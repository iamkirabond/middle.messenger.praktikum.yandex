import {HTTPrequest} from '../utils/HTTPRequest';
  import { BaseAPI } from './base-api';

  const chatAPIInstance = new HTTPrequest('api/v1/chats');

  class ChatAPI extends BaseAPI {
      create() {
          return chatAPIInstance.post('/', {title: 'string'});
      }

      request() {
          return chatAPIInstance.get('/full');
      }
  }