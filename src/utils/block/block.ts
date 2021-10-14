import { EventBus }  from '../eventBus'

class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    _meta: {tagName:string, props: {[key: string]: any}};
    _element: HTMLElement;
    eventBus: () => EventBus;
    props: {[key: string]: any};


    constructor(tagName:string = "div", props: object = {}) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    componentDidMount() {}

    _componentDidUpdate(oldProps: {[key: string]: any}, newProps: {[key: string]: any}) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }

    componentDidUpdate(oldProps: {[key: string]: any}, newProps: {[key: string]: any}) {
        return true;
    }

    setProps = (nextProps: {[key: string]: any}) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    // @ts-ignore
    get element() {
        return this._element;
    }

    _render() {
        const block: string = this.render();
        this._removeEvents();
        this._element.innerHTML = block;
        this._addEvents();
    }

    render() {
        return '';
    }

    _addEvents() {
        const {events = {}} = this.props;

        Object.keys(events).forEach(eventName => {
            this._element.addEventListener(eventName, events[eventName]);
        });
    }

    _removeEvents() {
        const {events = {}} = this.props;

        Object.keys(events).forEach(eventName => {
            this._element.removeEventListener(eventName, events[eventName]);
        });
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props) {
        const self = this;

        return new Proxy(props, {
            get(target: {[key: string]: any}, prop: string) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set: (target: { [key: string]: any; }, prop: string, value: any) => {
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }
}

export default Block;