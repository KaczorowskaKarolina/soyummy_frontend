import css from './Avatar.module.css';

import { ReactComponent as PhotoPlaceholder } from '../../../images/icons/avatar-icon.svg';

const Avatar = ({ userName, photoUrl, Header }) => {
  if (photoUrl && Header) {
    return (
      <div className={css.HeaderPhoto}>
        <img src={photoUrl} alt={userName} />
      </div>
    );
  } else if (Header) {
    return (
      <div className={css.HeaderPlaceholder}>
        <PhotoPlaceholder />
      </div>
    );
  } else if (photoUrl) {
    return (
      <div className={css.HeaderPhoto}>
        <img src={photoUrl} alt={userName} />
      </div>
    );
  } else {
    return (
      <div className={css.HeaderPlaceholder}>
        <PhotoPlaceholder />
      </div>
    );
  }
};

export { Avatar };
