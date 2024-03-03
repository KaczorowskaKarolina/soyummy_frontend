import { nanoid } from 'nanoid';

import { RecipeOrganism } from '../Organisms/recipeOrganisms/RecipeOrganism';

import css from './RecipeTemplate.module.css';

const RecipeTemplate = ({ recipes }) => {
  return (
    <ul className={css.RecipeTemplate}>
      {recipes &&
        recipes.map(recipe => (
          <RecipeOrganism
            key={nanoid()}
            imageSource={recipe.thumb}
            title={recipe.title}
          />
        ))}
    </ul>
  );
};

export { RecipeTemplate };
