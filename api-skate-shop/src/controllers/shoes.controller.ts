import { Request, Response } from "express";

import createShoesService from "../services/shoes/create-shoes.service";
import getAllShoesService from "../services/shoes/get-all-shoes.service";
import { updateShoesByIdService } from "../services/shoes/update-shoes-by-id.service";
import { getShoesById } from "../services/shoes/get-shoes-by-id.service";
import { deleteShoesService } from "../services/shoes/delete-shoes.service";
import { getOnSaleShoesService } from "../services/shoes/get-on-sale-shoes.service";

class ShoesController {
  static async create(req: Request, res: Response) {
    const payload = req.body;

    const result = await createShoesService(payload);

    const { statusCode, data, message } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async getAll(req: Request, res: Response) {
    const { query } = req;

    const result = await getAllShoesService(query);

    const { statusCode, data, message } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async getOnSaleShoes(req: Request, res: Response) {
    const result = await getOnSaleShoesService();

    const { statusCode, data, message } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async getByID(req: Request, res: Response) {
    const id = req.params.id;

    const result = await getShoesById(id);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }

  static async update(req: Request, res: Response) {
    const id = req.params.id;
    const payload = req.body;

    const result = await updateShoesByIdService(id, payload);

    const { statusCode, data, message } = result;

    res.status(statusCode).json({
      data,
      message,
    });
  }

  static async delete(req: Request, res: Response) {
    const id = req.params.id;

    const result = await deleteShoesService(id);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }
}

export default ShoesController;
