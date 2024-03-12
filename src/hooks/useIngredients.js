import { useSelector } from 'react-redux';
import {
  selectIngredientsLoading,
  selectIngredients,
  selectIngredientsError,
} from '../redux/ingredients/selector';

const useShopping = () => {
  const isLoading = useSelector(selectIngredientsLoading);
  const ingredients = useSelector(selectIngredients);
  const error = useSelector(selectIngredientsError);

  return {
    isLoading,
    ingredients,
    error,
  };
};

export default useShopping;
