import { Request, Response } from "express";
import { ListGamesUseCase } from "./ListGamesUseCase";

export class ListGamesController {
	private useCase: ListGamesUseCase;

	constructor(useCase: ListGamesUseCase) {
		this.useCase = useCase;
	}

	async handle(req: Request, res: Response) {
		try {
			const games = await this.useCase.execute();
			return res.json(games);
		} catch (error) {
			return res.status(400).json({ error: (error as Error).message });
		}
	}
}