// @ts-ignore
import Handlebars from 'handlebars';
import { ChatsPageTmpl } from '../../templates/Chats/chats.tmpl';
import Block from '../../utils/block/block';
import InputField from '../../components/inputField/InputField';
import Button from '../../components/button/Button';
import router from '../index';
import UserAuthController from '../../controllers/user-auth';
import './chats.scss';
import ChatItem from '../../components/chat/ChatItem';
import ChatCurrent from '../../components/chat/ChatCurrent';
import ChatUser from '../../components/chat/ChatUser';
import Socket from '../../utils/webSocket';

const chatDataRequester = new UserAuthController();
const templateForm = Handlebars.compile(ChatsPageTmpl);
let socket = null;


class Chats extends Block {
  constructor(props) {
    super('div', {
      ...props,
      events: {
        click: event => this.clickHandler(event),
    }});
  }

  newChatInit(){
    let modal = document.querySelector('.new-chat-name.modal');
    modal.classList.toggle('d-flex');
  }

  openSettings(){
    let modal = document.querySelectorAll('.settings-modal')[0];
    modal.classList.toggle('d-flex');
  }

  clickHandler (event: Event){

    if(event.target){
      if ((event.target as HTMLTextAreaElement).id === 'profile-btn'){
        event.preventDefault();
        router.go('/profile');
      }
      else if ((event.target as HTMLTextAreaElement).id === 'addChat'){
        event.preventDefault();
        this.newChatInit(); 
      }
      else if ((event.target as HTMLTextAreaElement).id === 'openSettings'){
        event.preventDefault();
        this.openSettings(); 
      }
      else if ((event.target as HTMLTextAreaElement).id === 'addUserByLogin'){
        event.preventDefault();
        let login = (document.querySelectorAll('.settings-modal input')[0] as HTMLTextAreaElement).value;
        if (login.length > 0){
          chatDataRequester.userSearch(login)
          .then((response: string) =>{
            if(response){
              let {id} = JSON.parse(response)[0];
              chatDataRequester.addUserToChat(id, this.props.currentChatRoom.roomData.id)
              .then(response => {
                chatDataRequester.getChatUsers(this.props.currentChatRoom.roomData.id)
                .then((response: string) => {
                  let usersInChat = JSON.parse(response);

                  this.props.currentChatRoom = {...this.props.currentChatRoom, usersInChat};
                })
                .catch(data => console.log(JSON.parse(data.response)));
              })
            }
          })
        }
      }
      else if ((event.target as HTMLTextAreaElement).id === 'newChatSubmit'){
        event.preventDefault();
        let chatName = (document.querySelectorAll('.new-chat-name input')[0] as HTMLTextAreaElement).value;
        chatDataRequester.createChat(chatName)
        .then(() => {
          this.requestChats()
        })
        .catch(data => console.log(JSON.parse(data.response)));
      }
      else if ((event.target as HTMLTextAreaElement).id === 'removeUserFromChat'){
        event.preventDefault();
        chatDataRequester.deleteUser((event.target as HTMLTextAreaElement).dataset.id, this.props.currentChatRoom.roomData.id)
        .then(response => {
          chatDataRequester.getChatUsers(this.props.currentChatRoom.roomData.id)
          .then((response: string) => {
            let usersInChat = JSON.parse(response);

            this.props.currentChatRoom = {...this.props.currentChatRoom, usersInChat};
          })
          .catch(data => console.log(JSON.parse(data.response)));
        })
      }
      else if ((event.target as HTMLTextAreaElement).id === 'sendMessageSubmit'){
        event.preventDefault();

        if(this.props.currentChatRoom)
          this.sendText();
      }
      else if((event.target as HTMLTextAreaElement).className.includes('clickable-chat')){
        let clickedId:any = (event.target as HTMLTextAreaElement).closest('.chats-item');
        clickedId = (clickedId as HTMLTextAreaElement).dataset.id
        let currentRoom = this.props.chatRooms.filter(item => item.id == clickedId);
        let roomData = currentRoom[0];
        let content = new ChatCurrent(roomData).render();

        chatDataRequester.getChatUsers(roomData.id)
        .then((response: string) => {
          let usersInChat = JSON.parse(response);
          
         chatDataRequester.getToken(roomData.id)
         .then((response: string)=>{
           let {token} = JSON.parse(response);

           roomData.token = token;
           this.props.currentChatRoom = {roomData, content, usersInChat};     

           chatDataRequester.getUserInfo()
           .then(response => {
            let props = this.props.currentChatRoom;
            socket = new Socket(response.id, props.roomData.id, props.roomData.token);
           })
         }) 
        })
        .catch(data => console.log(JSON.parse(data.response)));
      }
    }
  }

  sendText(){
    let text = document.getElementById('sendMessageInput');

    socket.sendMessage({
      content: (text as HTMLTextAreaElement).value,
      type: 'message',
    });
    (text as HTMLTextAreaElement).value = '';
  }
  
  requestChats(){
    return chatDataRequester.getChats()
    .then((response: string) => {
      this.props.chatRooms = JSON.parse(response);
    })
    .catch(data => console.log(JSON.parse(data.response)));
  }

  componentDidMount(){
    this.requestChats();
}

  render() {
    const data = this.props;

    let chatRooms = data.chatRooms ? data.chatRooms.map((item) => {
      return new ChatItem(item).render()
    }) : null;

    let userList = data.currentChatRoom ? data.currentChatRoom.usersInChat.map((user) => {
      return new ChatUser(user).render();
    }) : null;

    return templateForm({
      ...data,
      chatRooms: data.chatRooms ? chatRooms.join('\n') : null,
      currentChatRoom: data.currentChatRoom ? data.currentChatRoom.content : null,
      profileBtn: new Button(data.profileBtn).render(),
      users: data.currentChatRoom ? userList.join('\n') : null,
      history: '',
    });
  }
}

export default Chats;
