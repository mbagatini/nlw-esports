import { prisma } from "../../../../database/prisma";
import { Ad, AdByGame, AdDiscord } from "../../dto/Ad";
import { IAdsRepository } from "../IAdsRepository";

export class AdsRepository implements IAdsRepository {
	async list(): Promise<Ad[]> {
		const ads = await prisma.ad.findMany();
		return ads;
	}

	async listAdsByGameId(gameId: string): Promise<AdByGame[]> {
		const ads = await prisma.ad.findMany({
			select: {
				id: true,
				name: true,
				weekDays: true,
				yearsPlaying: true,
				hourStart: true,
				hourEnd: true,
				useVoiceChannel: true,
			},
			where: {
				gameId,
			}
		});

		return ads;
	}

	async getDiscordByAdId(id: string): Promise<AdDiscord> {
		const discord = await prisma.ad.findUniqueOrThrow({
			select: {
				discord: true,
			},
			where: {
				id,
			}
		});

		return discord;
	}

}