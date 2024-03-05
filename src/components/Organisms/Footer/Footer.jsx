import css from './Footer.module.css';

import { FooterIcons } from '../../Molecules/FooterIcons/FooterIcons.jsx';
import { FooterInfo } from '../../Molecules/FooterInfo/FooterInfo.jsx';
import { FooterLinks } from '../../Molecules/FooterLinks/FooterLinks.jsx';
import { Newsletter } from '../../Molecules/Newsletter/Newsletter.jsx';
import { RightsAndTerms } from '../../Molecules/RightsAndTerms/RightsAndTerms.jsx';

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.footerMain}>
        <div className={css.footerContent}>
          <FooterInfo />
          <FooterLinks />
          <Newsletter />
        </div>
        <FooterIcons />
      </div>
      <RightsAndTerms />
    </div>
  );
};

export { Footer };
