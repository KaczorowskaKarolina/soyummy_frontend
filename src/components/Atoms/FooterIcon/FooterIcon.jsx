import css from './FooterIcon.module.css';

import { ReactComponent as FacebookIcon } from '../../../images/icons/facebook-icon.svg';
import { ReactComponent as YoutubeIcon } from '../../../images/icons/youtube-icon.svg';
import { ReactComponent as TwitterIcon } from '../../../images/icons/twitter-icon.svg';
import { ReactComponent as InstagramIcon } from '../../../images/icons/instagram-icon.svg';

const FooterIcon = ({ socialMedia, color = 'green' }) => {
  const classes = `${css.footerIcon} ${css[color]}`;

  const socialMediaIcons = {
    facebook: FacebookIcon,
    youtube: YoutubeIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
  };

  const IconComponent = socialMediaIcons[socialMedia.toLowerCase()];

  return (
    <a href={`https://${socialMedia}.com`} className={css.footerLink}>
      <IconComponent className={classes} />
    </a>
  );
};

export { FooterIcon };
