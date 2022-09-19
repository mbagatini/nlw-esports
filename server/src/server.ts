import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	return res.send("Olá!")
});

app.listen(3333, () => {
	console.log("🚀 Aplication running on port 3333");
});