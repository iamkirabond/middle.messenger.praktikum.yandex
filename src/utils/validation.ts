export function validationForm(inputContent: string, type: string):boolean{
    const expression = {
        name: /(^[A-Z]{1}[a-z]{1,29}|(^[А-Я]{1}[а-я]{1,29}$))/,//
        login: /^[a-zA-Z]([a-zA-Z0-9_-]{1,29})$/,
        email: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        password: /(?=.*[A-Z]+)(?=.*[!@#\$%]+)/,
        message: /(?=.*[A-Z]+)(?=.*[!@#\$%]+)/,
        phone: /^(\+7|8)[0-9]{10}$/,
    }
    switch (type) {
        case 'first_name':
            return expression.name.test(inputContent);
        case 'second_name':
            return expression.name.test(inputContent);
        case 'login':
            return expression.login.test(inputContent);
        case 'email':
            return (expression.email.test(inputContent) && inputContent.length > 0);
        case 'password':
            return expression.password.test(inputContent);
        case 'message':
            return expression.message.test(inputContent);
        case 'phone':
            return expression.phone.test(inputContent);
        default:
            return false;
    }
}