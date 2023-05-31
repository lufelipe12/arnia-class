import { Request, Response } from "express";
import { createUserService } from "../services/users/create-user.service";

export class UsersController {
  static async create(req: Request, res: Response) {
    const payload = req.body;

    const result = await createUserService(payload);

    const { message, statusCode, data } = result as any;

    res.status(statusCode).json({ message, data });
  }
}
