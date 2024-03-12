const selectShoppingList = state => state.shoppingList.items;
const selectShoppingListError = state => state.shoppingList.error;
const selectShoppingListIsLoading = state => state.shoppingList.isLoading;

export {
  selectShoppingList,
  selectShoppingListError,
  selectShoppingListIsLoading,
};
