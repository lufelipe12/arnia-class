import { Request, Response } from "express";

import { findAllPersonalTrainersService } from "../services/personal-trainers/find-all-personal-trainers.service";
import { createPersonalTrainerService } from "../services/personal-trainers/create-personal-trainer.service";
import { findPersonalTrainerByIdService } from "../services/personal-trainers/find-personal-trainer-by-id.service";

export class PersonalTrainersController {
  static async findAll(req: Request, res: Response) {
    const filter = req.query;

    const result = await findAllPersonalTrainersService(filter);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;

    const result = await findPersonalTrainerByIdService(id);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async create(req: Request, res: Response) {
    const payload = req.body;

    const result = await createPersonalTrainerService(payload);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }
}
