import { Link } from 'react-router-dom';

import { CurvedButton } from 'components/Atoms/CurvedButton/CurvedButton.jsx';
import css from './StartPageButtons.module.css';

const StartPageButtons = () => {
  return (
    <div className={css.StartPageButtons}>
      <Link to="/registration">
        <CurvedButton title="Registration" greenOrBlack="green" />
      </Link>
      <Link to="/signin">
        <CurvedButton title="Login" />
      </Link>
    </div>
  );
};

export { StartPageButtons };
