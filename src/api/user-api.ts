import HTTPrequest from '../utils/ HTTPRequest/HTTPRequest';
import { BaseAPI } from './base-api';

const host = 'https://ya-praktikum.tech';
const userAPIInstance = new HTTPrequest(`${host}/api/v2/user`);

export default class userAPI extends BaseAPI {
  editprofile(data) {
    return userAPIInstance.put('/profile', { data });
  }

  updateAvatar(data) {
    return userAPIInstance.put('/profile/avatar', { data });
  }

  userSearch(login) {
    return userAPIInstance.post('/search', { data: { login } });
  }

  getUsersInfo(id) {
    return userAPIInstance.get(`/users/:${id}`, { title: 'string' });
  }

  updatePassword(oldPassword, newPassword) {
    return userAPIInstance.put('/password', { data: { oldPassword, newPassword } });
  }
}
