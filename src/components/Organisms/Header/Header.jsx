import css from './Header.module.css';

import { ReactComponent as HeaderLogo } from '../../../images/icons/logo-header-icon.svg';
import { ReactComponent as BurgerMenu } from '../../../images/icons/burger-icon.svg';
import { ReactComponent as Switch } from '../../../images/icons/switch-light-icon.svg';

import { Navbar } from 'components/Molecules/Navbar/Navbar.jsx';

import { Link } from 'react-router-dom';
import { UserLogo } from 'components/Molecules/UserLogo/UserLogo.jsx';
import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';

const Header = ({ openMenu }) => {
  const [nav, setNav] = useState(false);
  let width = window.innerWidth;

  return (
    <>
      <div className={css.container}>
        <div className={css.box}>
          <Link to="/" className={css.logo}>
            <HeaderLogo />
          </Link>
          {width < 1240 ? null : <Navbar />}
          <div className={css.rightContainer}>
            <UserLogo />
            <div
              onClick={() => {
                setNav(true);
              }}
              className={css.burgerMenu}
            >
              <BurgerMenu openMenu={openMenu} />
            </div>
            <div className={css.switch}>
              <Switch />
            </div>
          </div>
        </div>
      </div>
      {nav ? <Navigation closeMenu={setNav} /> : null}
    </>
  );
};

export { Header };
