import { Model } from "sequelize-typescript";
import { User } from "./user.js";
import { Survey } from "./survey.js";
export declare class SurveyResponse extends Model<SurveyResponse> {
    surveyId: number;
    userId: number;
    answers: any;
    user: User;
    survey: Survey;
}
//# sourceMappingURL=surveyResponse.d.ts.map