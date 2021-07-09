export const SignUp = 
    ` <div class="signin-window">
    <h1 class="signin-title">{{title}}</h1>
    <form class="signin-form" action="">
            <div class="signin-input-block">
                <label class="signin-input-label" for="signin-mail">{{inputs.mail}}</label>
                <input id="signin-mail" type="text" class="signin-input" >
            </div>
            <div class="signin-input-block">
                <label class="signin-input-label" for="signin-login">{{inputs.login}}</label>
                <input id="signin-login" type="text" class="signin-input" >
            </div>
            <div class="signin-input-block">
                <label class="signin-input-label" for="signin-name">{{inputs.name}}</label>
                <input id="signin-name" type="text" class="signin-input" >
            </div>
            <div class="signin-input-block">
                <label class="signin-input-label" for="signin-last-name">{{inputs.lastName}}</label>
                <input id="signin-last-name" type="password" class="signin-input">
            </div>
            <div class="signin-input-block">
                <label class="signin-input-label" for="signin-phone">{{inputs.phone}}</label>
                <input id="signin-phone" type="password" class="signin-input">
            </div>
            <div class="signin-input-block">
                <label class="signin-input-label" for="signin-password">{{inputs.password}}</label>
                <input id="signin-password" type="password" class="signin-input">
            </div>
            <div class="signin-input-block">
                <label class="signin-input-label" for="signin-password-dupl">{{inputs.passwordDup}}</label>
                <input id="signin-password-dupl" type="password" class="signin-input">
            </div>
        <button class="signin-btn">{{submitBtn}}</button>
    </form>
    <a href="/signIn.html" class="signup-btn">{{returnBtn}}</a>
</div>`;
