import css from './CategoryOrganism.module.css';
import { CategoriesText } from '../../Atoms/categoryAtoms/CategoriesText';
import { CategoryMolecule } from '../../Molecules/categoryMolecules/CategoryMolecule';

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
