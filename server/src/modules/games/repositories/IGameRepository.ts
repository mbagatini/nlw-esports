import { Game } from "../dto/Game";

export interface IGameRepository {
	list(): Promise<Game[]>;
}