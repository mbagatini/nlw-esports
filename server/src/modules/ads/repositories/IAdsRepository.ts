import { Ad } from "../dto/Ad";

export interface IAdsRepository {
	list(): Promise<Ad[]>
}