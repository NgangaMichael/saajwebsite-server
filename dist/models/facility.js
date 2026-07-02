var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let Facility = class Facility extends Model {
    name;
    location;
    committee;
    staff;
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Facility.prototype, "name", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Facility.prototype, "location", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Facility.prototype, "committee", void 0);
__decorate([
    Column({ type: DataType.STRING })
], Facility.prototype, "staff", void 0);
Facility = __decorate([
    Table({ tableName: 'facilities' })
], Facility);
export { Facility };
//# sourceMappingURL=facility.js.map