import type { Request, Response } from "express";
import * as authService from "../../services/authService.js";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const { token, user } = await authService.login(email, password);

    // Convert Sequelize instance to a plain object, then strip fields
    // that should never be sent to the client.
    const userData = user.toJSON ? user.toJSON() : user;
    const { password: _pw, ...safeUser } = userData;

    res.json({
      token,
      user: safeUser,
    });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
}