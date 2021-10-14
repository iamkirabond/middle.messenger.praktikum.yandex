import router from '../pages';
import HTTPrequest from '../utils/HTTPRequest';
import { BaseAPI } from './base-api';

const host = 'https://ya-praktikum.tech';
const authAPIInstance = new HTTPrequest(`${host}/api/v2/auth`);

export default class AuthAPI extends BaseAPI {
  signup(data) {
    return authAPIInstance.post('/signup', { data })
      .then(() => {
        this.getUserInfo();
        router.go('/messenger');
      })
      .catch((reject) => {
        throw new Error(reject);
      });
  }

  signin(data) {
    return authAPIInstance.post('/signin', { data })
      .then(() => {
        this.getUserInfo();
        router.go('/messenger');
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  getUserInfo() {
    return authAPIInstance.get('/user').then((response:string) => JSON.parse(response));
  }

  userExit() {
    return authAPIInstance.post('/logout', {})
      .then(() => {
        this.getUserInfo();
        router.go('/');
      })
      .catch((reject) => {
        console.log(reject);
      });
  }
}
