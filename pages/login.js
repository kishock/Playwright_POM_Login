
exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: 'Login' });
        
        // Locator for checking the result message (common for success/failure)
        this.flash_message = page.locator('#flash');
    }

    async gotoLoginPage() {
        // Get baseURL from playwright.config.js
        //await this.page.goto('https://the-internet.herokuapp.com/login');
        await this.page.goto('/login');
    }

    async login(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

    // Helper method to get message text
    async getFlashMessage() {
        return await this.flash_message.textContent();
    }
}