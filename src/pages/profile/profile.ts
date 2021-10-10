import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { ProfileForm } from '../../templates/Profile/Profile.tmpl';
import ProfileField from '../../components/profileField/profileField';
import router from '../index';
import UserAuthController from '../../controllers/user-auth';
import './profile.scss';

const templateForm = Handlebars.compile(ProfileForm);
const profileDataRequester = new UserAuthController();

class Profile extends Block {
  constructor(props) {
    super('div', {...props,
      events: {
        click: event => this.clickHandler(event)
      }
    });
  }

  clickHandler(event:Event){
    if (event.target){
      if(event.target.id === 'profile-back-btn'){
        event.preventDefault();
        router.go('/');
      }
      else if(event.target.id === 'logout'){
        profileDataRequester.logout();
      }
    }
  }

  componentDidMount() {
    profileDataRequester.getUserInfo()
      .then((data) => {
        this.props.lastname.data = data.first_name;
        this.props.mail.data = data.email;
        this.props.login.data = data.login;
        this.props.name.data = data.first_name;
        this.props.lastname.data = data.second_name;
        this.props.nickname.data = data.login;
        this.props.phone.data = data.phone;
        this.setProps(this.props);
      })
      .catch(()=> router.go('/'));
  }

  render() {
    const data = this.props;

    return templateForm({
      profileName: data.name.data,
      mail: new ProfileField(data.mail).render(),
      login: new ProfileField(data.login).render(),
      name: new ProfileField(data.name).render(),
      lastname: new ProfileField(data.lastname).render(),
      nickname: new ProfileField(data.nickname).render(),
      phone: new ProfileField(data.phone).render(),
    });
  }
}

export default Profile;
