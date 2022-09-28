import { convertMinutesToHoursString } from "../../../../utils/dateFunctions";
import { AdList } from "../../dto/Ad";
import { IAdsRepository } from "../../repositories/IAdsRepository";

export class ListAdsUseCase {
	private adsRepository: IAdsRepository;

	constructor(adsRepository: IAdsRepository) {
		this.adsRepository = adsRepository;
	}

	async execute(): Promise<AdList[]> {
		const ads = await this.adsRepository.list();

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