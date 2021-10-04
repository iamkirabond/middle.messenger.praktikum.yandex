import SignIn from './signIn/signIn';
import Router from '../utils/router';
import SignUp from './signUp/signUp';
import Profile from './profile/profile';
import Chats from './chats/chats';
import Error404 from './404/404';
import Error500 from './500/500';

const router = new Router('page-content');

router.use('/signin', SignIn)
      .use('/signup', SignUp)
      .use('/profile', Profile)
      .use('/chats', Chats)
      .use('/404', Error404)
      .use('/500', Error500)
      .start();