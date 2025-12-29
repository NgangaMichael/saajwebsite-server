import { Model } from "sequelize-typescript";
import { SurveyQuestion } from "./surveyQuestion.js";
import { SurveyResponse } from "./surveyResponse.js";
export declare class Survey extends Model<Survey> {
    title: string;
    description: string;
    isActive: boolean;
    questions: SurveyQuestion[];
    responses: SurveyResponse[];
}
//# sourceMappingURL=survey.d.ts.map