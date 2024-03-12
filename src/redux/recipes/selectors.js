const selectRecipes = state => state.recipes.items;
const selectRecipesError = state => state.recipes.error;
const selectRecipesIsLoading = state => state.recipes.isLoading;
const selectRecipesPageAmount = state => state.recipes.pageAmount;

export {
  selectRecipes,
  selectRecipesError,
  selectRecipesIsLoading,
  selectRecipesPageAmount,
};
