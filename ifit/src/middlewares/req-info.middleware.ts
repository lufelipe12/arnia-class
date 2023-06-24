import { Request, Response, NextFunction } from "express";

export async function reqInfoMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("1) INFORMATION - REQUEST METHOD:", req.method);
  console.log("2) INFORMATION - REQUEST URL:", req.url);

  console.log(
    "3) INFORMATION - TIME OF REQUEST:",
    new Date().toLocaleString("pt-br")
  );

  next();
}
