import css from './RightsAndTerms.module.css';

const RightsAndTerms = () => {
  return (
    <div className={css.rightsAndTerms}>
      <p className={css.rights}>© 2023 All Rights Reserved.</p>
      <a href="www.google.com" className={css.terms}>
        Terms of Service
      </a>
    </div>
  );
};

export { RightsAndTerms };
