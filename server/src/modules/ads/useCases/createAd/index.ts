import { AdsRepository } from "../../repositories/prisma/AdsRepository";
import { CreateAdController } from "./CreateAdController";
import { CreateAdUseCase } from "./CreateAdUseCase";

export function creatAdController() {
	const adsRepository = new AdsRepository();

	const useCase = new CreateAdUseCase(adsRepository);

	const controller = new CreateAdController(useCase);

	return controller;
}