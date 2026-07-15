// src/services/communicationService.ts
import { CommunicationRepository } from '../repositories/communicationRepository.js';
import sequelize from '../db/index.js';
import { MailService } from '../utils/mailService.js'; // Ensure path is correct matching your workspace
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

      // 1️⃣ Save communication entry to database
      const communication = await this.repo.create(data, trx);

      // Audit email configuration
      const auditEmail = "saajmc2025@saaj.co.ke";
      let recipientEmails: string[] = [];

      // 2️⃣ Collect recipient emails safely based on destination target
      const sendToIdNum = Number(data.sendtoid);

      if (!isNaN(sendToIdNum) && sendToIdNum > 0) {
        // STRICTLY DIRECT: Look up and send ONLY to the specific user ID
        const user = await this.userRepo.findById(sendToIdNum);
        if (user?.email) {
          recipientEmails.push(user.email);
        } else {
          console.warn(`Direct message recipient user ID ${sendToIdNum} not found or has no email.`);
        }
      } else if (sendToIdNum === 0 && data.sendto) {
        // STRICTLY BROADCAST: Only run if explicitly set to 0 AND we have a valid target string
        const allUsers = await this.userRepo.findAll();

        if (allUsers && Array.isArray(allUsers)) {
          const target = data.sendto.trim().toLowerCase();

          // Approved system-wide broadcast target groups
          const validGroups = ["all", "all members", "all staff", "level 2", "direct members", "indirect members"];
          
          if (validGroups.includes(target)) {
            recipientEmails = allUsers
              .filter((u: any) => {
                if (!u.email) return false;

                if (target === "all" || target === "all members") return true;
                if (target === "all staff") return u.designation?.toLowerCase() === "staff";
                if (target === "level 2") return u.level === "Level 2";
                if (target === "direct members") return u.membertype?.toLowerCase() === "direct";
                if (target === "indirect members") return u.membertype?.toLowerCase() === "indirect";

                return false;
              })
              .map((u: any) => u.email);
          } else {
            console.warn(`Broadcast logic bypassed: "${data.sendto}" is not a recognized system group.`);
          }
        }
      }

      // 3️⃣ Dispatch emails safely
      if (recipientEmails.length > 0) {
        try {
          // Join emails with comma to send to all targets natively in one go
          const toString = recipientEmails.join(', ');

          await this.mailService.send(
            toString,
            data.title,
            data.info
          );
        } catch (err) {
          console.error('Email dispatch failed:', err);
        }
      } else {
        console.warn('No valid recipient emails were resolved. Email dispatch skipped.');
      }

      // 4️⃣ Always send a copy to the audit mailbox exactly once
      try {
        await this.mailService.send(
          auditEmail,
          `[Copy] ${data.title}`,
          `<strong>System Broadcast Copy Details:</strong><br>
           Sender: ${data.sender}<br>
           Target Recipient Group/User: ${data.sendto}<br>
           Resolved Recipients Count: ${recipientEmails.length}<br>
           <hr><br>
           ${data.info}`
        );
      } catch (err) {
        console.error('Audit confirmation log email failed:', err);
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