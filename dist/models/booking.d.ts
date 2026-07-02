import { Model } from "sequelize-typescript";
import { User } from "./user.js";
export declare class Booking extends Model<Booking> {
    userId: number;
    user: User;
    username: string;
    title: string;
    facility: string;
    bookingDate: string;
    startTime: string;
    endTime: string;
    description: string | null;
    status: string;
    committeeTarget: string;
}
//# sourceMappingURL=booking.d.ts.map