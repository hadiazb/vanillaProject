import '../styles/Global.scss';
import Routes from './routes';
import Router from './router';

const router = new Router(
  Routes,
  document.getElementById('header'),
  document.getElementById('footer')
);

export default router;
