import { Express, Request, Response } from "express";

export function routes(app: Express) {
  app.get("/health-check", (req: Request, res: Response) => {
    res.sendStatus(200);
  });
}
