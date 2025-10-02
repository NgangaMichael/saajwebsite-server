import { Sequelize } from 'sequelize-typescript';
import config from '../config/index.js';
import { User } from '../models/user.js';
import { Committee } from '../models/committee.js';
import { Document } from '../models/document.js';
import { Communication } from '../models/communication.js';
import { Log } from '../models/log.js';
import { logger } from '../utils/logger.js';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  models: [User, Committee, Document, Communication, Log],
  pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
  logging: false,  // 🚫 stop Sequelize from logging every query
});

// ✅ Add a helper to check DB connection
export const initDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info('✅ Database connected');
  } catch (error) {
    logger.error('❌ Database connection failed', error);
    process.exit(1); // stop app if DB fails
  }
};

export default sequelize;
