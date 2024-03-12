import { createSlice } from '@reduxjs/toolkit';
import { addRecipe, deleteRecipe, deleteFromFavorites } from './operations.js';

const clearLoadingError = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  clearLoadingError(state);
  action.payload.recipes && (state.items = action.payload.recipes);
  action.payload.pageAmount && (state.pageAmount = action.payload.pageAmount);
};

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isFulfilledAction = action => {
  return action.type.endsWith('/fulfilled');
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
      .addCase(addRecipe.fulfilled, (state, action) => {
        clearLoadingError(state);
        state.items.push(action.payload.recipes);
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        clearLoadingError(state);
        const index = state.items.findIndex(
          recipe => recipe._id === action.payload.recipeId
        );
        index !== -1 && state.items.splice(index, 1);
      })
      .addCase(deleteFromFavorites.fulfilled, (state, action) => {
        clearLoadingError(state);
        const index = state.items.findIndex(
          recipe => recipe._id === action.payload.recipeId
        );
        index !== -1 && state.items.splice(index, 1);
      })
      .addMatcher(isFulfilledAction, handleFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const recipesReducer = recipesSlice.reducer;
