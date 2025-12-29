import { Survey } from "../models/survey.js";
import { SurveyQuestion } from "../models/surveyQuestion.js";
import { SurveyResponse } from "../models/surveyResponse.js";
import { Transaction } from "sequelize";

export class SurveyRepository {
  // Create Survey + Questions in one go
  async create(payload: any, trx: Transaction) {
    const { questions, ...surveyData } = payload;
    const survey = await Survey.create(surveyData, { transaction: trx });
    
    if (questions && questions.length > 0) {
      const questionsWithIds = questions.map((q: any) => ({ ...q, surveyId: survey.id }));
      await SurveyQuestion.bulkCreate(questionsWithIds, { transaction: trx });
    }
    return survey;
  }

  // Find all surveys and include their questions
  async findAll() {
    return Survey.findAll({ include: [SurveyQuestion] });
  }

  // Check if a specific user has already answered a specific survey
  async findResponse(surveyId: number, userId: number) {
    return SurveyResponse.findOne({ where: { surveyId, userId } });
  }

  // Save a member's answer
  async saveResponse(data: any, trx: Transaction) {
    return SurveyResponse.create(data, { transaction: trx });
  }

  // Get results for admin (includes user info and their answers)
  async getFullResults(surveyId: number) {
    return SurveyResponse.findAll({
      where: { surveyId },
      include: ["user"]
    });
  }
}