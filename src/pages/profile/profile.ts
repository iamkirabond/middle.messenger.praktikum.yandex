// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../utils/block/block';
import { ProfileForm } from '../../templates/Profile/Profile.tmpl';
import ProfileField from '../../components/profileField/profileField';
import router from '../index';
import UserAuthController from '../../controllers/user-auth';
import './profile.scss';
import toggleModal from '../../utils/toggleItem';
import { validationForm } from '../../utils/validation';

const templateForm = Handlebars.compile(ProfileForm);
const profileDataRequester = new UserAuthController();

const OLD_PASSWORD = 0;
const NEW_PASSWORD_INPUT_NUMBER = 1;
const NEW_PASSWORD_INPUT_NUMBER_REPEAT = 2;

class Profile extends Block {
  constructor(props) {
    super('div', {...props,
      events: {
        click: event => this.clickHandler(event)
      }
    });
  }

  collectInput(){
    let inputs = document.querySelectorAll('.profile-input');
    let data = {
      first_name: ''
    };
    inputs.forEach((input) => {
        data[(input as HTMLTextAreaElement).dataset.type] = (input as HTMLTextAreaElement).value;
    });
    return {...data, display_name: data.first_name};
  }
  
  clickHandler(event:Event){
    if (event.target){
      if((event.target as HTMLTextAreaElement).id === 'profile-back-btn'){
        event.preventDefault();
        router.go('/messenger');
      }
      else if((event.target as HTMLTextAreaElement).id === 'logout'){
        event.preventDefault();
        profileDataRequester.logout();
      }
      else if((event.target as HTMLTextAreaElement).id === 'updatePassword' || (event.target as HTMLTextAreaElement).id === 'canselUpdatePassword' ){
        event.preventDefault();
        toggleModal('.update-password-wrapper')
        
      }
      else if((event.target as HTMLTextAreaElement).id === 'submitUpdatePassword'){
          let inputs = document.querySelectorAll('.update-password input');
          inputs.forEach((input) => {
              console.log((input as HTMLTextAreaElement).dataset.type, (input as HTMLTextAreaElement).value);
              let isValid = validationForm((input as HTMLTextAreaElement).value, (input as HTMLTextAreaElement).dataset.type);
              if (!isValid){
                  input.classList.add('input-error');
              }
              else{
                  input.classList.remove('input-error');
              }
          });
          if (document.querySelectorAll('.input-error').length == 0){
            let inputs = document.querySelectorAll('.update-password input');
            if ((inputs[NEW_PASSWORD_INPUT_NUMBER] as HTMLTextAreaElement).value == (inputs[NEW_PASSWORD_INPUT_NUMBER_REPEAT] as HTMLTextAreaElement).value){
              profileDataRequester.changePassword((inputs[OLD_PASSWORD] as HTMLTextAreaElement).value, (inputs[NEW_PASSWORD_INPUT_NUMBER] as HTMLTextAreaElement).value)
              .then(() => {
                toggleModal('.update-password-wrapper');
                inputs.forEach((input:HTMLTextAreaElement) => input.value = '')
              })
              .catch(data => console.log(JSON.parse(data.response)));              
             }
          }
        }
      else if((event.target as HTMLTextAreaElement).id === 'updateInfo'){
        event.preventDefault();
        let data = this.collectInput();
        profileDataRequester.updateInfo(data);
      }
      else if((event.target as HTMLTextAreaElement).id === 'uploadAvatar' && (<HTMLInputElement>document.getElementById('avatar')).files!.length){
        event.preventDefault();

        const myUserForm = document.getElementById('myUserForm');
        const avatar = document.getElementById('avatar');
        const form = new FormData(myUserForm as HTMLFormElement);
        profileDataRequester.updateAvatar(form)
        .then(() => {
          router.go('/profile');
        })
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
        this.props.avatar = data.avatar;
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
      avatar: this.props.avatar ? 'https://ya-praktikum.tech/api/v2/resources/' + this.props.avatar : null,
      oldPwd: new ProfileField(data.oldPwd).render(),
      newPwd: new ProfileField(data.newPwd).render(),
      duplicalePwd: new ProfileField(data.duplicatePwd).render(),
    });
  }
}

export default Profile;
