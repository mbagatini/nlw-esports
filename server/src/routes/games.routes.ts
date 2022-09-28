import { Router } from "express";
import { creatAdController } from "../modules/ads/useCases/createAd";
import { listAdsByGameIdController } from "../modules/ads/useCases/listAdsByGameId";
import { listGamesController } from "../modules/games/useCases/listGames";

export const gamesRouter = Router();

gamesRouter.get("/", async (req, res) => {
	return listGamesController().handle(req, res);
})

gamesRouter.get("/:id/ads", async (req, res) => {
	return listAdsByGameIdController().handle(req, res);
})

gamesRouter.post("/:id/ads", async (req, res) => {
	return creatAdController().handle(req, res);
})
