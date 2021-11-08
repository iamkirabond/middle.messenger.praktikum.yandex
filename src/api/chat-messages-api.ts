import HTTPrequest from '../utils/HTTPRequest/HTTPRequest';
import { BaseAPI } from './base-api';

const chatMessagesAPIInstance = new HTTPrequest('api/v1/messages');

export default class ChatMessagesAPI extends BaseAPI {
  request({ id }): Promise<unknown> {
    return chatMessagesAPIInstance.get(`/${id}`);
  }
}
