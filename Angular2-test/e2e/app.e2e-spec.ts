import { TsAppPage } from './app.po';

describe('ts-app App', () => {
  let page: TsAppPage;

  beforeEach(() => {
    page = new TsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
