import { emptyApi } from "../../service/emptyApi";

export const userApi = emptyApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "/posts/",
      }),
      transformResponse: (response: { id: number; title: string }[]) =>
        response.map((user) => {
          return { label: user.title.replace(/ .*/, ""), value: user.id };
        }),
      // transformErrorResponse: (response: { status: string | number }) => {
      //   return response.status;
      // },
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = userApi;
