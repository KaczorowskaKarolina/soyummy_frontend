import css from './Avatar.module.css';

import { ReactComponent as PhotoPlaceholder } from '../../../images/icons/avatar-icon.svg';

const Avatar = ({ userName, photoUrl }) => {
  if (!photoUrl) {
    return (
      <div className={css.headerPlaceholder}>
        <PhotoPlaceholder />
      </div>
    );
  }

  return (
    <div className={css.headerPhoto}>
      <img src={photoUrl} alt={userName} />
    </div>
  );
};

export { Avatar };
