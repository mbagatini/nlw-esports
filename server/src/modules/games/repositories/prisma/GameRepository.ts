import { prisma } from "../../../../database/prisma";
import { Game } from "../../dto/Game";
import { IGameRepository } from "../IGameRepository";

export class GameRepository implements IGameRepository {
	async list(): Promise<Game[]> {
		const games = await prisma.game.findMany({
			include: {
				_count: {
					select: {
						ads: true
					}
				}
			}
		});

		return games;
	}
}