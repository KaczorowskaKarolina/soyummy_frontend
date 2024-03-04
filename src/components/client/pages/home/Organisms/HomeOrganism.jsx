import { nanoid } from 'nanoid';

import { CategoryAtom } from '../Atoms/CategoryAtom.jsx';
import { HomeAtomButton } from '../Atoms/HomeAtomButton.jsx';
import { HomeAtomLinkButton } from '../Atoms/HomeAtomLinkButton.jsx';

import css from './HomeOrganism.module.css';
import { HomeMolecule } from '../Molecules/HomeMolecule.jsx';

const HomeOrganism = ({ recipesByCategory }) => {
  return recipesByCategory.map(recipeByCategory => {
    const id = nanoid();
    const { title } = recipeByCategory;
    return (
      <ul className={css.HomeOrganism} key={id}>
        <CategoryAtom title={title} />
        <HomeMolecule recipeByCategory={recipeByCategory} />
        <HomeAtomLinkButton title={title}>
          <HomeAtomButton text={'See all'} />
        </HomeAtomLinkButton>
      </ul>
    );
  });
};

export { HomeOrganism };
