import css from './FooterIcons.module.css';

import { FooterIcon } from '../../Atoms/FooterIcon/FooterIcon.jsx';

const FooterIcons = () => {
  return (
    <div className={css.footerIcons}>
      <FooterIcon socialMedia="facebook" />
      <FooterIcon socialMedia="youtube" />
      <FooterIcon socialMedia="twitter" />
      <FooterIcon socialMedia="instagram" />
    </div>
  );
};

export { FooterIcons };
