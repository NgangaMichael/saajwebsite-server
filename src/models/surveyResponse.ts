import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./user.js";
import { Survey } from "./survey.js";

@Table({ tableName: "survey_responses" })
export class SurveyResponse extends Model<SurveyResponse> {

  // ✅ REQUIRED for Sequelize
  @ForeignKey(() => Survey)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare surveyId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare userId: number;

  // ❌ no DB FK
  @BelongsTo(() => Survey, {
    foreignKey: "surveyId",
    constraints: false,
  })
  declare survey: Survey;

  @BelongsTo(() => User, {
    foreignKey: "userId",
    constraints: false,
  })
  declare user: User;

  @Column({ type: DataType.JSON, allowNull: false })
  declare answers: any;
}
