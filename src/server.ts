import express from "express";
import { routes } from "./routes";
import { config } from "./utils/config";
import { ConnetDb } from "./utils/dbConfig";
import { log } from "./utils/logger";

const app = express();
const port = config.PORT;

app.listen(port, async () => {
  log.info(`server started at ${port}`);
  routes(app);
  await ConnetDb();
});
