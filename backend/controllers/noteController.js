import asyncHandler from "express-async-handler";
import Note from "../models/noteModel.js";

const createNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const note = new Note({
    title,
    content,
    user: req.user._id,
  });

  const createdNote = await note.save();

  res.status(201).json(createdNote);
});

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });

  res.json(notes);
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findOne({ _id: req.params.id, user: req.user._id });

  if (note) {
    res.json(note);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const updateNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const note = await Note.findOne({ _id: req.params.id, user: req.user._id });

  if (note) {
    note.title = title || note.title;
    note.content = content || note.content;

    const updatedNote = await note.save();

    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findOne({ _id: req.params.id, user: req.user._id });

  if (note) {
    await note.remove();
    res.json({ message: "Note removed" });
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

export { createNote, getNotes, getNoteById, updateNote, deleteNote };
