import Header from './template/Header/index';
import Footer from './template/Footer/index';
import './styles/Global.scss';

document.getElementById('header').innerHTML = Header();
document.getElementById('footer').innerHTML = Footer();
