import { Request, Response } from "express";
import { createUserService } from "../services/users/create-user.service";
import { findUserByNameService } from "../services/users/find-user-by-name.service";

export class UsersController {
  static async create(req: Request, res: Response) {
    const payload = req.body;

    const result = await createUserService(payload);

    const { message, statusCode, data } = result as any;

    res.status(statusCode).json({ message, data });
  }

  static async findByName(req: Request, res: Response) {
    const { name } = req.params;

    const result = await findUserByNameService(name);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }
}
