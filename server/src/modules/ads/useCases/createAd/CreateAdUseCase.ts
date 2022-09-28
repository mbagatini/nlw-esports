import { Ad, AdCreationParams } from "../../dto/Ad";
import { IAdsRepository } from "../../repositories/IAdsRepository";

export class CreateAdUseCase {
	private adsRepository: IAdsRepository;

	constructor(adsRepository: IAdsRepository) {
		this.adsRepository = adsRepository;
	}

	async execute(data: AdCreationParams): Promise<Ad> {
		const ad = await this.adsRepository.create(data);
		return ad;
	}
}