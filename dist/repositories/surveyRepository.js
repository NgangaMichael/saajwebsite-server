import { Survey } from "../models/survey.js";
import { SurveyQuestion } from "../models/surveyQuestion.js";
import { SurveyResponse } from "../models/surveyResponse.js";
import { Transaction } from "sequelize";
export class SurveyRepository {
    // Create Survey + Questions in one go
    async create(payload, trx) {
        const { questions, ...surveyData } = payload;
        const survey = await Survey.create(surveyData, { transaction: trx });
        if (questions && questions.length > 0) {
            const questionsWithIds = questions.map((q) => ({ ...q, surveyId: survey.id }));
            await SurveyQuestion.bulkCreate(questionsWithIds, { transaction: trx });
        }
        return survey;
    }
    // Find all surveys and include their questions
    async findAll() {
        return Survey.findAll({ include: [SurveyQuestion] });
    }
    // SurveyRepository.ts
    async findById(surveyId) {
        return Survey.findByPk(surveyId, {
            include: [
                {
                    model: SurveyQuestion,
                    as: "questions"
                }
            ]
        });
    }
    // Check if a specific user has already answered a specific survey
    async findResponse(surveyId, userId) {
        return SurveyResponse.findOne({ where: { surveyId, userId } });
    }
    // Save a member's answer
    async saveResponse(data, trx) {
        return SurveyResponse.create(data, { transaction: trx });
    }
    // Get results for admin (includes user info and their answers)
    async getFullResults(surveyId) {
        return SurveyResponse.findAll({
            where: { surveyId },
            include: ["user"]
        });
    }
    async update(id, payload, trx) {
        const { questions, ...surveyData } = payload;
        // Update the main survey info
        await Survey.update(surveyData, { where: { id }, transaction: trx });
        if (questions) {
            // Simple approach: Delete old questions and bulk create new ones
            await SurveyQuestion.destroy({ where: { surveyId: id }, transaction: trx });
            const questionsWithIds = questions.map((q) => ({ ...q, surveyId: id }));
            await SurveyQuestion.bulkCreate(questionsWithIds, { transaction: trx });
        }
        return this.findById(id);
    }
    async delete(id) {
        return Survey.destroy({ where: { id } });
    }
}
//# sourceMappingURL=surveyRepository.js.map