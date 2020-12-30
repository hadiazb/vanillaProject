import Home from '../pages/Home/index';
import Contacto from '../pages/Contacto/index';
import SobreMe from '../pages/SobreMe/index';

const routes = [
  {
    path: '/',
    template: Home(),
  },
  {
    path: '/contact',
    template: Contacto(),
  },
  {
    path: '/aboutme',
    template: SobreMe(),
  },
];

export default routes;
