import { AppPage } from './app.po';

describe('mysql-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getNewUser()).toContain('Create new employee');
  });
});
