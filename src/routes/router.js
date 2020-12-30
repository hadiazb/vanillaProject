import Footer from '../template/Footer/index';
import Header from '../template/Header/index';

class Router {
  constructor(routes, header, footer) {
    this.routes = routes;
    this.loadInitialRoute();
    this.header = header;
    this.footer = footer;
  }

  async loadRoute(...urlSegs) {
    const matchedRoute = this.matchUrlToRoute(urlSegs);
    const url = `/${urlSegs.join('/')}`;
    history.pushState({}, 'this works', url);

    const routerOutElm = document.getElementById('content');
    routerOutElm.innerHTML = matchedRoute.template;
  }

  matchUrlToRoute(urlSegs) {
    const matchedRoute = this.routes.find((route) => {
      const routePathSegs = route.path.split('/').slice(1);

      if (routePathSegs.length !== urlSegs.length) {
        return false;
      }

      return routePathSegs.every(
        (routePathSeg, i) => routePathSeg === urlSegs[i]
      );
    });

    return matchedRoute;
  }

  loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split('/');
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : '';

    this.loadRoute(...pathSegs);
  }

  async render() {
    this.header.innerHTML = await Header();
    this.footer.innerHTML = await Footer();
  }
}

export default Router;
