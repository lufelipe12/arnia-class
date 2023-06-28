import { Request, Response } from "express";

import { createAthleteService } from "../services/athletes/create-athlete.service";

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
}
