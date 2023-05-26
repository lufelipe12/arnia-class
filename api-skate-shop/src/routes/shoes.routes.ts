import { Router } from "express";

import ShoesController from "../controllers/shoes.controller";

const shoesRouter = Router();

shoesRouter.get("/", ShoesController.getAll);
shoesRouter.get("/onSale", ShoesController.getOnSaleShoes);
shoesRouter.get("/:id", ShoesController.getByID);

shoesRouter.post("/", ShoesController.create);

shoesRouter.put("/:id", ShoesController.update);

shoesRouter.delete("/:id", ShoesController.delete);

export default shoesRouter;
