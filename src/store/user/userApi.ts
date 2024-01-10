import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getOneUser: build.query({
      query: (name: string) => `/${name}`,
    }),
  }),
});

export const { useGetOneUserQuery } = userApi;
