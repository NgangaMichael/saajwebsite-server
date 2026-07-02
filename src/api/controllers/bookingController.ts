import type { Request, Response, NextFunction } from "express";
import { BookingService } from "../../services/bookingService.js";

const service = new BookingService();

export const applyBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const booking = await service.createBooking(req.body);
    res.status(201).json({ data: booking });
  } catch (err) {
    next(err);
  }
};

export const getBookings = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const bookings = await service.listBookings();
    res.json({ data: bookings });
  } catch (err) {
    next(err);
  }
};

export const getBookingsByUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookings = await service.listBookingsByUser(Number(req.params.userId));
    res.json({ data: bookings });
  } catch (err) {
    next(err);
  }
};

export const updateBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const booking = await service.updateBooking(Number(req.params.id), req.body);
    if (!booking) return res.status(404).json({ message: "Booking record not found" });
    res.json({ data: booking });
  } catch (err) {
    next(err);
  }
};

export const deleteBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const booking = await service.deleteBooking(Number(req.params.id));
    if (!booking) return res.status(404).json({ message: "Booking record not found" });
    res.json({ message: "Booking entry deleted successfully", data: booking });
  } catch (err) {
    next(err);
  }
};