import sequelize from "../db/index.js";
import { BookingRepository } from "../repositories/bookingRepository.js";

export class BookingService {
  repo = new BookingRepository();

  async createBooking(data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.create(data, trx);
    });
  }

  async listBookings() {
    return this.repo.findAll();
  }

  async listBookingsByUser(userId: number) {
    return this.repo.findByUser(userId);
  }

  async updateBooking(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteBooking(id: number) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, trx);
    });
  }
}