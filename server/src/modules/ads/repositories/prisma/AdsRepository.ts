import { prisma } from "../../../../database/prisma";
import { Ad } from "../../dto/Ad";
import { IAdsRepository } from "../IAdsRepository";

export class AdsRepository implements IAdsRepository {
	async list(): Promise<Ad[]> {
		const ads = await prisma.ad.findMany();
		return ads;
	}

}