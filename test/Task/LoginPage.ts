import AbstractPage from "./AbstractPage";

class LoginPage extends AbstractPage{
    public get loginForm(){
        return $('#new_user_session')
    }
    public get emailInput(){
        return $('#user_session_email')
    }
    public get passwordInput(){
        return $('#user_session_password')
    }
    public get submitButton(){
        return $('#sign-in')
    }
    public async assertLoginPageIsVisible(){
        await this.loginForm.waitForDisplayed()
    }
    public async login(email:string,password:string){
        await this.emailInput.setValue(email)
        await this.passwordInput.setValue(password)
        await this.submitButton.click()

    }
}
export default new LoginPage()
