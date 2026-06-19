// src/services/communicationService.ts
import { CommunicationRepository } from '../repositories/communicationRepository.js';
import sequelize from '../db/index.js';
import { MailService } from '../utils/mailService.js'; // Ensure path is correct matching your workspace
import { UserRepository } from '../repositories/userRepository.js';
export class CommunicationService {
    repo = new CommunicationRepository();
    userRepo = new UserRepository();
    mailService = new MailService();
    async createCommunication(data) {
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
            let recipientEmails = [];
            // 2️⃣ Collect recipient emails based on destination target
            if (Number(data.sendtoid) > 0) {
                // Direct Individual or Specific Sub-Committee message
                // If it's a committee ID, you might need extra database logic, 
                // but assuming it's a direct user ID based on userRepo usage:
                const user = await this.userRepo.findById(data.sendtoid);
                if (user?.email) {
                    recipientEmails.push(user.email);
                }
            }
            else if (Number(data.sendtoid) === 0) {
                // Bulk Group Broadcast dispatch
                const allUsers = await this.userRepo.findAll(); // Assuming your userRepo has a findAll method
                if (allUsers && Array.isArray(allUsers)) {
                    const target = data.sendto?.toLowerCase();
                    recipientEmails = allUsers
                        .filter((u) => {
                        if (!u.email)
                            return false;
                        if (target === "all" || target === "all members")
                            return true;
                        if (target === "all staff")
                            return u.designation?.toLowerCase() === "staff";
                        if (target === "level 2")
                            return u.level === "Level 2";
                        if (target === "direct members")
                            return u.membertype?.toLowerCase() === "direct";
                        if (target === "indirect members")
                            return u.membertype?.toLowerCase() === "indirect";
                        return false;
                    })
                        .map((u) => u.email);
                }
            }
            // 3️⃣ Dispatch emails safely
            if (recipientEmails.length > 0) {
                try {
                    // Send to targeted recipients
                    // Using a join string or loop depending on mailService setup. 
                    // Joining with comma sends to all targets at once natively via nodemailer
                    const toString = recipientEmails.join(', ');
                    await this.mailService.send(toString, data.title, data.info);
                }
                catch (err) {
                    console.error('Group email broadcasting failed:', err);
                }
            }
            // 4️⃣ Always send a copy to the audit mailbox exactly once
            try {
                await this.mailService.send(auditEmail, `[Copy] ${data.title}`, `<strong>System Broadcast Copy Details:</strong><br>
           Sender: ${data.sender}<br>
           Target Recipient Group: ${data.sendto}<br>
           <hr><br>
           ${data.info}`);
            }
            catch (err) {
                console.error('Audit confirmation log email failed:', err);
            }
            return communication;
        });
    }
    async getThread(id) {
        return this.repo.findThread(id);
    }
    async listCommunications() {
        return this.repo.findAll();
    }
    async getCommunicationById(id) {
        return this.repo.findById(id);
    }
    async updateCommunication(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deleteCommunication(id, username) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, username, trx);
        });
    }
}
//# sourceMappingURL=communicationService.js.map