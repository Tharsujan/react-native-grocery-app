import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import EncryptedStorage from 'react-native-encrypted-storage';

export const favoriteApi = createApi({
  reducerPath: 'favoriteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.27:7193/api',

    prepareHeaders: async (headers, {getState}) => {
      try {
        const token = await EncryptedStorage.getItem('Token');
        //console.log('Token from EncryptedStorage:', token);

        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
      } catch (error) {
        console.error('Error getting token:', error);
      }

      //headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Favorite'],
  endpoints: builder => ({
    getFavorites: builder.query({
      query: () => '/Favorites',
      providesTags: (result = []) => [
        'Favorite',
        ...result.map(({id}) => ({type: 'Favorite', id})),
      ],
    }),

    checkFavorite: builder.query({
      query: productId => `/Favorites/check/${productId}`,
      providesTags: (result, error, productId) => [
        {type: 'Favorite', id: productId},
      ],
    }),

    addToFavorites: builder.mutation({
      query: productId => ({
        url: `/Favorites/${productId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Favorite'],
    }),

    removeFromFavorites: builder.mutation({
      query: productId => ({
        url: `/Favorites/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Favorite'],
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useCheckFavoriteQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = favoriteApi;
