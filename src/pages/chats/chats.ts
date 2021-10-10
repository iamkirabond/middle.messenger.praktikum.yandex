import Handlebars from 'handlebars';
import { ChatsPageTmpl } from '../../templates/Chats/chats.tmpl';
import Block from '../../utils/block';
import InputField from '../../components/inputField/InputField';
import Button from '../../components/button/Button';
import router from '../index';
import './chats.scss';

class Chats extends Block {
  constructor(props) {
    super('div', {
      ...props,
      events: {
        click: event => this.clickHandler(event)
    }});
  }

  clickHandler (event: Event){
    console.log('button')
    if(event.target && event.target.id === 'profile-btn'){
        event.preventDefault();
            router.go('/profile');
    }
}

  render() {
    const templateForm = Handlebars.compile(ChatsPageTmpl);
    const data = this.props;
    return templateForm({
      ...data,
      profileBtn: new Button(data.profileBtn).render(),

    });
  }
}

export default Chats;
