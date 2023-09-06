import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  notes: [], // Initialize an empty array to store notes
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // Define reducers for CRUD operations on notes here
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action) => {
      const updatedNote = action.payload;
      const index = state.notes.findIndex((note) => note.id === updatedNote.id);
      if (index !== -1) {
        state.notes[index] = updatedNote;
      }
    },
    deleteNote: (state, action) => {
      const noteIdToDelete = action.payload;
      state.notes = state.notes.filter((note) => note.id !== noteIdToDelete);
    },
  },
});
export const { setNotes, addNote, updateNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
