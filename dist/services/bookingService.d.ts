import { BookingRepository } from "../repositories/bookingRepository.js";
export declare class BookingService {
    repo: BookingRepository;
    createBooking(data: any): Promise<import("../models/booking.js").Booking>;
    listBookings(): Promise<import("../models/booking.js").Booking[]>;
    listBookingsByUser(userId: number): Promise<import("../models/booking.js").Booking[]>;
    updateBooking(id: number, data: any): Promise<import("../models/booking.js").Booking | null>;
    deleteBooking(id: number): Promise<import("../models/booking.js").Booking | null>;
}
//# sourceMappingURL=bookingService.d.ts.map