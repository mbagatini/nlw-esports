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