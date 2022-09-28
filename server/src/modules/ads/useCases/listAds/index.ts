import { AdsRepository } from "../../repositories/prisma/AdsRepository";
import { ListAdsController } from "./ListAdsController";
import { ListAdsUseCase } from "./ListAdsUseCase";

export function listAdsController() {
	const adsRepository = new AdsRepository();

	const listAdsUseCase = new ListAdsUseCase(adsRepository);

	const controller = new ListAdsController(listAdsUseCase);

	return controller;
}