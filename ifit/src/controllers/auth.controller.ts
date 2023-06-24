import { Request, Response } from "express";
import { loginService } from "../services/auth/login.service";

export class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const result = await loginService({ email, password });

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }
}
