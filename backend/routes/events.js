import express from "express";
import { registerForSundayService } from "../controllers/eventController.js";

const router = express.Router();

// POST /api/events/join
router.post("/join", registerForSundayService);

export default router;
