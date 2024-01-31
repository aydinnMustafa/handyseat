import express from "express";
import { getSeats, rentMySeat } from "../controllers/seat";

const router = express.Router();

router.get("/api/seats", getSeats);

router.post("/api/rentmyseat", rentMySeat);

export { router as seatRouter };
