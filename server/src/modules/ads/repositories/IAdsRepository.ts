import { Ad, AdDiscord } from "../dto/Ad";

export interface IAdsRepository {
	list(): Promise<Ad[]>;
	getDiscordByAdId(id: string): Promise<AdDiscord>;
}