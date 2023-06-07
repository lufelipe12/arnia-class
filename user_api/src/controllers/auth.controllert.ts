import { Request, Response } from "express";
import { authService } from "../services/auth/auth.service";

export class AuthController {
  static async auth(req: Request, res: Response) {
    const { email, password } = req.body;

    const result = await authService(email, password);

    const { statusCode, data, message } = result as any;

    res.status(statusCode).json({ message, data });
  }
}
