import { prisma } from "../../../../database/prisma";
import { Ad, AdDiscord } from "../../dto/Ad";
import { IAdsRepository } from "../IAdsRepository";

export class AdsRepository implements IAdsRepository {
	async list(): Promise<Ad[]> {
		const ads = await prisma.ad.findMany();
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