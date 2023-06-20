import { Router } from "express";

import { multerMiddleware } from "../middlewares/multer.middleware";

const routes = Router();

let users: any[] = [];

// routes.use(multerMiddleware.single("picture")) ---> forma de utilizar middleware para todas rotas desse router

routes.post("/users", multerMiddleware.single("picture"), (req, res) => {
  console.log("PICTURE ---> ", req.file);
  console.log("BODY ---> ", req.body);

  const newUser = {
    name: req.body.name,
    age: req.body.age,
    picture: req.file?.filename,
  };

  users.push(newUser);

  res.status(201).json({
    message: "ok",
  });
});

routes.get("/users", (req, res) => {
  res.status(200).json({
    message: "Users found.",
    data: users,
  });
});

export default routes;
