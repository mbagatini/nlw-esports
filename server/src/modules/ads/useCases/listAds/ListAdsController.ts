import { Request, Response } from "express";
import { ListAdsUseCase } from "./ListAdsUseCase";

export class ListAdsController {
	private useCase: ListAdsUseCase;

	constructor(useCase: ListAdsUseCase) {
		this.useCase = useCase;
	}

	async handle(req: Request, res: Response) {
		try {
			const ads = await this.useCase.execute();
			return res.json(ads);
		} catch (error) {
			return res.status(400).json({ error: (error as Error).message });
		}
	}
}