export const Profile = 
    ` <div class="profile-wrapper">
        <div class="back-btn">
            <div class="back-btn-bcg"></div>
        </div>
        <div class="profile">
            <div class="profile-top">
                <div class="profile-image-wrapper"> </div>
                <h2 class="profile-name">{{name}}</h2>
            </div>
            <div class="profile-info">
                <span class="profile-field">Почта</span>
                <span class="profile-data">{{mail}}</span>
            </div>
            <div class="profile-info">
                <span class="profile-field">Логин</span>
                <span class="profile-data">{{login}}</span>
            </div>
            <div class="profile-info">
                <span class="profile-field">Имя</span>
                <span class="profile-data">{{name}}</span>
            </div>
            <div class="profile-info">
                <span class="profile-field">Фамилия</span>
                <span class="profile-data">{{lastname}}</span>
            </div>
            <div class="profile-info">
                <span class="profile-field">Имя в чате</span>
                <span class="profile-data">{{nickname}}</span>
            </div>
            <div class="profile-info">
                <span class="profile-field">Телефон</span>
                <span class="profile-data">{{phone}}</span>
            </div>
            <div class="profile-options">
                <button class="profile-btn">Изменить данные</button>
                <button class="profile-btn">Изменить пароль</button>
                <button class="profile-btn red">Выйти</button>
            </div>
        </div>
    </div>`;
