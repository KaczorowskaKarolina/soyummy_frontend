// import { Link } from 'react-router-dom';
import css from './RegistrationLink.module.css';

const RegistrationLink = () => {
  return (
    
    <h2 to="/signin" className={css.RegistrationLink}>
      Sign in
    </h2>
  );
};

export { RegistrationLink };
