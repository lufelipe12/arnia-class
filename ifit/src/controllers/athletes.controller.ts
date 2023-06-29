import { Request, Response } from "express";

import { createAthleteService } from "../services/athletes/create-athlete.service";
import { findAthletesService } from "../services/athletes/find-athletes.service";
import { findAthleteByIdService } from "../services/athletes/find-athlete-by-id.service";
import { updateAthleteService } from "../services/athletes/update-athlete.service";

export class AthletesController {
  static async create(req: Request | any, res: Response) {
    // const { personalTrainerId, personalTrainerSport } = req.user;

    const payload = {
      ...req.body,
      personalTrainerId: req.user.personalTrainerId,
      personalTrainerSport: req.user.personalTrainerSport,
    };

    const result = await createAthleteService(payload);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async find(req: Request, res: Response) {
    const result = await findAthletesService();

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;

    const result = await findAthleteByIdService(id);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async update(req: Request | any, res: Response) {
    const { user } = req;
    const { id } = req.params;
    const { height, weight, age } = req.body;

    const result = await updateAthleteService(
      user,
      { height, weight, age },
      id
    );

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }
}
