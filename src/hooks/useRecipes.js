import { useSelector } from 'react-redux';
import {
  selectRecipesIsLoading,
  selectRecipes,
  selectRecipesPageAmount,
  selectRecipesError,
} from '../redux/recipes/selector';

const useRecipes = () => {
  const isLoading = useSelector(selectRecipesIsLoading);
  const pageAmount = useSelector(selectRecipesPageAmount);
  const recipes = useSelector(selectRecipes);
  const error = useSelector(selectRecipesError);

  return {
    isLoading,
    recipes,
    pageAmount,
    error,
  };
};

export default useRecipes;
