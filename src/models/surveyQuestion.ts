import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Survey } from "./survey.js";

@Table({ tableName: "survey_questions" })
export class SurveyQuestion extends Model<SurveyQuestion> {

  // ✅ REQUIRED by sequelize-typescript
  @ForeignKey(() => Survey)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare surveyId: number;

  // ❌ no DB constraint, just Sequelize relation
  @BelongsTo(() => Survey, {
    foreignKey: "surveyId",
    constraints: false,
  })
  declare survey: Survey;

  @Column({ type: DataType.TEXT, allowNull: false })
  declare questionText: string;

  @Column({
    type: DataType.ENUM("text", "multiple_choice"),
    defaultValue: "text",
  })
  declare questionType: string;

  @Column(DataType.JSON)
  declare options: string[] | null;
}
