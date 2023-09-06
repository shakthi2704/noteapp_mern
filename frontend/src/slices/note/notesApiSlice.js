import { apiSlice } from "../apiSlice";
const NOTES_URL = "/api/notes";

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNote: builder.mutation({
      query: (newNote) => ({
        url: `${NOTES_URL}`,
        method: "POST",
        body: newNote,
      }),
    }),
    readNote: builder.query({
      query: (noteId) => ({
        url: `${NOTES_URL}/${noteId}`,
        method: "GET",
      }),
    }),
    updateNote: builder.mutation({
      query: ({ noteId, updatedNote }) => ({
        url: `${NOTES_URL}/${noteId}`,
        method: "PUT",
        body: updatedNote,
      }),
    }),
    deleteNote: builder.mutation({
      query: (noteId) => ({
        url: `${NOTES_URL}/${noteId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateNoteMutation,
  useReadNoteQuery,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = notesApiSlice;
