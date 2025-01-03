import {configureStore} from '@reduxjs/toolkit';
import {authApi} from '../seivices/api/authApi';
import authReducer from './slices/authSlice';
import {categoryApi} from '../seivices/api/categoryApi';
import {productApi} from '../seivices/api/productApi';
import {setupListeners} from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(categoryApi.middleware)
      .concat(productApi.middleware),
});
setupListeners(store.dispatch);
