import Handlebars from 'handlebars';
import Block from '../../utils/block';
import { ProfileForm } from '../../templates/Profile/Profile.tmpl';
import ProfileField from '../../components/profileField/profileField';
import router from '../index';
import UserAuthController from '../../controllers/user-auth';
import './profile.scss';
import toggleModal from '../../utils/toggleItem';
import { validationForm } from '../../utils/validation';

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

  collectInput(){
    let inputs = document.querySelectorAll('.profile-input');
    let data = {};
    inputs.forEach((input) => {
        data[input.dataset.type] = input.value;
    });
    return {...data, display_name: data.first_name};
  }
  
  clickHandler(event:Event){
    if (event.target){
      if(event.target.id === 'profile-back-btn'){
        event.preventDefault();
        router.go('/messenger');
      }
      else if(event.target.id === 'logout'){
        event.preventDefault();
        profileDataRequester.logout();
      }
      else if(event.target.id === 'updatePassword' || event.target.id === 'canselUpdatePassword' ){
        event.preventDefault();
        toggleModal('.update-password-wrapper')
        
      }
      else if(event.target.id === 'submitUpdatePassword'){
          let inputs = document.querySelectorAll('.update-password input');
          inputs.forEach((input) => {
              console.log(input.dataset.type, input.value);
              let isValid = validationForm(input.value, input.dataset.type);
              if (!isValid){
                  input.classList.add('input-error');
              }
              else{
                  input.classList.remove('input-error');
              }
          });
          if (document.querySelectorAll('.input-error').length == 0){
            let inputs = document.querySelectorAll('.update-password input');
            if (inputs[1].value == inputs[2].value){
              profileDataRequester.changePassword(inputs[0].value, inputs[1].value)
              .then(response => {
                toggleModal('.update-password-wrapper')
              })
              .catch(data => console.log(JSON.parse(data.response)));              
             }
          }
        }
      else if(event.target.id === 'updateInfo'){
        event.preventDefault();
        let data = this.collectInput();
        profileDataRequester.updateInfo(data);
      }
      else if(event.target.id === 'uploadAvatar' && document.getElementById('avatar').files!.length){
        event.preventDefault();
        const userAvatarInput = document.getElementById('userAvatarInput');
        const userAvatarFormData = new FormData();
        userAvatarFormData.append('avatar', userAvatarInput);
        profileDataRequester.updateAvatar({
          headers: {
            'content-type': 'multipart/form-data',
          },
          body: userAvatarFormData,
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
      avatar: this.props.avatar,
      oldPwd: new ProfileField(data.oldPwd).render(),
      newPwd: new ProfileField(data.newPwd).render(),
      duplicalePwd: new ProfileField(data.duplicatePwd).render(),
    });
  }
}

export default Profile;
