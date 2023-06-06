import { NextFunction, Request, Response } from "express";

export function infoLogRequestMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(
    "INFO: datetime request --->",
    `${new Date().toLocaleString("pt-br")}`
  );
  console.log(
    "INFO: request method - endpoint --->",
    `${req.method} - ${req.url}`
  );

  next();
}
