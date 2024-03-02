// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HomeOrganism } from '../Organisms/HomeOrganism';
import { HomeAtomButtonLoadMore } from '../Atoms/HomeAtomButtonLoadMore';

import css from './HomeTemplate.module.css';

const HomeTemplate = ({ recipesByCategory }) => {
  const navigate = useNavigate();
  const handleLoadMore = () => {
    navigate('/categories/Breakfast', { replace: true });
  };
  return (
    <div className={css.HomeTemplate}>
      <HomeOrganism recipesByCategory={recipesByCategory} />
      <HomeAtomButtonLoadMore
        text="Other categories"
        onClick={handleLoadMore}
      />
    </div>
  );
};

export { HomeTemplate };
