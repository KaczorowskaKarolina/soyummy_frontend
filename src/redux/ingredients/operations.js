import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('recipes/ingredients/list');
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchIngredients };
