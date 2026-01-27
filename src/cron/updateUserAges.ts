// src/cron/updateUserAges.ts
import cron from 'node-cron';
import { UserService } from '../services/userService.js';

const service = new UserService();

// 🕒 Runs once every month (1st day at 00:00)
cron.schedule('0 0 1 * *', async () => {
  console.log('Updating user ages...');
  await service.updateAgesFromDob();
});
