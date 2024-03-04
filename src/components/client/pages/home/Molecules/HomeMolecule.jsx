import { nanoid } from 'nanoid';

import { RecipeOrganism } from '../../categories/components/Organisms/recipeOrganisms/RecipeOrganism.jsx';
import { CheckMediaQuery } from '../helpers.jsx';

import css from '../Organisms/HomeOrganism.module.css';
import categoryPageCss from '../../categories/components/Templates/RecipeTemplate.module.css';

const HomeMolecule = ({ recipeByCategory }) => {
  const countOfElement = CheckMediaQuery();
  return (
    <ul className={categoryPageCss.RecipeTemplate}>
      {recipeByCategory.recipes.map((recipe, index) => {
        for (let i = 0; i < countOfElement; i++) {
          if (index < countOfElement) {
            const id = nanoid();
            const { thumb, title: recipeTitle } = recipe;
            return (
              <RecipeOrganism
                className={css.HomeOrganismButton}
                key={id}
                imageSource={thumb}
                title={recipeTitle}
              />
            );
          }
        }
        return null;
      })}
    </ul>
  );
};

export { HomeMolecule };
