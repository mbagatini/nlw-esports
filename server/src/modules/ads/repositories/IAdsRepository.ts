import { Ad, AdByGame, AdCreationParams, AdDiscord } from "../dto/Ad";

export interface IAdsRepository {
	list(): Promise<Ad[]>;
	listAdsByGameId(gameId: string): Promise<AdByGame[]>;
	getDiscordByAdId(id: string): Promise<AdDiscord>;
	create(data: AdCreationParams): Promise<Ad>;
}