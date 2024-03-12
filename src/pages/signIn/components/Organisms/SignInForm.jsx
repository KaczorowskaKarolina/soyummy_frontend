import { RectangleButton } from '../../../../components/Atoms/RectangleButton/RectangleButton.jsx';
import { SignInInputs } from '../Molecules/SignInInputs.jsx';
import { SignInLink } from '../Atoms/SignInLink.jsx';
import css from './SignInForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../../../redux/auth/operations.js';

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(login({ email: form.email.value, password: form.password.value }));
    form.reset();
  };
  return (
    <form
      // action=""
      method="post"
      className={css.SignInForm}
      onSubmit={handleSubmit}
    >
      <div className={css.SignInModal}>
        <h2 className={css.SignInTitle}>Sign In</h2>
        <SignInInputs />
        <div className={css.SignInButton}>
          <RectangleButton title="Sign In" size="large" type="submit" />
        </div>
      </div>
      <SignInLink />
    </form>
  );
};

export { SignInForm };
