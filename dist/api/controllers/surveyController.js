import { SurveyService } from "../../services/surveyService.js";
const service = new SurveyService();
export const createSurvey = async (req, res, next) => {
    try {
        const survey = await service.createSurvey(req.body);
        res.status(201).json({ data: survey });
    }
    catch (err) {
        next(err);
    }
};
export const getSurveys = async (req, res, next) => {
    try {
        // Usually you get userId from your auth token (req.user.id)
        const userId = Number(req.query.userId);
        const data = await service.listAvailableSurveys(userId);
        res.json({ data });
    }
    catch (err) {
        next(err);
    }
};
export const submitResponse = async (req, res, next) => {
    try {
        const { surveyId, userId, answers } = req.body;
        const data = await service.submitResponse(userId, surveyId, answers);
        res.json({ message: "Survey submitted successfully", data });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
//# sourceMappingURL=surveyController.js.map