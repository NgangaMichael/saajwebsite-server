import { Survey } from "../models/survey.js";
import { SurveyResponse } from "../models/surveyResponse.js";
import { Transaction } from "sequelize";
export declare class SurveyRepository {
    create(payload: any, trx: Transaction): Promise<Survey>;
    findAll(): Promise<Survey[]>;
    findById(surveyId: number): Promise<Survey | null>;
    findResponse(surveyId: number, userId: number): Promise<SurveyResponse | null>;
    saveResponse(data: any, trx: Transaction): Promise<SurveyResponse>;
    getFullResults(surveyId: number): Promise<SurveyResponse[]>;
    update(id: number, payload: any, trx: Transaction): Promise<Survey | null>;
    delete(id: number): Promise<number>;
}
//# sourceMappingURL=surveyRepository.d.ts.map