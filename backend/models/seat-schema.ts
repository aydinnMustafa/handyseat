import { Schema, model } from "mongoose";
import { ISeat } from "../types";

const seatSchema = new Schema<ISeat>({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },

  carModel: { type: String, required: true },
  carType: { type: String, required: true },
  smokeAllow: { type: Boolean, required: true },
  travelingPeopleQuantity: { type: Number, required: true },

  departurePlace: { type: String, required: true },
  departureTime: { type: Date, required: true },
  destination: { type: String, required: true },
  estimatedArrival: { type: Number, required: true },
});

export const Seat = model<ISeat>("Seat", seatSchema);
