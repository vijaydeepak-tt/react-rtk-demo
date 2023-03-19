import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostByIdQuery } = postApi;
