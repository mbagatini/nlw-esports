import { Router } from "express";
import { listAdsController } from "../modules/ads/useCases/listAds";
import { getDiscordByAdIdController } from "../modules/ads/useCases/getDiscordByAdId";

export const adsRouter = Router();

adsRouter.get("/", (req, res) => {
	return listAdsController().handle(req, res);
});

adsRouter.get("/:id/discord", (req, res) => {
	return getDiscordByAdIdController().handle(req, res);
});