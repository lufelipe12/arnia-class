import { Request, Response } from "express";
import { createUserService } from "../services/users/create-user.service";

export class UsersController {
  static async create(req: Request, res: Response) {
    const payload = req.body;

    const newUser = await createUserService(payload);

    res.status(201).json(newUser);
  }
}
