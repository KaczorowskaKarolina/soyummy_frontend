import css from './NewsletterForm.module.css';

import { FormInput } from 'components/Atoms/FormInput/FormInput.jsx';
import { RectangleButton } from 'components/Atoms/RectangleButton/RectangleButton.jsx';

const NewsletterForm = () => {
  return (
    <div className={css.newsletterForm}>
      <div className={css.newsletterFormInput}>
        <FormInput
          type="email"
          inputName="email"
          placeholder="Enter your email address"
          destination="newsletter"
        />
      </div>
      <div className={css.newsletterFormButton}>
        <RectangleButton title="Subscribe" size="large" />
      </div>
    </div>
  );
};

export { NewsletterForm };
