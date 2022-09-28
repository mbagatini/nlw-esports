import { Request, Response } from "express";
import { GetDiscordByAdIdUseCase } from "./GetDiscordByAdIdUseCase";

export class GetDiscordByAdIdController {
	private useCase: GetDiscordByAdIdUseCase;

	constructor(useCase: GetDiscordByAdIdUseCase) {
		this.useCase = useCase;
	}

	async handle(req: Request, res: Response) {
		try {
			const id = req.params.id;
			const response = await this.useCase.execute(id)
			return res.json(response);
		} catch (error) {
			return res.status(400).json({ error: (error as Error).message });
		}
	}
}