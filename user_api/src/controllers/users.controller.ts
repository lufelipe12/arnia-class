import { Request, Response } from "express";

import { createUserService } from "../services/users/create-user.service";
import { findUserByIdService } from "../services/users/find-user-by-id.service";
import { getUsersProfileService } from "../services/users/get-user-profile.service";
import { getAllUsersService } from "../services/users/get-all-users.service";

export class UsersController {
  static async create(req: Request, res: Response) {
    const payload = req.body;

    const result = await createUserService(payload);

    const { message, statusCode, data } = result;

    res.status(statusCode).json({ message, data });
  }

  static async findAll(req: Request, res: Response) {
    const result = await getAllUsersService();

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;

    const result = await findUserByIdService(id);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async profile(req: Request | any, res: Response) {
    const { userId } = req.user;

    const result = await getUsersProfileService(userId);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }
}
