import { Router } from "express";

import { CharactersController } from "../controllers/characters.controller";

const charactersRouter = Router();

charactersRouter.post("/", CharactersController.create);

export default charactersRouter;
