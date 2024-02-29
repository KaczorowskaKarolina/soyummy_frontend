import { Link } from 'react-router-dom';
import css from './SignInLink.module.css';

const SignInLink = () => {
  return (
    <Link to="/registration" className={css.SignInLink}>
      Registration
    </Link>
  );
};

export { SignInLink };
