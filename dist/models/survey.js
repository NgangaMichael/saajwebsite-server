var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { SurveyQuestion } from "./surveyQuestion.js";
import { SurveyResponse } from "./surveyResponse.js";
let Survey = class Survey extends Model {
};
__decorate([
    Column({ type: DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Survey.prototype, "title", void 0);
__decorate([
    Column({ type: DataType.TEXT }),
    __metadata("design:type", String)
], Survey.prototype, "description", void 0);
__decorate([
    Column({ type: DataType.BOOLEAN, defaultValue: true }),
    __metadata("design:type", Boolean)
], Survey.prototype, "isActive", void 0);
__decorate([
    HasMany(() => SurveyQuestion),
    __metadata("design:type", Array)
], Survey.prototype, "questions", void 0);
__decorate([
    HasMany(() => SurveyResponse),
    __metadata("design:type", Array)
], Survey.prototype, "responses", void 0);
Survey = __decorate([
    Table({ tableName: "surveys" })
], Survey);
export { Survey };
//# sourceMappingURL=survey.js.map