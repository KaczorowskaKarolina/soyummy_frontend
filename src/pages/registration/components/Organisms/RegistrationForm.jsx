import { RectangleButton } from '../../../../components/Atoms/RectangleButton/RectangleButton.jsx';
import { RegistrationInputs } from '../Molecules/RegistrationInputs.jsx';
import { RegistrationLink } from '../Atoms/RegistrationLink.jsx';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  return (
    <form
      // action=""
      method="post"
      className={css.RegistrationForm}
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
