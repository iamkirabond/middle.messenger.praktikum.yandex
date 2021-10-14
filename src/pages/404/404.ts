// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../utils/block/block';
import { ErrorTmpl } from '../../templates/Error/Error.tmpl';
import './404.scss';

const templateForm = Handlebars.compile(ErrorTmpl);

class Error404 extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    const data = this.props;
    console.log(data);
    return templateForm({
      error: data.error,
      description: data.description,
    });
  }
}

export default Error404;
