import css from './FooterTitle.module.css';

import { ReactComponent as FooterLogo } from '../../../images/icons/logo-footer-icon.svg';

const FooterTitle = () => {
  return (
    <div className={css.footerTitle}>
      <div className={css.footerLogo}>
        <FooterLogo />
      </div>
      <h2 className={css.footerTitleText}>So Yummy</h2>
    </div>
  );
};

export { FooterTitle };
