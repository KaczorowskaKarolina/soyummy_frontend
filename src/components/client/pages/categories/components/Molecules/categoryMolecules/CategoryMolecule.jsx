import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoryAtom } from '../../Atoms/categoryAtoms/CategoryAtom';

import css from './CategoryMolecule.module.css';

const CategoryMolecule = ({ title }) => {
  const { categoryName } = useParams();
  const [isActiveButton, setIsActiveButton] = useState(false);
  useEffect(() => {
    if (categoryName === title) {
      setIsActiveButton(true);
    }
  }, [categoryName, title]);

  return (
    <li className={css.categoryMolecule} key={title}>
      <CategoryAtom title={title} isActive={isActiveButton} />
    </li>
  );
};

export { CategoryMolecule };
