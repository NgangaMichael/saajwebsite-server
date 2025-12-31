import sequelize from "../db/index.js";
import { SurveyRepository } from "../repositories/surveyRepository.js";

export class SurveyService {
  repo = new SurveyRepository();

  async createSurvey(data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.create(data, trx);
    });
  }

  async getSurveyById(surveyId: number) {
    const survey = await this.repo.findById(surveyId);

    if (!survey) {
      throw new Error("Survey not found");
    }

    return survey;
  }

  async listAvailableSurveys(userId: number) {
    const surveys = await this.repo.findAll();
    // We map through surveys to flag which ones the user has already done
    const results = await Promise.all(surveys.map(async (s) => {
      const hasResponded = await this.repo.findResponse(s.id, userId);
      return { 
        ...s.toJSON(), 
        alreadySubmitted: !!hasResponded 
      };
    }));
    return results;
  }

  async submitResponse(userId: number, surveyId: number, answers: any) {
    return sequelize.transaction(async (trx) => {
      // Logic: Prevent double submission
      const existing = await this.repo.findResponse(surveyId, userId);
      if (existing) throw new Error("You have already completed this survey.");

      return this.repo.saveResponse({ userId, surveyId, answers }, trx);
    });
  }

  async getSurveyAnalytics(surveyId: number) {
    return this.repo.getFullResults(surveyId);
  }
}