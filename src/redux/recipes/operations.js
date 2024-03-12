import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchRecipes = createAsyncThunk(
  'recipe/fetchMainPage',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/main-page');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchRecipesByQuery = createAsyncThunk(
  'recipe/fetchByQuery',
  async (data, thunkAPI) => {
    try {
      const { query, page, limit } = data;
      const response = await axios.get(
        `/recipea/search/?query=${query}page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchFavorites = createAsyncThunk(
  'recipe/fetchFavorites',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/favorites');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchRecipeById = createAsyncThunk(
  'recipe/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchRecipesByCategory = createAsyncThunk(
  'recipe/fetchByCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/category/${category}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchRecipesByIngredient = createAsyncThunk(
  'recipe/fetchByIngredient',
  async (ingredientId, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/ingredients/${ingredientId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addRecipe = createAsyncThunk(
  'recipe/addRecipe',
  async ({ recipeImage, recipeInfo }, thunkAPI) => {
    try {
      const formData = new FormData();
      const blobedInfo = new Blob([recipeInfo], {
        type: 'application/json',
      });
      const blobedImage = new Blob([recipeImage], {
        type: 'multipart/form-data',
      });
      formData.append('recipeImage', blobedImage);
      formData.append('recipe', blobedInfo);
      const response = await axios.post('/user/ownRecipes', formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteRecipe = createAsyncThunk(
  'recipe/deleteRecipe',
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/user/ownRecipes/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addToFavorites = createAsyncThunk(
  'recipe/addToFavorites',
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.post(`/recipes/favorites/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteFromFavorites = createAsyncThunk(
  'recipe/deleteFromFavorites',
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.delete(`/recipes/favorites/${recipeId}`);
      return response.data;
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
  fetchRecipeById,
  fetchFavorites,
  fetchRecipesByIngredient,
  addToFavorites,
  deleteFromFavorites,
};
