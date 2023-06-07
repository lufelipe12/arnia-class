import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export function authMiddleware(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  const { headers } = req;
  const { authorization } = headers;

  if (authorization) {
    const [, token] = authorization?.split(" ");

    if (token) {
      const secretKey = process.env.JWT_SECRET_KEY as string;

      const user = jwt.verify(token, secretKey);

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
