import css from './FooterInfo.module.css';

import { FooterTitle } from '../FooterTitle/FooterTitle.jsx';

const FooterInfo = () => {
  return (
    <div className={css.footerInfo}>
      <FooterTitle />
      <ul className={css.footerInfoText}>
        <li>Database of recipes that can be replenished </li>
        <li>Flexible search for desired and unwanted ingredients</li>
        <li>Ability to add your own recipes with photos</li>
        <li>Convenient and easy to use</li>
      </ul>
    </div>
  );
};

export { FooterInfo };
