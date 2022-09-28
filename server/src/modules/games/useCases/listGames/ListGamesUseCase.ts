import { Game } from "../../dto/Game";
import { IGameRepository } from "../../repositories/IGameRepository";

export class ListGamesUseCase {
	private gameRepository: IGameRepository;

	constructor(gameRepository: IGameRepository) {
		this.gameRepository = gameRepository;
	}

	async execute(): Promise<Game[]> {
		const games = await this.gameRepository.list();
		return games;
	}
}