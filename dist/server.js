import { app, prepare } from './app.js';
import config from './config/index.js';
import { logger } from './utils/logger.js';
(async () => {
    try {
        await prepare();
        app.listen(config.port, () => logger.info(`Server running on port ${config.port}`));
    }
    catch (err) {
        logger.error('Failed to start server', err);
        process.exit(1);
    }
})();
//# sourceMappingURL=server.js.map