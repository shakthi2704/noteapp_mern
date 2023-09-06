import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/user/authSlice";
import noteReducer from "./slices/note/noteSlice";
import { apiSlice } from "./slices/apiSlice";
import { noteApiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [noteApiSlice.reducerPath]: noteApiSlice.reducer, 
    notes: noteReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
