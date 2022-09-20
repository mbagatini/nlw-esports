import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { convertHourStringToMinutes, convertMinutesToHoursString, getDaysOfWeekFromIndexArray } from './utils/dateFunctions';

const app = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get("/games", async (req: Request, res: Response) => {
	const response = await prisma.game.findMany({
		include: {
			_count: {
				select: {
					ads: true
				}
			}
		}
	});

	return res.json(response);
});

app.get("/games/:id/ads", async (req: Request, res: Response) => {
	const gameId = req.params.id;

	const response = await prisma.ad.findMany({
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

	const formattedResponse = response.map(ad => {
		return {
			...ad,
			hourStart: convertMinutesToHoursString(ad.hourStart),
			hourEnd: convertMinutesToHoursString(ad.hourEnd),
		}
	});

	return res.json(formattedResponse);
});



app.listen(3333, () => {
	console.log("🚀 Aplication running on port 3333");
});