import cors from 'cors';
import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

/*
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
*/

app.listen(3333, () => {
	console.log("🚀 Aplication running on port 3333");
});