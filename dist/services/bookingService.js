import sequelize from "../db/index.js";
import { BookingRepository } from "../repositories/bookingRepository.js";
export class BookingService {
    repo = new BookingRepository();
    async createBooking(data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.create(data, trx);
        });
    }
    async listBookings() {
        return this.repo.findAll();
    }
    async listBookingsByUser(userId) {
        return this.repo.findByUser(userId);
    }
    async updateBooking(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deleteBooking(id) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, trx);
        });
    }
}
//# sourceMappingURL=bookingService.js.map