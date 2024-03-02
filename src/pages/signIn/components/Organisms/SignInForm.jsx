import { RectangleButton } from '../../../../components/Atoms/RectangleButton/RectangleButton.jsx';
import { SignInInputs } from '../Molecules/SignInInputs.jsx';
import { SignInLink } from '../Atoms/SignInLink.jsx';
import css from './SignInForm.module.css';

const SignInForm = () => {
  return (
    <form
      // action=""
      method="post" 
      className={css.SignInForm}
      >
      <div className={css.SignInModal}>
        <h2 className={css.SignInTitle}>Sign In</h2>
        <SignInInputs />
        <div className={css.SignInButton}>
          <RectangleButton title="Sign In" size="large" type="submit"/>
        </div>
      </div>
      <SignInLink />
    </form>
  );
};

export { SignInForm };
