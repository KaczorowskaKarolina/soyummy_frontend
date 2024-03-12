const selectIngredients = state => state.ingredients.items;
const selectIngredientsError = state => state.ingredients.error;
const selectIngredientsLoading = state => state.ingredients.isLoading;

export { selectIngredients, selectIngredientsError, selectIngredientsLoading };
