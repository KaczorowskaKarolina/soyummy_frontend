import { nanoid } from 'nanoid';

import { CategoryAtom } from '../Atoms/CategoryAtom.jsx';
import { HomeAtomLinkButton } from '../Atoms/HomeAtomLinkButton.jsx';

import css from './HomeOrganism.module.css';
import { HomeMolecule } from '../Molecules/HomeMolecule.jsx';
import { RectangleButton } from 'components/Atoms/RectangleButton/RectangleButton.jsx';

const HomeOrganism = ({ recipesByCategory }) => {
  return recipesByCategory.map(recipeByCategory => {
    const id = nanoid();
    const { title } = recipeByCategory;
    return (
      <ul className={css.HomeOrganism} key={id}>
        <CategoryAtom title={title} />
        <HomeMolecule recipeByCategory={recipeByCategory} />
        <HomeAtomLinkButton title={title}>
          <div className={css.buttonLoadMore}>
            <RectangleButton title={'See all'} size={'small'} />
          </div>
        </HomeAtomLinkButton>
      </ul>
    );
  });
};

export { HomeOrganism };
