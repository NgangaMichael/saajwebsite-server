import * as authService from "../../services/authService.js";
export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const { token, user } = await authService.login(email, password);
        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                phone: user.phone, // 🆕 Added
                age: user.age,
                dob: user.dob, // 🆕 Added
                idpassport: user.idpassport, // 🆕 Added
                nationality: user.nationality, // 🆕 Added
                gender: user.gender,
                maritalStatus: user.maritalStatus,
                employmentstatus: user.employmentstatus, // 🆕 Added
                occupation: user.occupation, // 🆕 Added
                level: user.level,
                designation: user.designation,
                committee: user.committee,
                subCommittee: user.subCommittee,
                approveStatus: user.approveStatus,
                subscription: user.subscription,
                subdate: user.subdate,
                fileNumber: user.fileNumber,
                staff: user.staff,
                membertype: user.membertype // 🆕 Added
            },
        });
    }
    catch (err) {
        res.status(401).json({ error: err.message });
    }
}
//# sourceMappingURL=authController.js.map