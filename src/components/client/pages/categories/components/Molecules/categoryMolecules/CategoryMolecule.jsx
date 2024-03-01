import { useState } from 'react';
import { CategoryAtom } from '../../Atoms/categoryAtoms/CategoryAtom';
import css from './CategoryMolecule.module.css';

const CategoryMolecule = ({ title }) => {
  const [isActiveButton, setIsActiveButton] = useState(false);
  const handleClick = () => {
    setIsActiveButton(true);
  };
  return (
    <li className={css.categoryMolecule} key={title}>
      <CategoryAtom
        title={title}
        onClick={handleClick}
        isActive={isActiveButton}
      />
    </li>
  );
};

export { CategoryMolecule };
