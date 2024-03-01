import css from './SharedLayout.module.css';

import { Header } from 'components/Organisms/Header/Header.jsx';
import { Footer } from 'components/Organisms/Footer/Footer.jsx';
import { Navigation } from 'components/Organisms/Navigation/Navigation.jsx';

import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const SharedLayout = () => {
  const [menuState, setMenuState] = useState(false);

  if (menuState) {
    return <Navigation closeMenu={setMenuState} />;
  }
  return (
    <div className={css.container}>
      <Header openMenu={setMenuState} />
      <div className={css.titleBox}>
        <h2 className={css.title}>Title</h2>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export { SharedLayout };
