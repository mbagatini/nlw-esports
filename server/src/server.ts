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



app.listen(3333, () => {
	console.log("🚀 Aplication running on port 3333");
});