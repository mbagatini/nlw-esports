import { Ad as PrismaAd } from "@prisma/client";

export type Ad = PrismaAd;

export type AdDiscord = Pick<PrismaAd, "discord">;

export type AdByGame = Pick<PrismaAd,
	"id" |
	"name" |
	"weekDays" |
	"yearsPlaying" |
	"hourStart" |
	"hourEnd" |
	"useVoiceChannel"
>;

export type AdCreationParams = {
	gameId: string;
	name: string;
	discord: string;
	yearsPlaying: number;
	hourStart: string;
	hourEnd: string;
	weekDays: number[];
	useVoiceChannel: boolean;
}