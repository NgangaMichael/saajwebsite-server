import sequelize from "../db/index.js";
import { TaskRepository } from "../repositories/taskRepository.js";
export class TaskService {
    repo = new TaskRepository();
    async createTask(data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.create(data, trx);
        });
    }
    async listTasks() {
        return this.repo.findAll();
    }
    async listTasksByAssignee(assigneeId) {
        return this.repo.findByAssignee(assigneeId);
    }
    async listTasksByCreator(creatorId) {
        return this.repo.findByCreator(creatorId);
    }
    async updateTask(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deleteTask(id) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, trx);
        });
    }
}
//# sourceMappingURL=taskService.js.map