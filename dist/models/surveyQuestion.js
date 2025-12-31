var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Table, Column, Model, DataType, ForeignKey, BelongsTo, } from "sequelize-typescript";
import { Survey } from "./survey.js";
let SurveyQuestion = class SurveyQuestion extends Model {
};
__decorate([
    ForeignKey(() => Survey),
    Column({ type: DataType.INTEGER, allowNull: false })
], SurveyQuestion.prototype, "surveyId", void 0);
__decorate([
    BelongsTo(() => Survey, {
        foreignKey: "surveyId",
        constraints: false,
    })
], SurveyQuestion.prototype, "survey", void 0);
__decorate([
    Column({ type: DataType.TEXT, allowNull: false })
], SurveyQuestion.prototype, "questionText", void 0);
__decorate([
    Column({
        type: DataType.ENUM("text", "multiple_choice"),
        defaultValue: "text",
    })
], SurveyQuestion.prototype, "questionType", void 0);
__decorate([
    Column(DataType.JSON)
], SurveyQuestion.prototype, "options", void 0);
SurveyQuestion = __decorate([
    Table({ tableName: "survey_questions" })
], SurveyQuestion);
export { SurveyQuestion };
//# sourceMappingURL=surveyQuestion.js.map