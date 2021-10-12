import Handlebars from 'handlebars';
import { ChatsUserTmpl } from '../../templates/Chats/chatUser.tmpl';
import Block from '../../utils/block'

const templateChatUser = Handlebars.compile(ChatsUserTmpl);


class ChatUser extends Block{

    constructor(props) {
        super('div', props);
    }

    render(){
        return templateChatUser(this.props);
    }
}

export default ChatUser;