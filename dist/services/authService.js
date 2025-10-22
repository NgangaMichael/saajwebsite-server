import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";
export async function login(email, password) {
    // lookup by email
    const user = await User.findOne({ where: { email } });
    if (!user)
        throw new Error("Invalid credentials");
    console.log(user);
    // check hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
        throw new Error("Invalid credentials");
    // ✅ subscription check
    if (user.subscription !== "Active") {
        throw new Error("Your subscription is inactive. Please renew to continue.");
    }
    // issue JWT
    const token = jwt.sign({ id: user.id, email: user.email, level: user.level, username: user.username, }, JWT_SECRET, { expiresIn: "1h" });
    return { token, user };
}
//# sourceMappingURL=authService.js.map