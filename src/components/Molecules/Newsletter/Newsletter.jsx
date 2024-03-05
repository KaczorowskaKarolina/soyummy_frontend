import css from './Newsletter.module.css';

import { NewsletterForm } from '../NewsletterForm/NewsletterForm.jsx';

const Newsletter = () => {
  return (
    <div className={css.newsletter}>
      <div className={css.newsletterAddon}>
        <h3 className={css.newsletterTitle}>Subscribe to our Newsletter</h3>
        <p className={css.newsletterText}>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </p>
      </div>
      <NewsletterForm />
    </div>
  );
};

export { Newsletter };
