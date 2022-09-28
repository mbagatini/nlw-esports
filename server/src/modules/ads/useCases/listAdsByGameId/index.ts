import { AdsRepository } from "../../repositories/prisma/AdsRepository";
import { ListAdsByGameIdController } from "./ListAdsByGameIdController";
import { ListAdsByGameIdUseCase } from "./ListAdsByGameIdUseCase";

export function listAdsByGameIdController() {
	const adsRepository = new AdsRepository();

	const useCase = new ListAdsByGameIdUseCase(adsRepository);

	const controller = new ListAdsByGameIdController(useCase);

	return controller;
}