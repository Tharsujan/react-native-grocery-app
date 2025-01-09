import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import EncryptedStorage from 'react-native-encrypted-storage';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.27:7193/api',
    prepareHeaders: async (headers, {getState}) => {
      try {
        const token = await EncryptedStorage.getItem('Token');
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
      } catch (error) {
        console.error('Error getting token:', error);
      }
      return headers;
    },
  }),
  tagTypes: ['Cart'],
  endpoints: builder => ({
    getCartItems: builder.query({
      query: () => '/Cart',
      providesTags: (result = []) => [
        'Cart',
        ...result.map(({id}) => ({type: 'Cart', id})),
      ],
    }),

    addToCart: builder.mutation({
      query: ({productId, quantity}) => ({
        url: '/Cart/add',
        method: 'POST',
        body: {productId, quantity},
      }),
      invalidatesTags: ['Cart'],
    }),

    updateCartItem: builder.mutation({
      query: ({id, quantity}) => ({
        url: `/cart/update/${id}`,
        method: 'PUT',
        body: {quantity},
      }),
      invalidatesTags: ['Cart'],
    }),

    removeFromCart: builder.mutation({
      query: id => ({
        url: `/cart/remove/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const {
  useGetCartItemsQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveFromCartMutation,
} = cartApi;
