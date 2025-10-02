import * as authService from "../../services/authService.js";
export async function login(req, res) {
    try {
        // console.log(req.body)
        const { email, password } = req.body;
        const { token, user } = await authService.login(email, password);
        res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                level: user.level,
                designation: user.designation,
                approveStatus: user.approveStatus,
                subscription: user.subscription,
            },
        });
    }
    catch (err) {
        res.status(401).json({ error: err.message });
    }
}
//# sourceMappingURL=authController.js.map