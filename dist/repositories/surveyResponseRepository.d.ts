import { SurveyResponse } from "../models/surveyResponse.js";
import { Transaction } from "sequelize";
export declare class SurveyResponseRepository {
    create(payload: Partial<SurveyResponse>, trx?: Transaction | null): Promise<SurveyResponse>;
    findBySurvey(surveyId: number): Promise<SurveyResponse[]>;
    findByUser(userId: number): Promise<SurveyResponse[]>;
    findByUserAndSurvey(userId: number, surveyId: number): Promise<SurveyResponse | null>;
    delete(id: number, trx?: Transaction | null): Promise<SurveyResponse | null>;
}
//# sourceMappingURL=surveyResponseRepository.d.ts.map