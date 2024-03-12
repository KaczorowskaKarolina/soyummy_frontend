import { RectangleButton } from '../../../../components/Atoms/RectangleButton/RectangleButton.jsx';
import { RegistrationInputs } from '../Molecules/RegistrationInputs.jsx';
import { RegistrationLink } from '../Atoms/RegistrationLink.jsx';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../../../redux/auth/operations.js';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
  };
  return (
    <form
      // action=""
      method="post"
      className={css.RegistrationForm}
      onSubmit={handleSubmit}
    >
      <div className={css.RegistrationModal}>
        <h2 className={css.RegistrationTitle}>Registration</h2>
        <RegistrationInputs />
        <div className={css.RegistrationButton}>
          <RectangleButton title="Sign Up" size="large" type="submit" />
        </div>
      </div>
      <RegistrationLink />
    </form>
  );
};

export { RegistrationForm };
