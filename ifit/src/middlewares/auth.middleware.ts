import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export async function authMiddleware(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  try {
    const { headers } = req;

    const { authorization } = headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Authorization failed.",
        data: null,
      });
    }

    const [, token] = authorization.split(" ");

    if (!token) {
      return res.status(401).json({
        message: "Authorization failed.",
        data: null,
      });
    }

    const secretKey = process.env.SECRET_KEY as string;

    const userLogged = jwt.verify(token, secretKey);

    req.user = userLogged;

    next();

    return;
  } catch (error: any) {
    console.log(error);

    return res.status(500).json({
      message: error.message,
      data: null,
    });
  }
}
