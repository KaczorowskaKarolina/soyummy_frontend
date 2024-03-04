import { nanoid } from 'nanoid';

import { CategoryAtom } from '../Atoms/CategoryAtom.jsx';
import { CheckMediaQuery } from '../helpers.jsx';
import { HomeAtomButton } from '../Atoms/HomeAtomButton.jsx';
import { HomeAtomLinkButton } from '../Atoms/HomeAtomLinkButton.jsx';
import { RecipeOrganism } from '../../categories/components/Organisms/recipeOrganisms/RecipeOrganism.jsx';

import css from './HomeOrganism.module.css';
import categoryPageCss from '../../categories/components/Templates/RecipeTemplate.module.css';

const HomeOrganism = ({ recipesByCategory }) => {
  const countOfElement = CheckMediaQuery();

  return recipesByCategory.map(recipeByCategory => (
    <ul className={css.HomeOrganism} key={nanoid()}>
      <CategoryAtom title={recipeByCategory.title} />
      <ul className={categoryPageCss.RecipeTemplate}>
        {recipeByCategory.recipes.map((recipe, index) => {
          for (let i = 0; i < countOfElement; i++) {
            if (index < countOfElement) {
              return (
                <RecipeOrganism
                  className={css.HomeOrganismButton}
                  key={nanoid()}
                  imageSource={recipe.thumb}
                  title={recipe.title}
                />
              );
            }
          }
          return null;
        })}
      </ul>
      <HomeAtomLinkButton title={recipeByCategory.title}>
        <HomeAtomButton text={'See all'} />
      </HomeAtomLinkButton>
    </ul>
  ));
};

export { HomeOrganism };
