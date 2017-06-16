import { LearnAngular2ServicePage } from './app.po';

describe('learn-angular2-service App', () => {
  let page: LearnAngular2ServicePage;

  beforeEach(() => {
    page = new LearnAngular2ServicePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
