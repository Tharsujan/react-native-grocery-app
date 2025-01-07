import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import EncryptedStorage from 'react-native-encrypted-storage';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.27:7193/api',

    prepareHeaders: async (headers, {getState}) => {
      try {
        const token = await EncryptedStorage.getItem('Token');
        console.log('Token from EncryptedStorage:', token);

        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
      } catch (error) {
        console.error('Error getting token:', error);
      }

      //headers.set('Content-Type', 'application/json');
      return headers;
    },
    responseHandler: response => {
      if (response.headers.get('content-type')?.includes('application/json')) {
        return response.json(); // Parse JSON response
      }
      return response.text(); // Handle plain text response
    },
  }),
  tagTypes: ['Profile'],
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
      invalidatesTags: ['Profile'],
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
    getProfile: builder.query({
      query: () => ({
        url: '/Auth/profile',
        method: 'GET',
      }),
      transformResponse: response => {
        console.log('Raw profile response:', response);
        return response;
      },
      providesTags: ['Profile'],
    }),
    updateProfile: builder.mutation({
      query: updateData => ({
        url: '/Auth/profile',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: updateData,
      }),
      invalidatesTags: ['Profile'],
    }),
    uploadProfilePicture: builder.mutation({
      query: formData => ({
        url: '/Auth/profile/upload-picture',
        method: 'POST',
        body: formData,
        formData: true, // This tells RTK Query that we're sending FormData
      }),
      invalidatesTags: ['Profile'],
    }),
    updateProfilePicture: builder.mutation({
      query: formData => ({
        url: '/Auth/profile/update-picture',
        method: 'PUT',
        body: formData,
        formData: true,
      }),
      invalidatesTags: ['Profile'],
    }),
    deleteProfilePicture: builder.mutation({
      query: () => ({
        url: '/Auth/profile/delete-picture',
        method: 'DELETE',
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUploadProfilePictureMutation,
  useUpdateProfilePictureMutation,
  useDeleteProfilePictureMutation,
} = authApi;
