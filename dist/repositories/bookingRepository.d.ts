import { Booking } from "../models/booking.js";
import { Transaction } from "sequelize";
export declare class BookingRepository {
    create(payload: Partial<Booking>, trx?: Transaction | null): Promise<Booking>;
    findAll(): Promise<Booking[]>;
    findByUser(userId: number): Promise<Booking[]>;
    findById(id: number): Promise<Booking | null>;
    update(id: number, payload: Partial<Booking>, trx?: Transaction | null): Promise<Booking | null>;
    delete(id: number, trx?: Transaction | null): Promise<Booking | null>;
}
//# sourceMappingURL=bookingRepository.d.ts.map