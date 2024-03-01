import css from './UserLogo.module.css';

import { Avatar } from 'components/Atoms/Avatar/Avatar.jsx';

const UserLogo = () => {
  return (
    <div className={css.userMenu}>
      <Avatar />
      <p className={css.userName}>Name</p>
    </div>
  );
};

export { UserLogo };
