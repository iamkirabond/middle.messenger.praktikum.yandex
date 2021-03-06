export const ProfileForm = ` <div class="profile-wrapper">
        <div class="back-btn" id="profile-back-btn">
            <div class="back-btn-bcg"></div>
        </div>
        <div class="profile">
            <div class="profile-top">
                <div class="profile-image-wrapper">
                <img src="{{{avatar}}}"/>
                </div>
                <h2 class="profile-name">{{profileName}}</h2>
            </div>
            <form id="myUserForm">
                Аватар: <input id="avatar" type="file" name="avatar" accept="image/*">
                <input type="submit" id="uploadAvatar">
            </form> 
            {{{mail}}}
            {{{login}}}
            {{{name}}}
            {{{lastname}}}
            {{{nickname}}}
            {{{phone}}}
            <div class="profile-options">
                <button class="profile-btn" id="updateInfo">Изменить данные</button>
                <button class="profile-btn" id="updatePassword">Изменить пароль</button>
                <button class="profile-btn red" id="logout">Выйти</button>
            </div>
        </div>
        </div>
        <div class="update-password-wrapper">
            <div class="update-password">
                {{{oldPwd}}}
                {{{newPwd}}}
                {{{duplicalePwd}}}
                <button class="profile-btn" id="submitUpdatePassword">Изменить пароль</button>
                <button class="profile-btn red" id="canselUpdatePassword">Отмена</button>
            </div>
        </div>`;
