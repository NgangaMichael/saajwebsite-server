import { Booking } from "../models/booking.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class BookingRepository {
    async create(payload, trx = null) {
        const created = await Booking.create(payload, { transaction: trx });
        await logService.logAction({
            entity: "Booking",
            entityId: created.id,
            action: "CREATE",
            afterData: created.toJSON(),
        });
        return created;
    }
    async findAll() {
        return Booking.findAll({ include: ["user"], order: [["createdAt", "DESC"]] });
    }
    async findByUser(userId) {
        return Booking.findAll({ where: { userId }, include: ["user"], order: [["createdAt", "DESC"]] });
    }
    async findById(id) {
        return Booking.findByPk(id, { include: ["user"] });
    }
    async update(id, payload, trx = null) {
        const booking = await Booking.findByPk(id);
        if (!booking)
            return null;
        const beforeData = booking.toJSON();
        const updated = await booking.update(payload, { transaction: trx });
        await logService.logAction({
            entity: "Booking",
            entityId: id,
            action: "UPDATE",
            beforeData,
            afterData: updated.toJSON(),
        });
        return updated;
    }
    async delete(id, trx = null) {
        const booking = await Booking.findByPk(id);
        if (!booking)
            return null;
        const beforeData = booking.toJSON();
        await booking.destroy({ transaction: trx });
        await logService.logAction({
            entity: "Booking",
            entityId: id,
            action: "DELETE",
            beforeData,
        });
        return booking;
    }
}
//# sourceMappingURL=bookingRepository.js.map