import { prisma } from "../../../../database/prisma";
import { convertHourStringToMinutes, getDaysOfWeekFromIndexArray } from "../../../../utils/dateFunctions";
import { Ad, AdByGame, AdCreationParams, AdDiscord } from "../../dto/Ad";
import { IAdsRepository } from "../IAdsRepository";

export class AdsRepository implements IAdsRepository {
	async create(data: AdCreationParams): Promise<Ad> {
		var userDays = getDaysOfWeekFromIndexArray(data.weekDays.map(Number));

		const ad = await prisma.ad.create({
			data: {
				gameId: data.gameId,
				name: data.name,
				yearsPlaying: data.yearsPlaying,
				discord: data.discord,
				weekDays: userDays,
				hourStart: convertHourStringToMinutes(data.hourStart),
				hourEnd: convertHourStringToMinutes(data.hourEnd),
				useVoiceChannel: data.useVoiceChannel,
			}
		});

		return ad;
	}

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