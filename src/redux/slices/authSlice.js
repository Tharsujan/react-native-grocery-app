import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    message: null,
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    setCredentials: (state, {payload}) => {
      state.token = payload.token;
      state.message = payload.message;
      state.isAuthenticated = true;
      state.user = payload.user; // Save user details
    },
    logout: state => {
      state.token = null;
      state.message = null;
      state.isAuthenticated = false;
      state.user = null; // Clear user details
    },
  },
});

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;
