import router from './routes/index';

window.addEventListener('load', router.render());
window.addEventListener('hashchange', router.render());
console.log(router);
