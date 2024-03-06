import { createSlice } from '@reduxjs/toolkit';
import { addProduct, fetchShoppingList, deleteProduct } from './operations.js';

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

const shoppingList = createSlice({
  name: 'shoppingList',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.fulfilled, (state, action) => {
        clearLoadingError(state);
        state.items = action.payload.shoppingList;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        clearLoadingError(state);
        state.items.push(action.payload.newProduct);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        clearLoadingError(state);
        const index = state.items.findIndex(
          item => item.id === action.payload.idProduct
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const shoppingListReducer = shoppingList.reducer;
