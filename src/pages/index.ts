import Router from '../utils/router/router';
import Error404Wrapper from './404/index';
import Error500Wrapper from './500/index';
import SignInWrapper from './signIn/index';
import SignUpWrapper from './signUp/index';
import ProfileWrapper from './profile/index';
import ChatsWrapper from './chats/index';

const router = new Router('#page-content');

router
  .use('/', SignInWrapper)
  .use('/signup', SignUpWrapper)
  .use('/profile', ProfileWrapper)
  .use('/messenger', ChatsWrapper)
  .use('/404', Error404Wrapper)
  .use('/500', Error500Wrapper)
  .start();

export default router;
