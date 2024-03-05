import css from './SharedLayout.module.css';

import { Header } from '../../Organisms/Header/Header.jsx';
import { Footer } from '../../Organisms/Footer/Footer.jsx';
import { Navigation } from '../../Organisms/Navigation/Navigation.jsx';

import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const SharedLayout = () => {
  const [menuState, setMenuState] = useState(false);
  const [title, setTitle] = useState('Title');

  /* default title will be an empty string */

  if (menuState) {
    return <Navigation closeMenu={setMenuState} />;
  }
  return (
    <div className={css.layout}>
      <Header openMenu={setMenuState} />
      <div className={css.titleBackground}></div>
      <h2 className={css.title}>{title}</h2>
      <Outlet context={[setTitle]} />
      <Footer />
    </div>
  );
};

export { SharedLayout };
