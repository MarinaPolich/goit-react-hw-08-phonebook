import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const handlePending = state => {
  state.isLoggedIn = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: {
    [authOperations.register.pending]: handlePending,
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected]: handleRejected,

    [authOperations.logIn.pending]: handlePending,
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected]: handleRejected,

    [authOperations.logOut.pending]: handlePending,
    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected]: handleRejected,

    [authOperations.refreshUser.pending](state) {
      state.isLoggedIn = true;
      state.isRefreshing = true;
      state.error = null;
    },
    [authOperations.refreshUser.fulfilled](state, action) {
      state.isRefreshing = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [authOperations.refreshUser.rejected](state, { payload }) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
