import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchRecipes = createAsyncThunk(
  'recipe/fetchAll',
  async (data = {}, thunkAPI) => {
    try {
      if (data) {
        const { page, limit } = data;
        const response = await axios.get(
          `/recipe/?page=${page}&limit=${limit}`
        );
        return response.data;
      }
      const response = await axios.get('/recipe');
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
        `/recipe/?query=${query}page=${page}&limit=${limit}`
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
      const response = await axios.get('/recipe/favorites');
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
      const response = await axios.get(`/recipe/${id}`);
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
      const response = await axios.get(`/category/${category}`);
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
      const response = await axios.get(`/ingredient/recipe/${ingredientId}`);
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
        type: 'multipart/form-data',
      });
      const blobedImage = new Blob([recipeImage], { type: 'application/json' });
      formData.append('recipeImage', blobedImage);
      formData.append('recipe', blobedInfo);
      const response = await axios.post('/user/ownRecipes', formData);
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteRecipe = createAsyncThunk(
  'recipe/deleteRecipe',
  async (recipeId, thunkAPI) => {
    try {
      await axios.delete(`/user/ownRecipes/${recipeId}`);
      return recipeId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addToFavorites = createAsyncThunk(
  'recipe/addToFavorites',
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.post(`/recipe/favorites/${recipeId}`);
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
      await axios.delete(`/recipe/favorites/${recipeId}`);
      return recipeId;
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
