import { CategoriesText } from '../../Atoms/categoryAtoms/CategoriesText';
import { CategoryMolecule } from '../../Molecules/categoryMolecules/CategoryMolecule';

import css from './CategoryOrganism.module.css';

const CategoryOrganism = ({ titles }) => {
  return (
    <div>
      <CategoriesText />
      <ul className={css.CategoryOrganism}>
        {titles && titles.map(el => <CategoryMolecule title={el} key={el} />)}
      </ul>
    </div>
  );
};

export { CategoryOrganism };
