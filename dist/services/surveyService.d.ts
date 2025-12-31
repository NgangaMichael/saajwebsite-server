import { SurveyRepository } from "../repositories/surveyRepository.js";
export declare class SurveyService {
    repo: SurveyRepository;
    createSurvey(data: any): Promise<import("../models/survey.js").Survey>;
    getSurveyById(surveyId: number): Promise<import("../models/survey.js").Survey>;
    listAvailableSurveys(userId: number): Promise<{
        alreadySubmitted: boolean;
        title: string;
        description: string;
        isActive: boolean;
        questions: import("../models/surveyQuestion.js").SurveyQuestion[];
        responses: import("../models/surveyResponse.js").SurveyResponse[];
        id?: number | any;
        createdAt?: Date | any;
        updatedAt?: Date | any;
        deletedAt?: Date | any;
        version?: number | any;
        _attributes: import("../models/survey.js").Survey;
        dataValues: import("../models/survey.js").Survey;
        _creationAttributes: import("../models/survey.js").Survey;
        isNewRecord: boolean;
        sequelize: import("sequelize").Sequelize;
        _model: import("sequelize").Model<import("../models/survey.js").Survey, import("../models/survey.js").Survey>;
    }[]>;
    submitResponse(userId: number, surveyId: number, answers: any): Promise<import("../models/surveyResponse.js").SurveyResponse>;
    getSurveyAnalytics(surveyId: number): Promise<import("../models/surveyResponse.js").SurveyResponse[]>;
}
//# sourceMappingURL=surveyService.d.ts.map