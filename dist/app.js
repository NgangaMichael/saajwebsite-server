import express from 'express';
import path from "path";
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import sequelize from './db/index.js';
import userRoutes from './api/routes/userRoutes.js';
import committeeRoutes from './api/routes/committeeRoutes.js';
import subcommitteeRoutes from './api/routes/subcommitteeRoutes.js';
import documentRoutes from './api/routes/documentRoutes.js';
import communicationRoutes from './api/routes/communicationRoutes.js';
import logRoutes from './api/routes/logRoutes.js';
import authRoutes from "./api/routes/authRoutes.js";
import config from './config/index.js';
import { errorHandler } from './utils/errors.js';
import { logger } from './utils/logger.js';
const app = express();
// app.use(cors());
app.use(cors({
    origin: "http://localhost:5173", // frontend URL
    // origin: "https://saaj.ke", // frontend URL
    credentials: true, // allow cookies / auth headers
}));
app.use("/api/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(helmet());
app.use(express.json());
app.use(rateLimit({ windowMs: 60_000, max: 100 }));
app.use('/api/users', userRoutes);
app.use('/api/committees', committeeRoutes);
app.use('/api/subcommittees', subcommitteeRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/communications', communicationRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/auth", authRoutes);
// health check
app.get('/health', (_req, res) => res.json({ up: true }));
// central error handler
app.use(errorHandler);
// ensure DB connection before starting (optional sync in dev)
async function prepare() {
    try {
        await sequelize.authenticate();
        logger.info('DB connected');
        if (config.env === 'development') {
            // Be careful in prod: use migrations instead
            await sequelize.sync({ alter: false });
        }
    }
    catch (err) {
        logger.error('DB connection failed', err);
        throw err;
    }
}
export { app, prepare };
//# sourceMappingURL=app.js.map