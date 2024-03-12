import { createSlice } from '@reduxjs/toolkit';

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};

const isFulfilledAction = action => {
  return action.type.endsWith('/fulfilled');
};

const handleFulfilled = (state, action) => {
  state.error = null;
  state.isLoading = false;
  state.items = action.payload.ingredients;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addMatcher(isFulfilledAction, handleFulfilled)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleReject);
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
