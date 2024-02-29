import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCategories = createAsyncThunk(
  'categories/fetchFirstCategories',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { query } = state.categories;
    try {
      const response = await axios.get(`/getAllCategoriesList?query=${query}`);
      const file = response.data.data.file;
      return file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchAllCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/category-list');
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const changeQuery = createAsyncThunk(
  'categories/changeQuery',
  async (payload, thunkAPI) => {
    try {
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchCategories, changeQuery, fetchAllCategories };
