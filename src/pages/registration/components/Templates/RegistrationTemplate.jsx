import PageImage from '../../../../images/pages/registerSignInPage/register-signin-image.png';
import { RegistrationForm } from '../Organisms/RegistrationForm.jsx';
import css from './RegistrationTemplate.module.css';

const RegistrationTemplate = () => {
  return (
    <div className={css.RegistrationTemplate}>
      <img
        src={PageImage}
        alt="A person using the So Yummy App."
        className={css.RegistrationImage}
      />
      <RegistrationForm />
      <div className={css.trapezoid}></div>
    </div>
  );
};

export { RegistrationTemplate };
