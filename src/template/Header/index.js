import './style.scss';

const Header = () => `
    <nav class='header__nav'>
      <h4 class='header__nav-icono'>Icono</h4>
      <ul class='header__nav-list'>
        <li class='item'>
          <button class='item__button'>
            Home
          </button>
        </li>
        <li class='item'>
          <button class='item__button'>
            Contacto
          </button>
        </li>
        <li class='item'>
          <button class='item__button'>
            Sobre me
          </button>
        </li>
      </ul>
    </nav>
  `;

export default Header;
