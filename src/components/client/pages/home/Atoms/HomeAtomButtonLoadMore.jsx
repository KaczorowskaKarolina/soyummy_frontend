import css from './HomeAtomButtonLoadMore.module.css';

const HomeAtomButtonLoadMore = ({ text, onClick }) => {
  return (
    <button
      className={css.HomeAtomButtonLoadMore}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { HomeAtomButtonLoadMore };
