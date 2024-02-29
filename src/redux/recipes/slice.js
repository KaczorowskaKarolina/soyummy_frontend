import { createSlice } from '@reduxjs/toolkit';
import {
  addRecipe,
  fetchRecipes,
  fetchOneRecipe,
  fetchFavorites,
  deleteRecipe,
  fetchRecipesByCategory,
  fetchRecipesByIngredient,
  deleteFromFavorites,
} from './operations.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const clearLoadingError = state => {
  state.isLoading = false;
  state.error = null;
};

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    pageAmount: 0,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        clearLoadingError(state);
        state.items = action.payload.recipes;
        state.pageAmount = action.payload.pageAmount;
      })
      .addCase(fetchOneRecipe.fulfilled, (state, action) => {
        clearLoadingError(state);
        state.items = action.payload.recipes;
        state.pageAmount = 0;
      })
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        clearLoadingError(state);
        state.items = action.payload.recipes;
        state.pageAmount = action.payload.pageAmount;
      })
      .addCase(fetchRecipesByIngredient.fulfilled, (state, action) => {
        clearLoadingError(state);
        state.items = action.payload.recipes;
        state.pageAmount = action.payload.pageAmount;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        clearLoadingError(state);
        state.items = action.payload.recipes;
        state.pageAmount = action.payload.pageAmount;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        clearLoadingError(state);
        state.items.push(action.payload);
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        clearLoadingError(state);
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteFromFavorites.fulfilled, (state, action) => {
        clearLoadingError(state);
        const index = state.items.findIndex(
          recipe => recipe.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const recipesReducer = recipesSlice.reducer;
