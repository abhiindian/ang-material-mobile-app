import { GameViewerPage } from './app.po';

describe('game-viewer App', () => {
  let page: GameViewerPage;

  beforeEach(() => {
    page = new GameViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
