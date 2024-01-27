import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { json } from "body-parser";
import { seatRouter } from "./routes/seat";

dotenv.config();

const app = express();
app.use(json());
app.use(seatRouter);

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL || "")
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
