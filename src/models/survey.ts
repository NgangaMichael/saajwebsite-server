import {
  Table,
  Column,
  Model,
  DataType,
  HasMany
} from "sequelize-typescript";
import { SurveyQuestion } from "./surveyQuestion.js";
import { SurveyResponse } from "./surveyResponse.js";

@Table({ tableName: "surveys" })
export class Survey extends Model<Survey> {

  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string;

  @Column(DataType.TEXT)
  declare description: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  declare isActive: boolean;

  @HasMany(() => SurveyQuestion)
  declare questions: SurveyQuestion[];

  @HasMany(() => SurveyResponse)
  declare responses: SurveyResponse[];
}
