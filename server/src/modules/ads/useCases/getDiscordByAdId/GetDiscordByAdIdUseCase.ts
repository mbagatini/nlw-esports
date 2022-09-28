import { AdDiscord } from "../../dto/Ad";
import { IAdsRepository } from "../../repositories/IAdsRepository";

export class GetDiscordByAdIdUseCase {
	private adsRepository: IAdsRepository;

	constructor(adsRepository: IAdsRepository) {
		this.adsRepository = adsRepository;
	}

	async execute(id: string): Promise<AdDiscord> {
		const discord = await this.adsRepository.getDiscordByAdId(id);
		return discord;
	}
}