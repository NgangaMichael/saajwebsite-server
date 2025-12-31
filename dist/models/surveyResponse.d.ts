import { Model } from "sequelize-typescript";
import { User } from "./user.js";
import { Survey } from "./survey.js";
export declare class SurveyResponse extends Model<SurveyResponse> {
    surveyId: number;
    userId: number;
    survey: Survey;
    user: User;
    answers: any;
}
//# sourceMappingURL=surveyResponse.d.ts.map