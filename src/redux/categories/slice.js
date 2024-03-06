import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCategories } from './operations.js';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.query = action.payload.categories;
      })
      .addCase(fetchAllCategories.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
