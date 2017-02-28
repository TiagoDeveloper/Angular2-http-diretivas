import { Teste2Page } from './app.po';

describe('teste2 App', () => {
  let page: Teste2Page;

  beforeEach(() => {
    page = new Teste2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
