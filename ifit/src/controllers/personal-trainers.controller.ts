import { Request, Response } from "express";
import { findAllPersonalTrainersService } from "../services/personal-trainers/find-all-personal-trainers.service";

export class PersonalTrainersController {
  static async findAll(req: Request, res: Response) {
    const result = await findAllPersonalTrainersService();

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }
}
