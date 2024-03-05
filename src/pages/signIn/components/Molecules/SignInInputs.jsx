import { FormInput } from '../../../../components/Atoms/FormInput/FormInput.jsx'
import css from './SignInInputs.module.css';

const SignInInputs = () => {
  return (
    <div className={css.SignInInputs}>
      <FormInput type="email" inputName="email" placeholder="Email"/>
      <FormInput type="password" inputName="password" placeholder="Password"/>
    </div>
  );
};

export { SignInInputs };
