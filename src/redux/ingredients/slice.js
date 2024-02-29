import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from './operations.js';

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.items = action.push;
      })
      .addCase(fetchIngredients.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
