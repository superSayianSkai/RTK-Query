import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  //this refetch api when you leave the screen and get back
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "posts" }),
    createPosts: builder.mutation({
      query: (newPosts) => ({
        url: "posts",
        method: "POST",
        body: newPosts,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostsMutation } = jsonPlaceholderApi;
