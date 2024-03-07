import css from './RecipeTitleAtom.module.css';

const RecipeTitleAtom = ({ title }) => {
  return <p className={css.RecipeTitleAtom}>{title}</p>;
};

export { RecipeTitleAtom };
