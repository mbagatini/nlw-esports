import { z } from "zod";
import { Ad, AdCreationParams } from "../../dto/Ad";
import { IAdsRepository } from "../../repositories/IAdsRepository";

export class CreateAdUseCase {
	private adsRepository: IAdsRepository;

	constructor(adsRepository: IAdsRepository) {
		this.adsRepository = adsRepository;
	}

	async execute(data: AdCreationParams): Promise<Ad> {
		const adSchema = z.object({
			gameId: z.string().uuid({ message: "Game ID is required" }),
			name: z.string().min(1, { message: "Name is required" }),
			discord: z.string().min(1, { message: "Discord is required" }),
			yearsPlaying: z.number(),
			hourStart: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, { message: "Hour start is required (format HH:MM)" }),
			hourEnd: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, { message: "Hour end is required (format HH:MM)" }),
			weekDays: z.array(z.number()).min(1, { message: "Week days is required" }),
			useVoiceChannel: z.boolean(),
		});

		adSchema.parse(data);

		const ad = await this.adsRepository.create(data);
		return ad;
	}
}