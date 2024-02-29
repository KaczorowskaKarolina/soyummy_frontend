import { createSlice } from '@reduxjs/toolkit';
import {
  changeQuery,
  fetchAllCategories,
  fetchCategories,
} from './operations.js';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    query: 4,
    skip: 0,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(...action.payload);
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changeQuery.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.query = state.query + action.payload;
      })
      .addCase(changeQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllCategories.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.query = action.payload;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
