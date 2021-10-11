import Handlebars from 'handlebars';
import { ChatsPageTmpl } from '../../templates/Chats/chats.tmpl';
import Block from '../../utils/block';
import InputField from '../../components/inputField/InputField';
import Button from '../../components/button/Button';
import router from '../index';
import UserAuthController from '../../controllers/user-auth';
import './chats.scss';
import ChatItem from '../../components/chat/Chat';

const chatDataRequester = new UserAuthController();


class Chats extends Block {
  constructor(props) {
    super('div', {
      ...props,
      events: {
        click: event => this.clickHandler(event),
    }});
  }

  newChatInit(){
    let modal = document.querySelectorAll('.new-chat-name.modal')[0];
    modal.classList.toggle('d-flex');
  }

  clickHandler (event: Event){
   // console.log(event.target.closest('.chats-item').dataset.id)
    if(event.target){
      event.preventDefault();
      if (event.target.id === 'profile-btn'){
        event.preventDefault();
        router.go('/profile');
      }
      else if (event.target.id === 'addChat'){
        event.preventDefault();
        this.newChatInit(); 
      }
      else if (event.target.id === 'newChatSubmit'){
        event.preventDefault();
        let chatName = document.querySelectorAll('.new-chat-name input')[0].value;
        chatDataRequester.createChat(chatName)
        .then(() => {
          this.requestChats()
        })
        .catch(data => console.log(JSON.parse(data.response)));
      }
      else if(event.target.closest('.chats-item').dataset.id){
        console.log(event.target.closest('.chats-item').dataset.id)
      }
    }
  }
  
  requestChats(){
    return chatDataRequester.getChats()
    .then((response) => {
      this.props.chatRooms = JSON.parse(response);
    })
    .catch(data => console.log(JSON.parse(data.response)));
  }

  componentDidMount(){
    this.requestChats();
}

  render() {
    const templateForm = Handlebars.compile(ChatsPageTmpl);
    const data = this.props;

    let chatRooms =  this.props.chatRooms ? this.props.chatRooms.map((item) => {
      return new ChatItem(item).render()
    }) : null;
      
    return templateForm({
      ...data,
      chatRooms: this.props.chatRooms ? chatRooms.join('\n') : null,
      profileBtn: new Button(data.profileBtn).render(),
    });
  }
}

export default Chats;
