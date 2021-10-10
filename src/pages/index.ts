import Router from '../utils/router';
import { Error404Wrapper } from './404';
import { Error500Wrapper } from './500';
import { SignInWrapper } from './signIn';
import { SignUpWrapper } from './signUp';
import { ProfileWrapper } from './profile';
import { ChatsWrapper } from './chats'; 

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
    