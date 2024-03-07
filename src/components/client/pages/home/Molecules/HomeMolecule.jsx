import { nanoid } from 'nanoid';

import { RecipeOrganism } from '../../categories/components/Organisms/recipeOrganisms/RecipeOrganism.jsx';
import { CheckMediaQuery } from '../helpers.jsx';

import css from '../Organisms/HomeOrganism.module.css';
import categoryPageCss from '../../categories/components/Templates/RecipeTemplate.module.css';

const HomeMolecule = ({ recipeByCategory }) => {
  const countOfElement = CheckMediaQuery();
  const items = recipeByCategory.recipes
    .slice(0, countOfElement)
    .map(recipe => {
      const id = nanoid();
      const { thumb, title } = recipe;
      return (
        <RecipeOrganism
          className={css.HomeOrganismButton}
          key={id}
          imageSource={thumb}
          title={title}
        />
      );
    });
  return <ul className={categoryPageCss.RecipeTemplate}>{items}</ul>;
};

export { HomeMolecule };
