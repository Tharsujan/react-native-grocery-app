import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.1.27:7193/api/'}),
  tagTypes: ['Products'],
  endpoints: builder => ({
    getCategoryProducts: builder.query({
      query: categoryId => `Product/category/${categoryId}`,
      providesTags: ['Products'],
    }),
  }),
});

export const {useGetCategoryProductsQuery} = productApi;
