import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import Block from '../block/block';
import Router from './router';
import Route from './routes';

describe('Проверяем переходы у Роута', () => {
  const router = new Router('#page-content');

  class Home extends Block {
    static template = '<div></div>';
  }
  class Page extends Block {
    static template = '<div></div>';
  }

  router
    .use('/', Home)
    .use('/chat', Page);

  it('регистрация роута', () => {
    expect(router.routes[0]).to.be.an.instanceof(Route);
  }); 

});