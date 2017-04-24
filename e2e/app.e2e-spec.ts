import { MyPrimePage } from './app.po';

describe('my-prime App', () => {
  let page: MyPrimePage;

  beforeEach(() => {
    page = new MyPrimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
