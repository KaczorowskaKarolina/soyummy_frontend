// import { Link } from 'react-router-dom';
import css from './SignInLink.module.css';

const SignInLink = () => {
  return (
    <h1 to="/registration" className={css.SignInLink}>
      Registration
    </h1>
  );
};

export { SignInLink };
