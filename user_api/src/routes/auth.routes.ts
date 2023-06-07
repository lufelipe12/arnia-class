import { Router } from "express";

import { AuthController } from "../controllers/auth.controllert";

const authRouter = Router();

authRouter.post("/", AuthController.auth);

export default authRouter;
