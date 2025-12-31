var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// src/models/communication.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let Communication = class Communication extends Model {
    title;
    info;
    sender;
    sendto;
    sendtoid;
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Communication.prototype, "title", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.TEXT })
], Communication.prototype, "info", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.TEXT })
], Communication.prototype, "sender", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.TEXT })
], Communication.prototype, "sendto", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.INTEGER })
], Communication.prototype, "sendtoid", void 0);
Communication = __decorate([
    Table({ tableName: 'communications', timestamps: true })
], Communication);
export { Communication };
//# sourceMappingURL=communication.js.map