import { Router } from "express";
import {
  applyBooking,
  getBookings,
  getBookingsByUser,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingController.js";

const router = Router();

router.post("/", applyBooking);                 // POST /api/bookings
router.get("/", getBookings);                   // GET /api/bookings
router.get("/user/:userId", getBookingsByUser);   // GET /api/bookings/user/12
router.patch("/:id", updateBooking);            // PATCH /api/bookings/1
router.patch("/:id/status", updateBooking);     // PATCH /api/bookings/1/status (Handles approval updates)
router.delete("/:id", deleteBooking);           // DELETE /api/bookings/1

export default router;