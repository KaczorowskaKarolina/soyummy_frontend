import PageImage from '../../../../images/pages/registerSignInPage/register-signin-image.png'
import { SignInForm } from '../Organisms/SignInForm.jsx'
import css from './SignInTemplate.module.css';

const SignInTemplate = () => {
  return (
    <div className={css.SignInTemplate}>
      <img
        src={PageImage}
        alt="A person using the So Yummy App."
        className={css.SignInImage}
      />
      <SignInForm />
      <div className={css.trapezoid}></div>
    </div>
  );
};

export { SignInTemplate };
