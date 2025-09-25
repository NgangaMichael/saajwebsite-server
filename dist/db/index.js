import { Sequelize } from 'sequelize-typescript';
import config from '../config/index.js';
import { User } from '../models/user.js';
import { logger } from '../utils/logger.js';
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    models: [User],
    pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
    logging: config.env === 'development'
        ? (msg) => logger.info(`[DB] ${msg}`) // 👈 use winston logger
        : false,
});
export default sequelize;
//# sourceMappingURL=index.js.map