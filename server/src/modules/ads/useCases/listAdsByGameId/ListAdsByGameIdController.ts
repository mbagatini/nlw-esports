import { Request, Response } from "express";
import { ListAdsByGameIdUseCase } from "./ListAdsByGameIdUseCase";

export class ListAdsByGameIdController {
	private useCase: ListAdsByGameIdUseCase;

	constructor(useCase: ListAdsByGameIdUseCase) {
		this.useCase = useCase;
	}

	async handle(req: Request, res: Response) {
		try {
			const gameId = req.params.id;
			const ads = await this.useCase.execute(gameId);
			return res.json(ads);
		} catch (error) {
			return res.status(400).json({ error: (error as Error).message });
		}
	}
}