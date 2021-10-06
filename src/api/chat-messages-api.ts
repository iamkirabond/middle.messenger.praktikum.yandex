import {HTTPrequest} from '../utils/HTTPRequest';
import { BaseAPI } from './base-api';

const chatMessagesAPIInstance = new HTTPrequest('api/v1/messages');

class ChatMessagesAPI extends BaseAPI {
    request({id}) {
        return chatMessagesAPIInstance.get(`/${id}`);
    }
}
 