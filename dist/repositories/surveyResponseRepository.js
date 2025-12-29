import { SurveyResponse } from "../models/surveyResponse.js";
import { User } from "../models/user.js";
import { Survey } from "../models/survey.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class SurveyResponseRepository {
    async create(payload, trx = null) {
        const created = await SurveyResponse.create(payload, { transaction: trx });
        await logService.logAction({
            entity: "SurveyResponse",
            entityId: created.id,
            action: "CREATE",
            afterData: created.toJSON(),
        });
        return created;
    }
    async findBySurvey(surveyId) {
        return SurveyResponse.findAll({
            where: { surveyId },
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "username", "email"]
                }
            ],
            order: [["submittedAt", "DESC"]]
        });
    }
    async findByUser(userId) {
        return SurveyResponse.findAll({
            where: { userId },
            include: [
                {
                    model: Survey,
                    as: "survey"
                }
            ],
            order: [["submittedAt", "DESC"]]
        });
    }
    async findByUserAndSurvey(userId, surveyId) {
        return SurveyResponse.findOne({
            where: { userId, surveyId }
        });
    }
    async delete(id, trx = null) {
        const response = await SurveyResponse.findByPk(id);
        if (!response)
            return null;
        const beforeData = response.toJSON();
        await response.destroy({ transaction: trx });
        await logService.logAction({
            entity: "SurveyResponse",
            entityId: id,
            action: "DELETE",
            beforeData,
        });
        return response;
    }
}
//# sourceMappingURL=surveyResponseRepository.js.map