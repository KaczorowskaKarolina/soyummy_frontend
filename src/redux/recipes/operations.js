import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || 'http://localhost:5000';

const fetchRecipes = createAsyncThunk(
  'recipes/fetchAll',
  async (data = {}, thunkAPI) => {
    try {
      if (data) {
        const { page, limit } = data;
        const response = await axios.get(
          `/recipes/?page=${page}&limit=${limit}`
        );
        return response.data.data.file;
      }
      const response = await axios.get('/recipes');
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchFavorites = createAsyncThunk(
  'recipes/fetchFavorites',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/favorites');
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchOneRecipe = createAsyncThunk(
  'recipes/fetchOne',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${id}`);
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchRecipesByQuery = createAsyncThunk(
  'recipes/fetchByCategory',
  async (data, thunkAPI) => {
    try {
      const { query, page, limit } = data;
      const response = await axios.get(
        `/recipes/?query=${query}page=${page}&limit=${limit}`
      );
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchRecipesByCategory = createAsyncThunk(
  'recipes/fetchByCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/category/${category}`);
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchRecipesByIngredient = createAsyncThunk(
  'recipes/fetchByCategory',
  async (ingredientId, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/ingredients/${ingredientId}`);
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addRecipe = createAsyncThunk(
  'recipes/addRecipe',
  async ({ recipeImage, recipeInfo }, thunkAPI) => {
    try {
      const formData = new FormData();
      const blobedInfo = new Blob([recipeInfo], {
        type: 'multipart/form-data',
      });
      const blobedImage = new Blob([recipeImage], { type: 'application/json' });
      formData.append('recipeImage', blobedImage);
      formData.append('recipe', blobedInfo);
      const response = await axios.post('/users/ownRecipes', formData);
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteRecipe = createAsyncThunk(
  'recipes/deleteRecipe',
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/users/ownRecipes/${recipeId}`);
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteFromFavorites = createAsyncThunk(
  'recipes/deleteFromFavorites',
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/recipes/favorites/${recipeId}`);
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {
  fetchRecipes,
  addRecipe,
  deleteRecipe,
  fetchRecipesByCategory,
  fetchRecipesByQuery,
  fetchOneRecipe,
  fetchFavorites,
  fetchRecipesByIngredient,
  deleteFromFavorites,
};
