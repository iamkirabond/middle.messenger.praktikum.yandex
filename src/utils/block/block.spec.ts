import Block from './block';
// @ts-ignore
import Handlebars from 'handlebars';
import {expect} from 'chai';
 
 
class TestBlock extends Block {
    constructor() {
        super('div', {
            templateContent: 'Just a reqular string!',
            template: '<span>{{templateContent}}</span>',
            events: {
                click: (e: Event) => {
                    console.log(e);
                },
            },
        });
    }

    render() {
        const piece = Handlebars.compile(this.props.template);
        return piece({templateContent: this.props.templateContent});
    }
}

describe('Проверка блока', () => {
    const testBlock = new TestBlock();
    const par = testBlock.getContent().querySelector('span');

    it('использование props', () => {
        expect(par!.textContent, 'Just a reqular string!');
    });
});