import css from './Navbar.module.css';
import links from './links.json';

import { NavigationLink } from 'components/Atoms/NavigationLink/NavigationLink.jsx';

const Navbar = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        {links.map((link, index) => (
          <li key={index}>
            <NavigationLink
              path={link.path}
              title={link.title}
              icon={link.icon}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
