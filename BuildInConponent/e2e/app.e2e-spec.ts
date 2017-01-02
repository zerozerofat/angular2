import { BuildInConponentPage } from './app.po';

describe('build-in-conponent App', function() {
  let page: BuildInConponentPage;

  beforeEach(() => {
    page = new BuildInConponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
