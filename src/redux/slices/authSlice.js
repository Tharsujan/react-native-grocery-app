import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    message: null,
    isAuthenticated: false,
  },
  reducers: {
    setCredentials: (state, {payload}) => {
      state.token = payload.token;
      state.message = payload.message;
      state.isAuthenticated = true;
    },
    logout: state => {
      state.token = null;
      state.message = null;
      state.isAuthenticated = false;
    },
  },
});

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;
