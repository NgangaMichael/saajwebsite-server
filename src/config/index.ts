import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'app_db',
    dialect: 'mysql'
  },
  env: process.env.NODE_ENV || 'development'
};
