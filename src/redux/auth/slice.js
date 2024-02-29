import { createSlice } from '@reduxjs/toolkit';

import { updateUser, logout, refresh } from './operations.js';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const isPendingAction = action => {
  return action.type.startsWith('auth') && action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};

const isLoginOrSignupAction = action => {
  return action.type.endsWith('/signup') || action.type.endsWith('/login');
};

const handleLogin = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = false;
};

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        action.name ? (state.user.name = action.name) : null;
        action.avatarUrl ? (state.user.name = action.avatarUrl) : null;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addMatcher(isLoginOrSignupAction, handleLogin)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
