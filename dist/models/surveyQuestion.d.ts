import { Model } from "sequelize-typescript";
import { Survey } from "./survey.js";
export declare class SurveyQuestion extends Model<SurveyQuestion> {
    surveyId: number;
    survey: Survey;
    questionText: string;
    questionType: string;
    options: string[] | null;
}
//# sourceMappingURL=surveyQuestion.d.ts.map