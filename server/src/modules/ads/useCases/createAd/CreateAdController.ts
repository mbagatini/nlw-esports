import { Request, Response } from "express";
import { CreateAdUseCase } from "./CreateAdUseCase";

export class CreateAdController {
	constructor(private useCase: CreateAdUseCase) {
		this.useCase = useCase;
	}

	async handle(req: Request, res: Response) {
		try {
			const gameId = req.params.id;
			const data = { gameId, ...req.body };

			const ad = await this.useCase.execute(data);

			return res.status(201).json(ad);
		} catch (error) {
			return res.status(400).json({ error: (error as Error).message });
		}
	}
}