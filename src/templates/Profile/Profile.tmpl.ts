export const ProfileForm = ` <div class="profile-wrapper">
        <div class="back-btn" id="profile-back-btn">
            <div class="back-btn-bcg"></div>
        </div>
        <div class="profile">
            <div class="profile-top">
                <div class="profile-image-wrapper"> </div>
                <h2 class="profile-name">{{profileName}}</h2>
            </div>
            {{{mail}}}
            {{{login}}}
            {{{name}}}
            {{{lastname}}}
            {{{nickname}}}
            {{{phone}}}
            <div class="profile-options">
                <button class="profile-btn">Изменить данные</button>
                <button class="profile-btn">Изменить пароль</button>
                <button class="profile-btn red" id="logout">Выйти</button>
            </div>
        </div>
    </div>`;
