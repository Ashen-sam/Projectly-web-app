import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseApi = createApi({
  reducerPath: "projects",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-production-de08.up.railway.app/api/",
  }),
  endpoints: () => ({}),
});
