import Handlebars from 'handlebars';
import { ChatRoomTmpl } from '../../templates/Chats/chatRoom.tmpl';
import Block from '../../utils/block';

const templateChatRoom = Handlebars.compile(ChatRoomTmpl);

class ChatRoom extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    return templateChatRoom(this.props);
  }
}

export default ChatRoom;
