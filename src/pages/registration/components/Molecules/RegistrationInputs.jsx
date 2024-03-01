import { FormInput } from '../../../../components/Atoms/FormInput/FormInput.jsx';
import css from './RegistrationInputs.module.css';

const RegistrationInputs = () => {
  return (
    <div className={css.RegistrationInputs}>
      <FormInput type="name" inputName="name" placeholder="Name"/>
      <FormInput type="email" inputName="email" placeholder="Email"/>
      <FormInput type="password" inputName="password" placeholder="Password"/>
    </div>
  );
};

export { RegistrationInputs };
