var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let Committee = class Committee extends Model {
    name;
    head;
    mcrep;
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Committee.prototype, "name", void 0);
__decorate([
    Column({
        allowNull: false,
        type: DataType.STRING,
        // Automatically convert string back to Array when reading database records
        get() {
            const rawValue = this.getDataValue('head');
            return rawValue ? rawValue.split(',') : [];
        },
        // Automatically join the Array into a comma-separated string on save/update
        set(val) {
            if (Array.isArray(val)) {
                this.setDataValue('head', val.join(','));
            }
            else {
                this.setDataValue('head', val);
            }
        }
    })
], Committee.prototype, "head", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Committee.prototype, "mcrep", void 0);
Committee = __decorate([
    Table({ tableName: 'committees' })
], Committee);
export { Committee };
//# sourceMappingURL=committee.js.map