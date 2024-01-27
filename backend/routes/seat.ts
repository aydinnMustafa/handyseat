import express from "express";
import { getSeats, rentSeat, rentMySeat } from "../controllers/seat";

const router = express.Router();

router.get("/api/seats", getSeats);

router.post("/api/rentseat", rentSeat);

router.post("/api/rentmyseat", rentMySeat);

export { router as seatRouter };
