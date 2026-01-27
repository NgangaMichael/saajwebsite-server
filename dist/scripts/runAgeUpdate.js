// src/scripts/runAgeUpdate.ts
import { UserService } from '../services/userService.js';
const service = new UserService();
(async () => {
    await service.updateAgesFromDob();
    console.log('Age update done');
    process.exit(0);
})();
//# sourceMappingURL=runAgeUpdate.js.map