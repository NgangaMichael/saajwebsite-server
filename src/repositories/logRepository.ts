// src/repositories/logRepository.ts
import { Log } from "../models/log.js";
import { Transaction } from "sequelize";

export class LogRepository {
  async create(payload: Partial<Log>, trx: Transaction | null = null) {
    return Log.create(payload as any, { transaction: trx });
  }
}
