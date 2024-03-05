import css from './FooterLinks.module.css';

import { FooterLink } from 'components/Atoms/FooterLink/FooterLink.jsx';

const FooterLinks = () => {
  return (
    <div className={css.footerLinks}>
      <FooterLink title="Ingredients" link="*" />
      <FooterLink title="Add recipes" link="add" />
      <FooterLink title="My recipes" link="my" />
      <FooterLink title="Favorites" link="favorite" />
      <FooterLink title="Shopping list" link="shopping-list" />
    </div>
  );
};

export { FooterLinks };
