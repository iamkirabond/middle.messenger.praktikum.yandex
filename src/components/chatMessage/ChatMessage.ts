// @ts-ignore
import Handlebars from 'handlebars';
import { chatMessageTmpl } from "../../templates/ChatMessage/chatMessage";
import Block from '../../utils/block/block'

const templateMsg = Handlebars.compile(chatMessageTmpl);

class ChatMessage extends Block{
    constructor(props) {
        super('div', props);
    }

    render(){
        return templateMsg(this.props);
    }
}

export default ChatMessage;