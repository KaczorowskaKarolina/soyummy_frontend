import { RecipeImageAtom } from '../../Atoms/recipeAtoms/RecipeImageAtom';
import { RecipeTitleAtom } from '../../Atoms/recipeAtoms/RecipeTitleAtom';
import css from './RecipeOrganism.module.css';

const RecipeOrganism = ({ imageSource, title, id }) => {
  return (
    <li className={css.RecipeOrganism} key={id}>
      <RecipeImageAtom imageSrc={imageSource} title={title} />
      <RecipeTitleAtom title={title} />
    </li>
  );
};

export { RecipeOrganism };
