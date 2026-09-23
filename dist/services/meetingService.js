import sequelize from "../db/index.js";
import { MeetingRepository } from "../repositories/meetingRepository.js";
export class MeetingService {
    repo = new MeetingRepository();
    async createMeeting(data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.create(data, trx);
        });
    }
    async listMeetings() {
        return this.repo.findAll();
    }
    async listMeetingsByCreator(creatorId) {
        return this.repo.findByCreator(creatorId);
    }
    async updateMeeting(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deleteMeeting(id) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, trx);
        });
    }
}
//# sourceMappingURL=meetingService.js.map