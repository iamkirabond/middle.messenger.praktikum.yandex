import Route from './routes';


class Router {

    static __instance: Router;
    routes: Route[];
    //@ts-ignore
    history: History;
    _currentRoute: null | Route;
    _rootQuery: string;


    constructor(rootQuery) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        //@ts-ignore
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname, block) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});

        this.routes.push(route);

        return this;
    }

    start() {
        window.onpopstate = (event => {
            this._onRoute(event.currentTarget.location.pathname);
        }).bind(this);

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname) {
        const route = this.getRoute(pathname);
        if (!route) {
            this.go('/404')
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render();
    }

    go(pathname) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname) {
        return this.routes.find(route => route.match(pathname));
    }
}

export default Router;