import css from './Header.module.css';

import { ReactComponent as HeaderLogo } from '../../../images/icons/logo-header-icon.svg';
import { ReactComponent as BurgerMenu } from '../../../images/icons/burger-icon.svg';
import { ReactComponent as Switch } from '../../../images/icons/switch-light-icon.svg';

import { Navbar } from '../../Molecules/Navbar/Navbar.jsx';
import { UserLogo } from '../../Molecules/UserLogo/UserLogo.jsx';
import { Navigation } from '../Navigation/Navigation';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { CheckMediaQuery } from './helpers.js';

const Header = ({ openMenu }) => {
  const [nav, setNav] = useState(false);
  const isDesktop = CheckMediaQuery();

  return (
    <>
      <div className={css.container}>
        <div className={css.box}>
          <Link to="/" className={css.logo}>
            <HeaderLogo />
          </Link>
          {isDesktop ? <Navbar /> : null}
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
