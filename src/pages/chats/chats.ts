import Handlebars from 'handlebars';
import { ChatsPageTmpl } from '../../templates/Chats/chats.tmpl';
import Block from '../../utils/block';
import InputField from '../../components/inputField/InputField';
import Button from '../../components/button/Button';
import { validationForm } from '../../utils/validation';
import './chats.scss';

class Chats extends Block {
  constructor(props) {
    super('div', props);
    console.log(props);
  }

  render() {
    const templateForm = Handlebars.compile(ChatsPageTmpl);
    const data = this.props;
    return templateForm(data);
  }
}

export default Chats;
