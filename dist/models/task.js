var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Table, Column, Model, DataType } from "sequelize-typescript";
let Task = class Task extends Model {
};
__decorate([
    Column({ type: DataType.INTEGER, allowNull: false })
], Task.prototype, "createdById", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false })
], Task.prototype, "createdByUsername", void 0);
__decorate([
    Column({ type: DataType.INTEGER, allowNull: false })
], Task.prototype, "assigneeId", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false })
], Task.prototype, "assigneeUsername", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false })
], Task.prototype, "title", void 0);
__decorate([
    Column({ type: DataType.TEXT, allowNull: false })
], Task.prototype, "description", void 0);
__decorate([
    Column({ type: DataType.DATEONLY, allowNull: false })
], Task.prototype, "dueDate", void 0);
__decorate([
    Column({ type: DataType.DATE, allowNull: true })
], Task.prototype, "reminderAt", void 0);
__decorate([
    Column({ type: DataType.STRING, defaultValue: "Pending" })
], Task.prototype, "status", void 0);
__decorate([
    Column({ type: DataType.TEXT, allowNull: true })
], Task.prototype, "challengesDescription", void 0);
__decorate([
    Column({ type: DataType.TEXT, allowNull: true })
], Task.prototype, "adminComments", void 0);
Task = __decorate([
    Table({ tableName: "tasks" })
], Task);
export { Task };
//# sourceMappingURL=task.js.map