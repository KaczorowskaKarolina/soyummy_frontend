import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchRecipes } from 'client/redux/recipes/operations.js';
import {
  changeQuery,
  fetchAllCategories,
} from 'client/redux/categories/operations.js';
import { RecipeTemplate } from './components/Templates/RecipeTemplate.jsx';
import { CategoryTemplate } from 'client/pages/categories/components/Templates/CategoryTemplate.jsx';

const CategoriesPage = () => {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(changeQuery(null));
        const fetchAllCategoriesFromDB = await dispatch(fetchAllCategories());
        const allCategories = fetchAllCategoriesFromDB.payload.map(
          category => category.title
        );
        setCategories(allCategories);

        const allRecipes = await dispatch(fetchRecipes());
        const filteredRecipes = allRecipes.payload.filter(
          recipe => recipe.category === categoryName
        );
        setRecipes(filteredRecipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch, categoryName]);

  return (
    <div>
      <CategoryTemplate titles={categories} name={categoryName} />
      <RecipeTemplate recipes={recipes} />
    </div>
  );
};

export { CategoriesPage };
