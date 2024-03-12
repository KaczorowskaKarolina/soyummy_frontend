import { createSlice } from '@reduxjs/toolkit';

import { updateUser, logout, refresh, deleteUser } from './operations.js';

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
  return (
    (action.type.startsWith('auth/register') ||
      action.type.startsWith('auth/login')) &&
    action.type.endsWith('/fulfilled')
  );
};

const handleLogin = (state, action) => {
  state.user = action.payload.user;
  action.payload.accessToken && (state.token = action.payload.accessToken);
  action.payload.confirmToken && (state.token = action.payload.confirmToken);
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
  state.error = action.payload || false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logout.fulfilled, handleRejected)
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(deleteUser.fulfilled, handleRejected)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
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
