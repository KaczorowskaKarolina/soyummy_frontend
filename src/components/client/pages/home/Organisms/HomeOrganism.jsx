import { nanoid } from 'nanoid';
import { useMediaQuery } from '@mui/material';

import { HomeAtomButton } from '../Atoms/HomeAtomButton.jsx';
import { HomeAtomLinkButton } from '../Atoms/HomeAtomLinkButton.jsx';
import { CategoryAtom } from '../../categories/components/Atoms/categoryAtoms/CategoryAtom.jsx';
import { RecipeOrganism } from '../../categories/components/Organisms/recipeOrganisms/RecipeOrganism.jsx';

import css from './HomeOrganism.module.css';
import categoryPageCss from '../../categories/components/Templates/RecipeTemplate.module.css';

const HomeOrganism = ({ recipesByCategory }) => {
  console.log(recipesByCategory.map(recipe => recipe));
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
        <HomeAtomButton text="See all" />
      </HomeAtomLinkButton>
    </ul>
  ));
};

function CheckMediaQuery() {
  const matchesMobile = useMediaQuery('(min-width:20rem)');
  const matchesTablet = useMediaQuery('(min-width:30rem)');
  const matchesDesktop = useMediaQuery('(min-width:48rem)');

  if (matchesDesktop) {
    return 4;
  }
  if (matchesTablet) {
    return 2;
  }
  if (matchesMobile) {
    return 1;
  }
}

export { HomeOrganism };
