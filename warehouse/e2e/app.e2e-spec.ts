import { WarehousePage } from './app.po';

describe('warehouse App', function() {
  let page: WarehousePage;

  beforeEach(() => {
    page = new WarehousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
