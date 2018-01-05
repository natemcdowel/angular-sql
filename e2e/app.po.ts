import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNewUser() {
    return element(by.css('.new-employee')).getText();
  }
}
