import { Request, Response } from "express";

const getSeats = (req: Request, res: Response) => {
  return res.send("GET SEATS TEST");
};

const rentSeat = (req: Request, res: Response) => {
  return res.send("RENT SEAT TEST");
};

const rentMySeat = (req: Request, res: Response) => {
  return res.send("RENT MY SEAT TEST");
};

export { getSeats, rentSeat, rentMySeat };
