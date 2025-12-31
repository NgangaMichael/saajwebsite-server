var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// src/models/log.ts
import { Table, Column, Model, DataType } from "sequelize-typescript";
let Log = class Log extends Model {
    entity; // e.g. "Committee"
    entityId; // primary key of the entity
    action; // "UPDATE", "DELETE", etc.
    beforeData; // previous state (optional, for updates/deletes)
    afterData; // new state (optional, for updates)
    performedBy; // allow null or undefined
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Log.prototype, "entity", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.INTEGER })
], Log.prototype, "entityId", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Log.prototype, "action", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.JSON })
], Log.prototype, "beforeData", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.JSON })
], Log.prototype, "afterData", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.STRING })
], Log.prototype, "performedBy", void 0);
Log = __decorate([
    Table({ tableName: "logs" })
], Log);
export { Log };
//# sourceMappingURL=surveyquestions.js.map