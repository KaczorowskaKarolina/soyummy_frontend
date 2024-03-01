import css from './Navigation.module.css';

import { ReactComponent as LogoIcon } from '../../../images/icons/logo-header-icon.svg';
import { ReactComponent as CloseIcon } from '../../../images/icons/close-icon.svg';
import { ReactComponent as Switch } from '../../../images/icons/switch-light-icon.svg';

import { Navbar } from 'components/Molecules/Navbar/Navbar.jsx';

import { Link } from 'react-router-dom';

const Navigation = ({ closeMenu }) => {
  return (
    <div className={css.container}>
      <div className={css.icons}>
        <Link
          to="/"
          onClick={() => {
            closeMenu(false);
          }}
          className={css.logo}
        >
          <LogoIcon />
        </Link>
        <button
          onClick={() => {
            closeMenu(false);
          }}
          className={css.closeButton}
        >
          <CloseIcon />
        </button>
      </div>
      <Navbar />
      <div className={css.switch}>
        <Switch />
      </div>
    </div>
  );
};

export { Navigation };
