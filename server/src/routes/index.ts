import { Router } from "express";

import { gamesRouter } from "./games.routes";

export const router = Router();

router.use("/games", gamesRouter);