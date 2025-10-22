import { LeaveService } from "../../services/leaveService.js";
const service = new LeaveService();
export const applyLeave = async (req, res, next) => {
    try {
        const leave = await service.createLeave(req.body);
        res.status(201).json({ data: leave });
    }
    catch (err) {
        next(err);
    }
};
export const getLeaves = async (_req, res, next) => {
    try {
        const leaves = await service.listLeaves();
        res.json({ data: leaves });
    }
    catch (err) {
        next(err);
    }
};
export const getLeavesByUser = async (req, res, next) => {
    try {
        const leaves = await service.listLeavesByUser(Number(req.params.userId));
        res.json({ data: leaves });
    }
    catch (err) {
        next(err);
    }
};
export const updateLeave = async (req, res, next) => {
    try {
        const leave = await service.updateLeave(Number(req.params.id), req.body);
        if (!leave)
            return res.status(404).json({ message: "Leave not found" });
        res.json({ data: leave });
    }
    catch (err) {
        next(err);
    }
};
export const deleteLeave = async (req, res, next) => {
    try {
        const leave = await service.deleteLeave(Number(req.params.id));
        if (!leave)
            return res.status(404).json({ message: "Leave not found" });
        res.json({ message: "Leave deleted", data: leave });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=leaveController.js.map