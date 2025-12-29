var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user.js";
import { Survey } from "./survey.js";
let SurveyResponse = class SurveyResponse extends Model {
};
__decorate([
    ForeignKey(() => Survey),
    Column({ type: DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], SurveyResponse.prototype, "surveyId", void 0);
__decorate([
    ForeignKey(() => User),
    Column({ type: DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], SurveyResponse.prototype, "userId", void 0);
__decorate([
    Column({ type: DataType.JSON, allowNull: false }),
    __metadata("design:type", Object)
], SurveyResponse.prototype, "answers", void 0);
__decorate([
    BelongsTo(() => User),
    __metadata("design:type", User)
], SurveyResponse.prototype, "user", void 0);
__decorate([
    BelongsTo(() => Survey),
    __metadata("design:type", Survey)
], SurveyResponse.prototype, "survey", void 0);
SurveyResponse = __decorate([
    Table({ tableName: "survey_responses" })
], SurveyResponse);
export { SurveyResponse };
//# sourceMappingURL=surveyResponse.js.map