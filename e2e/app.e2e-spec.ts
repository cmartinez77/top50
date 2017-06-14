import { Top50Page } from './app.po';

describe('top50 App', () => {
  let page: Top50Page;

  beforeEach(() => {
    page = new Top50Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
