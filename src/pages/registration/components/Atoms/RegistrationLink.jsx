import { Link } from 'react-router-dom';
import css from './RegistrationLink.module.css';

const RegistrationLink = () => {
  return (
    <Link to="/signin" className={css.RegistrationLink}>
      Sign in
    </Link>
  );
};

export { RegistrationLink };
