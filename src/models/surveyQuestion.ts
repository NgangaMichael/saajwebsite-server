import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Survey } from "./survey.js";

@Table({ tableName: "survey_questions" })
export class SurveyQuestion extends Model<SurveyQuestion> {
  @ForeignKey(() => Survey)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare surveyId: number;

  @BelongsTo(() => Survey)
  declare survey: Survey;

  @Column({ type: DataType.TEXT, allowNull: false })
  declare questionText: string;

  @Column({ 
    type: DataType.ENUM("text", "multiple_choice"), 
    defaultValue: "text" 
  })
  declare questionType: string;

  @Column({ type: DataType.JSON, allowNull: true })
  declare options: string[] | null; // e.g., ["Yes", "No", "Maybe"]
}