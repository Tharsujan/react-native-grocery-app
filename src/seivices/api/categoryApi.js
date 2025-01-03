// src/services/categoryApi.js
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Function to generate random pastel colors
const generatePastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 90%)`;
};

const generateDarkerShade = hue => {
  return `hsl(${hue}, 70%, 60%)`;
};

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://192.168.1.27:7193/api/'}),
  endpoints: builder => ({
    getAllCategories: builder.query({
      query: () => 'Category',
      transformResponse: response =>
        response.map(category => ({
          ...category,
          backgroundColor: generatePastelColor(),
          borderColor: generateDarkerShade(Math.floor(Math.random() * 360)),
        })),
      //providesTags: ['Category'],
    }),
  }),
});

export const {useGetAllCategoriesQuery} = categoryApi;
