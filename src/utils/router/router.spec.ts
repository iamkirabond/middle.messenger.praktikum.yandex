import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import Block from '../block/block';
import Router from './router';
import router from '../../pages/index'

describe('Проверяем переходы у Роута', () => {
  before(() => {
    const dom = new JSDOM(
      `<html>
        <body>
          <div id="root"></div>
        </body>
      </html>`,
      { url: 'http://localhost:3000' },
    );

    const router = new Router('#root');
    function initBlock() {
      return new Block();
    }
    router.use('/404', initBlock);
    router.use('/500', initBlock);
    router.start();

  });

  it('Переход на новую страницу меняет размер history', () => {
    router.go('/404');
    router.go('/500');
    expect(router.history.length).to.eq(3);
  });

  it('Переход на новую страницу меняет window.location.pathname', () => {
    router.go('/404');
    expect(window.location.pathname).to.eq('/404');
  });
});