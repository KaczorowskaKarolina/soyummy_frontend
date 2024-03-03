// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';

// import { HomeTemplate } from './Templates/HomeTemplate';
// import { fetchRecipes } from 'client/redux/recipes/operations';
// import {
//   changeQuery,
//   fetchCategories,
// } from 'client/redux/categories/operations';
// import { selectQuery } from 'client/redux/categories/selectors';

// const HomePage = () => {
//     const [recipesByCategory, setRecipesByCategory] = useState([]);
//     const categoriesOnPage = useSelector(selectQuery);
//     const dispatch = useDispatch();

//     //Get only first 4 categories with recipes examples
//     useEffect(() => {
//       dispatch(changeQuery(0));
//     }, [dispatch]);

//     //Create an object for element: recipe title and categories by title
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const categoriesResponse = await dispatch(fetchCategories());
//           const allCategories = await categoriesResponse.payload;
//           const recipesByCategory = [];
//           allCategories.map(category =>
//             recipesByCategory.push({
//               title: category.title,
//               recipes: [],
//             })
//           );

//           //Get recipes from DB/Redux

//           const recipesResponse = await dispatch(fetchRecipes());
//           const allRecipes = await recipesResponse.payload;

//           //Add to the object recipes by title
//           allRecipes.map(recipe => {
//             const currentRecipe = recipe;
//             const category = recipe.category;
//             return recipesByCategory.map(recipe => {
//               if (recipe.title === category) {
//                 recipe.recipes.push(currentRecipe);
//               }
//               return recipe;
//             });
//           });

//           setRecipesByCategory(recipesByCategory);
//         } catch (err) {
//           console.log(err);
//         }
//       };
//       fetchData();
//     }, [categoriesOnPage, dispatch]);
//     return (
//       <HomeTemplate
//         recipesByCategory={recipesByCategory}
//       />
//     );
//   };

// export { HomePage };
