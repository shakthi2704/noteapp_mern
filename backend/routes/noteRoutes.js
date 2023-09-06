import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createNote } from "../controllers/noteController.js";

const router = express.Router();

router.post("/", protect, createNote);

export default router;
