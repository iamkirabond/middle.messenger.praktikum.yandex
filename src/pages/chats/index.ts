import Chats from './chats';

export function ChatsWrapper(){
  const data = {
    title: 'Вход',
    profileBtn : {
      text: 'Профиль',
      style: 'profile-btn',
      id: 'profile-btn',
      type: 'submit',
    }
  };

  return new Chats(data);
}
