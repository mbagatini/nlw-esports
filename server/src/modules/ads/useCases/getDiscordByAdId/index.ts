import { AdsRepository } from "../../repositories/prisma/AdsRepository";
import { GetDiscordByAdIdController } from "./GetDiscordByAdIdController";
import { GetDiscordByAdIdUseCase } from "./GetDiscordByAdIdUseCase";

export function getDiscordByAdIdController() {
	const adsRepository = new AdsRepository();

	const useCase = new GetDiscordByAdIdUseCase(adsRepository);

	const controller = new GetDiscordByAdIdController(useCase);

	return controller;
}