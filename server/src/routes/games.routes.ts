import { Router } from "express";
import { listGamesController } from "../modules/games/useCases/listGames";

export const gamesRouter = Router();

gamesRouter.get("/", async (req, res) => {
	return listGamesController().handle(req, res);
})
