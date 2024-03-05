import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAllCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/category');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchAllCategories };
