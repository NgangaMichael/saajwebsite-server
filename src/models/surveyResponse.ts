import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user.js";
import { Survey } from "./survey.js";

@Table({ tableName: "survey_responses" })
export class SurveyResponse extends Model<SurveyResponse> {
  @ForeignKey(() => Survey)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare surveyId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare userId: number;

  @Column({ type: DataType.JSON, allowNull: false })
  declare answers: any; // Stores JSON: { "questionId": "answer" }

  @BelongsTo(() => User)
  declare user: User;

  @BelongsTo(() => Survey)
  declare survey: Survey;
}