import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.27:7193/api',

    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
    responseHandler: response => {
      if (response.headers.get('content-type')?.includes('application/json')) {
        return response.json(); // Parse JSON response
      }
      return response.text(); // Handle plain text response
    },
  }),

  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/Auth/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: userData => ({
        url: '/Auth/register',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: userData,
      }),
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation} = authApi;
