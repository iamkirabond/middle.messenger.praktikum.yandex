import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { ProfileForm } from '../../templates/Profile/Profile.tmpl';
import ProfileField from '../../components/profileField/profileField';
import './profile.scss';

class Profile extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    const templateForm = Handlebars.compile(ProfileForm);
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
