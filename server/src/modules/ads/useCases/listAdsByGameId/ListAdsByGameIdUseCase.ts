import { convertMinutesToHoursString } from "../../../../utils/dateFunctions";
import { AdByGame } from "../../dto/Ad";
import { IAdsRepository } from "../../repositories/IAdsRepository";

type AdListByGame = Omit<AdByGame, "hourStart" | "hourEnd"> | { hourStart: string, hourEnd: string };

export class ListAdsByGameIdUseCase {
	private adsRepository: IAdsRepository;

	constructor(adsRepository: IAdsRepository) {
		this.adsRepository = adsRepository;
	}

	async execute(gameId: string): Promise<AdListByGame[]> {
		const ads = await this.adsRepository.listAdsByGameId(gameId);

		const formattedAds = ads.map(ad => {
			return {
				...ad,
				hourStart: convertMinutesToHoursString(ad.hourStart),
				hourEnd: convertMinutesToHoursString(ad.hourEnd),
			}
		});

		return formattedAds;
	}
}