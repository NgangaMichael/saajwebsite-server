import sequelize from "../db/index.js";
import { MeetingRepository } from "../repositories/meetingRepository.js";
import { MailService } from "./mailService.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class MeetingService {
  repo = new MeetingRepository();
  mail = new MailService();

  async createMeeting(data: any) {
    // Never trust the client: normalise, validate and de-duplicate the emails.
    const extraEmails: string[] = [
      ...new Set(
        (Array.isArray(data.extraEmails) ? data.extraEmails : [])
          .map((e: any) => String(e).trim().toLowerCase())
          .filter((e: string) => EMAIL_RE.test(e))
      ),
    ] as string[];

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