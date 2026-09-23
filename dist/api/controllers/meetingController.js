import { MeetingService } from "../../services/meetingService.js";
const service = new MeetingService();
// Meetings have no Level 2 write path at all (Level 2 can only view/join),
// so unlike updateTask this doesn't need field-stripping per role - it's a
// flat "Level 3 or reject" check.
const isLevel3 = (req) => {
    const requestingUser = req.body?.currentUser || req.user;
    return requestingUser?.level === "Level 3";
};
export const createMeeting = async (req, res, next) => {
    try {
        if (!isLevel3(req)) {
            return res.status(403).json({ message: "Only Level 3 can schedule meetings." });
        }
        const meeting = await service.createMeeting(req.body);
        res.status(201).json({ data: meeting });
    }
    catch (err) {
        next(err);
    }
};
export const getMeetings = async (req, res, next) => {
    try {
        const { creatorId } = req.query;
        let meetings;
        if (creatorId) {
            meetings = await service.listMeetingsByCreator(Number(creatorId));
        }
        else {
            // Everyone else fetches all and filters by audience client-side,
            // same pattern the frontend already uses for Tasks.
            meetings = await service.listMeetings();
        }
        res.json({ data: meetings });
    }
    catch (err) {
        next(err);
    }
};
export const updateMeeting = async (req, res, next) => {
    try {
        if (!isLevel3(req)) {
            return res.status(403).json({ message: "Only Level 3 can modify meetings." });
        }
        const meetingId = Number(req.params.id);
        const updatePayload = { ...req.body };
        delete updatePayload.currentUser;
        // Ownership fields are set once at creation and shouldn't be overwritten
        // via edit, same convention as Task.
        delete updatePayload.createdById;
        delete updatePayload.createdByUsername;
        const meeting = await service.updateMeeting(meetingId, updatePayload);
        if (!meeting)
            return res.status(404).json({ message: "Meeting not found" });
        res.json({ data: meeting });
    }
    catch (err) {
        next(err);
    }
};
export const deleteMeeting = async (req, res, next) => {
    try {
        if (!isLevel3(req)) {
            return res.status(403).json({ message: "Only Level 3 can delete meetings." });
        }
        const meeting = await service.deleteMeeting(Number(req.params.id));
        if (!meeting)
            return res.status(404).json({ message: "Meeting not found" });
        res.json({ message: "Meeting record deleted successfully", data: meeting });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=meetingController.js.map