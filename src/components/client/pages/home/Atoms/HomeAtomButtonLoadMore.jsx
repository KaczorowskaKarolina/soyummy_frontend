import css from './HomeAtomButtonLoadMore.module.css';

const HomeAtomButtonLoadMore = ({ title, onClick }) => {
  return (
    <button
      className={css.HomeAtomButtonLoadMore}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export { HomeAtomButtonLoadMore };
