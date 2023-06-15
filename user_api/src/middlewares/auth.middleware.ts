import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import { IUser } from "../database/entities/user.entity";

export function authMiddleware(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  const { headers } = req;
  const { authorization } = headers;

  const { originalUrl } = req;
  const { method } = req;

  if (authorization) {
    const [, token] = authorization?.split(" ");

    if (token) {
      const secretKey = process.env.JWT_SECRET_KEY as string;

      const user = jwt.verify(token, secretKey) as IUser;

      if (originalUrl === "/users" && method === "GET" && !user.isAdmin) {
        return res.status(401).json({
          message: "Not suficient permissions.",
          data: null,
        });
      }

      req.user = user;

      next();

      return;
    }
  }

  res.status(401).json({
    message: "Not authorized.",
    data: null,
  });
}
