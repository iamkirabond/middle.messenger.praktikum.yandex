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
            <form id="changeAvatar">
                Фото профиля: <input id="avatar" type="file" name="avatar" accept="image/*">
                <button type="submit" class="upload-btn" id="uploadAvatar">Загрузить</button> 
            </form> 
            {{{mail}}}
            {{{login}}}
            {{{name}}}
            {{{lastname}}}
            {{{nickname}}}
            {{{phone}}}
            <div class="profile-options">
                <button class="profile-btn" id="updateInfo">Изменить данные</button>
                <button class="profile-btn">Изменить пароль</button>
                <button class="profile-btn red" id="logout">Выйти</button>
            </div>
        </div>
    </div>`;
