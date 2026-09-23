import sequelize from "../db/index.js";
import { MeetingRepository } from "../repositories/meetingRepository.js";

export class MeetingService {
  repo = new MeetingRepository();

  async createMeeting(data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.create(data, trx);
    });
  }

  async listMeetings() {
    return this.repo.findAll();
  }

  async listMeetingsByCreator(creatorId: number) {
    return this.repo.findByCreator(creatorId);
  }

  async updateMeeting(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteMeeting(id: number) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, trx);
    });
  }
}