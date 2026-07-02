var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user.js";
let Booking = class Booking extends Model {
};
__decorate([
    ForeignKey(() => User),
    Column({ type: DataType.INTEGER, allowNull: false })
], Booking.prototype, "userId", void 0);
__decorate([
    BelongsTo(() => User)
], Booking.prototype, "user", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false })
], Booking.prototype, "username", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false })
], Booking.prototype, "title", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false })
], Booking.prototype, "facility", void 0);
__decorate([
    Column({ type: DataType.DATEONLY, allowNull: false })
], Booking.prototype, "bookingDate", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false })
], Booking.prototype, "startTime", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false })
], Booking.prototype, "endTime", void 0);
__decorate([
    Column({ type: DataType.STRING })
], Booking.prototype, "description", void 0);
__decorate([
    Column({ type: DataType.STRING, defaultValue: "Pending" })
], Booking.prototype, "status", void 0);
__decorate([
    Column({ type: DataType.STRING, defaultValue: "Sports" })
], Booking.prototype, "committeeTarget", void 0);
Booking = __decorate([
    Table({ tableName: "bookings" })
], Booking);
export { Booking };
//# sourceMappingURL=booking.js.map