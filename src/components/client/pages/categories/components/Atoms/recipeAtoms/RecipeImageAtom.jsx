import css from './RecipeImageAtom.module.css';

const RecipeImageAtom = ({ imageSrc, title }) => {
  return <img className={css.RecipeImageAtom} src={imageSrc} alt={title}></img>;
};

export { RecipeImageAtom };
