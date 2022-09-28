import { GameRepository } from "../../repositories/prisma/GameRepository";
import { ListGamesUseCase } from "./ListGamesUseCase";
import { ListGamesController } from "./ListGamesController";

export function listGamesController() {
	const gameRepository = new GameRepository();

	const listGamesUseCase = new ListGamesUseCase(gameRepository);

	const gameController = new ListGamesController(listGamesUseCase);

	return gameController;
}