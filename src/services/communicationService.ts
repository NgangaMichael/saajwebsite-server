// src/services/communicationService.ts
import { CommunicationRepository } from '../repositories/communicationRepository.js';
import sequelize from '../db/index.js';
import { MailService } from '../utils/mailService.js';
import { UserRepository } from '../repositories/userRepository.js';

export class CommunicationService {
  repo = new CommunicationRepository();
  userRepo = new UserRepository();
  mailService = new MailService();

  async createCommunication(data: any) {
    return sequelize.transaction(async (trx) => {

      if (data.parentId) {
        const originalMsg = await this.repo.findById(data.parentId);
        if (originalMsg) {
          // Optional: logic to force recipient to be the original sender
          // data.sendtoid = originalMsg.senderId; 
        }
      }

      // 1️⃣ Always create communication
      const communication = await this.repo.create(data, trx);

      // 2️⃣ If sendtoid > 0 → send email
      if (Number(data.sendtoid) > 0) {
        const user = await this.userRepo.findById(data.sendtoid);

        if (user?.email) {
          try {
            await this.mailService.send(
              user.email,
              data.title,
              data.info
            );
          } catch (err) {
            console.error('Email sending failed:', err);
          }
        }
      }

      return communication;
    });
  }

  async getThread(id: number) {
    return this.repo.findThread(id);
  }

  async listCommunications() {
    return this.repo.findAll();
  }

  async getCommunicationById(id: number) {
    return this.repo.findById(id);
  }

  async updateCommunication(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteCommunication(id: number, username: string) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, username, trx);
    });
  }
}

