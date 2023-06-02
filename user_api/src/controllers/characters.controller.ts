import { Request, Response } from "express";
import { createCharacterService } from "../services/characters/create-character.service";

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
}
