import css from './Footer.module.css';

import { FooterIcons } from 'components/Molecules/FooterIcons/FooterIcons.jsx';
import { FooterInfo } from 'components/Molecules/FooterInfo/FooterInfo.jsx';
import { FooterLinks } from 'components/Molecules/FooterLinks/FooterLinks.jsx';
import { Newsletter } from 'components/Molecules/Newsletter/Newsletter.jsx';
import { RightsAndTerms } from 'components/Molecules/RightsAndTerms/RightsAndTerms.jsx';

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
