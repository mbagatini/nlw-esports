import { Router } from "express";
import { listAdsController } from "../modules/ads/useCases/listAds";

export const adsRouter = Router();

adsRouter.get("/", (req, res) => {
	return listAdsController().handle(req, res);
});