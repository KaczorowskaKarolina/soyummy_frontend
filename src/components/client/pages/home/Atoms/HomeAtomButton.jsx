import css from './HomeAtomButton.module.css';

const HomeAtomButton = ({ text }) => {
  return (
    <button className={css.HomeAtomButton} type="button">
      {text}
    </button>
  );
};

export { HomeAtomButton };
