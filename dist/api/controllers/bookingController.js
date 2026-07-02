import { BookingService } from "../../services/bookingService.js";
const service = new BookingService();
export const applyBooking = async (req, res, next) => {
    try {
        const booking = await service.createBooking(req.body);
        res.status(201).json({ data: booking });
    }
    catch (err) {
        next(err);
    }
};
export const getBookings = async (_req, res, next) => {
    try {
        const bookings = await service.listBookings();
        res.json({ data: bookings });
    }
    catch (err) {
        next(err);
    }
};
export const getBookingsByUser = async (req, res, next) => {
    try {
        const bookings = await service.listBookingsByUser(Number(req.params.userId));
        res.json({ data: bookings });
    }
    catch (err) {
        next(err);
    }
};
export const updateBooking = async (req, res, next) => {
    try {
        const booking = await service.updateBooking(Number(req.params.id), req.body);
        if (!booking)
            return res.status(404).json({ message: "Booking record not found" });
        res.json({ data: booking });
    }
    catch (err) {
        next(err);
    }
};
export const deleteBooking = async (req, res, next) => {
    try {
        const booking = await service.deleteBooking(Number(req.params.id));
        if (!booking)
            return res.status(404).json({ message: "Booking record not found" });
        res.json({ message: "Booking entry deleted successfully", data: booking });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=bookingController.js.map