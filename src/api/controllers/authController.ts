import type { Request, Response } from "express";
import * as authService from "../../services/authService.js";

export async function login(req: Request, res: Response) {
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
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
}
