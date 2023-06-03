import { Request, Response } from "express";
import { createCharacterService } from "../services/characters/create-character.service";
import { findAllCharactersService } from "../services/characters/find-all-characters.service";
import { findCharacterByUserIdService } from "../services/characters/find-characters-by-user-id.service";

export class CharactersController {
  static async create(req: Request, res: Response) {
    const payload = req.body;

    const result = await createCharacterService(payload);

    const { message, statusCode, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async findAll(req: Request, res: Response) {
    const result = await findAllCharactersService();

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async findByUserId(req: Request, res: Response) {
    const { userId } = req.params;

    const result = await findCharacterByUserIdService(userId);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }
}
