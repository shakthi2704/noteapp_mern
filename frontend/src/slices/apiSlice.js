// import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({ baseUrl: "" });

// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: ["User"],
//   endpoints: (builder) => ({}),
// });

import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const userBaseQuery = fetchBaseQuery({ baseUrl: "" }); // Separate baseQuery for user
const noteBaseQuery = fetchBaseQuery({ baseUrl: "/notes" }); // Separate baseQuery for notes

export const noteApiSlice = createApi({
  baseQuery: noteBaseQuery,
  tagTypes: ["Note"],
  endpoints: (builder) => ({}),
});

export const apiSlice = createApi({
  baseQuery: userBaseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
