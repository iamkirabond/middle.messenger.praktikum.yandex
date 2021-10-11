import Handlebars from 'handlebars';
import { ChatsItemTmpl } from '../../templates/Chats/chatItem.tmpl';
import Block from '../../utils/block'

const templateChatItem = Handlebars.compile(ChatsItemTmpl);

class ChatItem extends Block{

    constructor(props) {
        console.log(props)
        super('div', {...props,
            events: {
                click: event => this.clickHandler(event),
            }
        });
    }

    render(){
        return templateChatItem(this.props);
    }
}

export default ChatItem;