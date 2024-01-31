import { Request, Response } from "express";
import { Seat } from "../models/seat-schema";

const rentMySeat = async (req: Request, res: Response) => {
  try {
    const newSeat = new Seat({
      name: req.body.name,
      surname: req.body.surname,
      gender: req.body.gender,
      age: req.body.age,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,

      carModel: req.body.carModel,
      carType: req.body.carType,
      smokeAllow: req.body.smokeAllow,
      travelingPeopleQuantity: req.body.travelingPeopleQuantity,

      departurePlace: req.body.departurePlace,
      departureTime: req.body.departureTime,
      destination: req.body.destination,
      estimatedArrival: req.body.estimatedArrival,
    });

    const savedSeat = await newSeat.save();

    res.json(savedSeat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while renting." });
  }
};

const getSeats = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1; // Desired page number or 1 by default
    const pageSize = parseInt(req.query.pageSize as string) || 5; // Number of data to show per page or 10 by default
    const skip = (page - 1) * pageSize; // Number of data to skip

    let seatsQuery = {};

    // If startDate and endDate come from request we assign the values to our variables.
    const startDate = req.query.startDate
      ? new Date(req.query.startDate as string)
      : null;
    const endDate = req.query.endDate
      ? new Date(req.query.endDate as string)
      : null;

    if (startDate && endDate) {
      //We reset the times of the dates to avoid being affected by departureTime's time when searching by date.
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);

      seatsQuery = { departureTime: { $gte: startDate, $lte: endDate } };
    }

    // Count the data from the query
    const totalSeats = await Seat.countDocuments(seatsQuery);

    const totalPages = Math.ceil(totalSeats / pageSize); // Calculate total number of pages and round up

    // We pull the seats and apply the paging process
    const seats = await Seat.find(seatsQuery).skip(skip).limit(pageSize);

    res.json({ seats, totalPages }); // We send totalPages and seats information
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getSeats, rentMySeat };
