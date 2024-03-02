import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoryAtom } from '../../Atoms/categoryAtoms/CategoryAtom';

import css from './CategoryMolecule.module.css';

const CategoryMolecule = ({ title }) => {
  const { categoryName } = useParams();
  const [isActiveButton, setIsActiveButton] = useState(false);
  // const handleClick = () => {
  //   setIsActiveButton(true);
  // };
  useEffect(() => {
    if (categoryName === title) {
      console.log('here we are');
      setIsActiveButton(true);
    }
  }, []);

  return (
    <li className={css.categoryMolecule} key={title}>
      <CategoryAtom
        title={title}
        // onClick={handleClick}
        isActive={isActiveButton}
      />
    </li>
  );
};

export { CategoryMolecule };
