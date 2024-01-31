import express from "express";
import mongoose from "mongoose";
import cron from "node-cron";
import cors from "cors";
import dotenv from "dotenv";
import { json } from "body-parser";
import { seatRouter } from "./routes/seat";
import { Seat } from "./models/seat-schema";

dotenv.config();

const app = express();
app.use(json());

app.use(cors());

app.use(seatRouter);

cron.schedule("0 0 * * *", async () => {
  // We delete expired seats every night at 00 AM
  try {
    const currentTime = new Date();
    await Seat.deleteMany({ departureTime: { $lt: currentTime } });
  } catch (error) {
    console.error("Error deleting old seats:", error);
  }
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL || "")
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.error(err);
  });
