import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'

test.describe('Login Functionality @login', () => {

  let loginPage;
  
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
  });

  test('User should login successfully with valid credentials', async ({ page }) => {
    // 1. Move to login page
    await test.step('1. Move to login page', async () => {
      await loginPage.gotoLoginPage();
    });

    // 2. Login executed
    await test.step('2. Enter credentials and log in.', async () => {
      await loginPage.login('tomsmith', 'SuperSecretPassword!');
    });    

    // 3. Assertion - URL check
    await test.step('3.Check if the URL has changed.', async () => {
      await expect(page).toHaveURL(/secure/);
    });    
    
    // 4. Assertion - Success message check
    await test.step('4.Verify that the success message is included.', async () => {
      const message = await loginPage.getFlashMessage();
      expect(message).toContain('You logged into a secure area!');
    });       
  });

  // Negative test case: Entering incorrect information
  test('User should see error message with invalid credentials', async () => {
    await loginPage.login('wronguser', 'wrongpassword');

    const message = await loginPage.getFlashMessage();
    expect(message).toContain('Your username is invalid!');
  });

});