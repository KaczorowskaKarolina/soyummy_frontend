import css from './FooterLink.module.css';

import { Link } from 'react-router-dom';

const FooterLink = ({ title, link }) => {
  return (
    <Link to={`/${link}`} className={css.footerLink}>
      <li>{title}</li>
    </Link>
  );
};

export { FooterLink };
