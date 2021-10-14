import Block from './block';

class Route {
    _pathname: string;
    _blockClass: any;
    _block: null | Block;
    _props: {[key: string]: any};


    constructor(pathname, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }


    _isEqual(lhs, rhs) {
        return lhs === rhs;
    }

    _render(query, block) {
        const root = document.querySelector(query);
        root.innerHTML = '';
        root.appendChild(block.getContent());
        return root;
    }
  

    navigate(pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname) {
        return this._isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            this._render(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}

export default Route;