import { Request, Response } from "express";
import { ZodError } from "zod";
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
			if (error instanceof ZodError) {
				return res.status(400).json(error.flatten().fieldErrors);
			}

			return res.status(400).json(error);
		}
	}
}