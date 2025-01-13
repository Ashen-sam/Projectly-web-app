import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
export const BaseApi = createApi({
  reducerPath: "projects",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "apikey",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtemxtZXRwbm9xaWl6eW5qbmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyMzQ5MzQsImV4cCI6MjA1MTgxMDkzNH0.fNxC732nZAFJQLkYyHK8TnB7U_rpbJjx6du6EJ5Et0M"
      );
      headers.set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtemxtZXRwbm9xaWl6eW5qbmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyMzQ5MzQsImV4cCI6MjA1MTgxMDkzNH0.fNxC732nZAFJQLkYyHK8TnB7U_rpbJjx6du6EJ5Et0M"
      );
      return headers;
    },
  }),
  endpoints: () => ({}),
});
