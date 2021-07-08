export const SignIn = 
    ` <div class="signin-window">
    <h1 class="signin-title">{{title}}</h1>
    <form class="signin-form" action="">
        <div class="signin-inputs-area">
            <div class="signin-input-block">
                <label class="signin-input-label" for="signin-login">{{inputs.login}}</label>
                <input id="signin-login" type="text" class="signin-input" >
            </div>
            <div class="signin-input-block">
                <label class="signin-input-label" for="signin-password">{{inputs.password}}</label>
                <input id="signin-password" type="password" class="signin-input">
            </div>
        </div>
        <button class="signin-btn">{{submitBtn}}</button>
    </form>
    <a href="/signUp" class="signup-btn">{{returnBtn}}</a>
</div>`;
