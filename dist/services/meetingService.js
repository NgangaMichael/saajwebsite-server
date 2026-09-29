import sequelize from "../db/index.js";
import { MeetingRepository } from "../repositories/meetingRepository.js";
import { MailService } from "./mailService.js";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export class MeetingService {
    repo = new MeetingRepository();
    mail = new MailService();
    async createMeeting(data) {
        // Never trust the client: normalise, validate and de-duplicate the emails.
        const extraEmails = [
            ...new Set((Array.isArray(data.extraEmails) ? data.extraEmails : [])
                .map((e) => String(e).trim().toLowerCase())
                .filter((e) => EMAIL_RE.test(e))),
        ];
        const meeting = await sequelize.transaction(async (trx) => {
            return this.repo.create({ ...data, extraEmails }, trx);
        });
        // Send after the transaction commits, without blocking the response.
        // A mail failure must not make the meeting creation fail.
        if (extraEmails.length > 0) {
            this.mail.sendMeetingInvite(meeting, extraEmails).catch((err) => {
                console.error("Error sending meeting invitations:", err);
            });
        }
        return meeting;
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