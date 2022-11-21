import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clear() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      const payload = {};
      if (error.response.data.errors?.name) payload.name = "Введіть своє ім'я";
      if (error.response.data.keyPattern?.email)
        payload.email = 'Такий друзяка вже зареєстрованний :)';
      if (error.response.data.errors?.password)
        payload.password = 'Мінімальна довжина шифру 7 символів';
      return thunkAPI.rejectWithValue(payload);
    }
  }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const message = {};
    if (error.response.status === 400)
      message.status = 'Такого друзяки не зареєстровано :(';
    return thunkAPI.rejectWithValue(message);
  }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.clear();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    token.set(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authOperations = { register, logIn, logOut, refreshUser };
export default authOperations;
