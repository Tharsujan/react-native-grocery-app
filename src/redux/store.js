import {configureStore} from '@reduxjs/toolkit';
import {authApi} from '../seivices/api/authApi';
import authReducer from './slices/authSlice';
import {categoryApi} from '../seivices/api/categoryApi';
import {productApi} from '../seivices/api/productApi';
import {favoriteApi} from '../seivices/api/favoriteApi';
import {cartApi} from '../seivices/api/cartApi';
import {setupListeners} from '@reduxjs/toolkit/query/react';

const apis = [authApi, categoryApi, productApi, favoriteApi, cartApi];

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apis.map(api => api.middleware)),
});
export const resetApiState = () => {
  apis.forEach(api => {
    store.dispatch(api.util.resetApiState());
  });
};
setupListeners(store.dispatch);
