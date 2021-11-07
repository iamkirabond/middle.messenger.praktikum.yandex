import { expect } from 'chai';
import HTTPrequest from './HTTPRequest';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
let request= new HTTPrequest(API_URL);

describe('Проверяем запросы', () => {


    it('проверяем post', () => {
        const path = '/posts';
        let data = {
            title: 'foo',
            body: 'bar',
            userId: 1,
          };

        const correctAns = {
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1
          };
        request.post(API_URL + path, {data})
            .then((response: string) => JSON.parse(response))
            .then((json) => {
                expect(json.title, correctAns.title);
            });
    });

    it('проверяем put', () => {
        const path = '/posts/1';
        let data = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
          };

        const correctAns = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
          };
        request.put(API_URL + path, {data})
            .then((response: string) => JSON.parse(response))
            .then((json) => {
                expect(json.title, correctAns.title);
            });

    });
    it('проверяем get', () => {
        const path = '/todos/1';
    
        const correctAns = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
          };
        request.put(API_URL + path)
            .then((response: string) => JSON.parse(response))
            .then((json) => {
                expect(json.title, correctAns.title);
            });

    });
});