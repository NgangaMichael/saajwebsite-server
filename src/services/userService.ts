import { UserRepository } from '../repositories/userRepository.js';
import { calculateAge } from '../utils/calculateAge.js';
import { User } from '../models/user.js';
import sequelize from '../db/index.js';
import bcrypt from 'bcrypt';

export class UserService {
  repo = new UserRepository();

  private async applySponsorData(data: any) {
    if (data.membertype === "Indirect" && data.associatedDirectMember) {
      const sponsor = await User.findOne({
        where: { username: data.associatedDirectMember, membertype: "Direct" }
      });

      if (sponsor) {
        data.subscription = sponsor.subscription ?? null;
        data.fileNumber = sponsor.fileNumber ?? null;
        data.approveStatus = sponsor.approveStatus ?? null;
        data.waveSubscriptionStatus = sponsor.waveSubscriptionStatus ?? null;
        data.subdate = sponsor.subdate ?? null;
      } else {
        data.subscription = null;
        data.fileNumber = null;
        data.approveStatus = null;
        data.waveSubscriptionStatus = null;
        data.subdate = null;
      }
    } else if (data.membertype === "Direct") {
      data.associatedDirectMember = null;
    }

    return data;
  }

  async createUser(data: any) {
    return sequelize.transaction(async (trx) => {
      if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
      }

      data = await this.applySponsorData(data);

      const user = await this.repo.create(data, trx);
      return user;
    });
  }

  async listUsers() {
    return this.repo.findAll();
  }

  async getUserById(id: number) {
    return this.repo.findById(id);
  }

  async updateUser(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      if (data.password && data.password.trim() !== "") {
        data.password = await bcrypt.hash(data.password, 10);
      } else {
        delete data.password;
      }

      data = await this.applySponsorData(data);

      const cleanPayload = Object.fromEntries(
        Object.entries(data).filter(([_, v]) => v !== undefined)
      );

      const updated = await this.repo.update(id, cleanPayload, trx);
      return updated;
    });
  }

  async deleteUser(id: number) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, trx);
    });
  }

  async updateAgesFromDob() {
    const users = await User.findAll();
    for (const user of users) {
      if (!user.dob) continue;
      const age = calculateAge(user.dob);
      await user.update({ age });
    }
  }
}