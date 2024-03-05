const selectCategories = state => state.categories.items;
const selectCategoriesError = state => state.categories.error;
const selectCategoriesLoading = state => state.categories.isLoading;

export { selectCategories, selectCategoriesError, selectCategoriesLoading };
