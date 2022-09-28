import cors from 'cors';
import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

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

app.get("/ads", async (req: Request, res: Response) => {
	const response = await prisma.ad.findMany();

	const formattedResponse = response.map(ad => {
		return {
			...ad,
			hourStart: convertMinutesToHoursString(ad.hourStart),
			hourEnd: convertMinutesToHoursString(ad.hourEnd),
		}
	});

	return res.json(formattedResponse);
});

app.get("/ads/:id/discord", async (req: Request, res: Response) => {
	const id = req.params.id;

	const response = await prisma.ad.findUniqueOrThrow({
		select: {
			discord: true,
		},
		where: {
			id,
		}
	});

	return res.json(response);
});

app.post("/games/:id/ads", async (req: Request, res: Response) => {
	const gameId = req.params.id;
	const body = req.body;

	console.log(body)

	var userDays = getDaysOfWeekFromIndexArray(body.weekDays.map(Number));

	const ad = await prisma.ad.create({
		data: {
			gameId,
			name: body.name,
			yearsPlaying: body.yearsPlaying,
			discord: body.discord,
			weekDays: userDays,
			hourStart: convertHourStringToMinutes(body.hourStart),
			hourEnd: convertHourStringToMinutes(body.hourEnd),
			useVoiceChannel: body.useVoiceChannel,
		}
	});

	return res.status(201).json(ad);
});


app.listen(3333, () => {
	console.log("🚀 Aplication running on port 3333");
});