// import { useDispatch } from 'react-redux';

import { HomeOrganism } from '../Organisms/HomeOrganism';
// import { changeQuery } from 'client/redux/categories/operations';
import { HomeAtomButtonLoadMore } from '../Atoms/HomeAtomButtonLoadMore';

import css from './HomeTemplate.module.css';

const HomeTemplate = ({ recipesByCategory }) => {
  const handleLoadMore = () => {
    console.log('Load more button');
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
