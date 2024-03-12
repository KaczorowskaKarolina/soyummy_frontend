import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('recipes/ingredients/list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchIngredientById = createAsyncThunk(
  'ingredients/fetchByIngredient',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`recipes/ingredients/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchIngredients, fetchIngredientById };
