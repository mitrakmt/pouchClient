import { PouchPage } from './app.po';

describe('pouch App', function() {
  let page: PouchPage;

  beforeEach(() => {
    page = new PouchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
