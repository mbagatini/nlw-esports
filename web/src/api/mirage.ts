import { belongsTo, createServer, hasMany, Model } from "miragejs";

export function createFakeAPI() {
	createServer({
		models: {
			game: Model.extend({
				ads: hasMany(),
			}),
			ad: Model.extend({
				gameId: belongsTo(),
			}),
		},

		seeds(server) {
			server.create("game", {
				"id": "490f4e3a-3aa0-4e7e-bcf4-abdaceb83487",
				"title": "Fortinite",
				"banner": "https://static-cdn.jtvnw.net/ttv-boxart/33214_IGDB-300x360.jpg",
				"_count": {
					"ads": 5
				}
			});
			server.create("game", {
				"id": "4b580a92-2474-43d9-a76c-f406e47ee41a",
				"title": "Just Chatting",
				"banner": "https://static-cdn.jtvnw.net/ttv-boxart/509658-300x360.jpg",
				"_count": {
					"ads": 0
				}
			});
			server.create("game", {
				"id": "68daa487-bbfe-41aa-beb6-dcf120d60672",
				"title": "APEX LEGENDS",
				"banner": "https://static-cdn.jtvnw.net/ttv-boxart/511224_IGDB-210x280.jpg",
				"_count": {
					"ads": 0
				}
			});
			server.create("game", {
				"id": "7836b748-a0e2-4483-90db-6d3a4faedd13",
				"title": "CS GO",
				"banner": "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-300x360.jpg",
				"_count": {
					"ads": 0
				}
			});
			server.create("game", {
				"id": "80848e26-164b-4e28-8d01-64028fe5f3d4",
				"title": "Minecraft",
				"banner": "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-300x360.jpg",
				"_count": {
					"ads": 5
				}
			});
			server.create("game", {
				"id": "aa866e72-3113-468a-8c01-92bcaddfc780",
				"title": "Dota 2",
				"banner": "https://static-cdn.jtvnw.net/ttv-boxart/29595_IGDB-300x360.jpg",
				"_count": {
					"ads": 1
				}
			});
			server.create("game", {
				"id": "ba7e262b-730a-4165-988c-f33eb24082be",
				"title": "Leage of Legends",
				"banner": "https://static-cdn.jtvnw.net/ttv-boxart/21779_IGDB-300x360.jpg",
				"_count": {
					"ads": 1
				}
			});
			server.create("game", {
				"id": "cf168fb2-2428-44b6-8bf8-6a3f6f494e24",
				"title": " CALL OF DUTY: MODERN WARFARE II",
				"banner": "https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-210x280.jpg",
				"_count": {
					"ads": 8
				}
			});
			server.create("game", {
				"id": "d46dc9d8-89c6-46fa-9465-9ead89298dfd",
				"title": " FIFA 23",
				"banner": "https://static-cdn.jtvnw.net/ttv-boxart/1745202732_IGDB-300x360.jpg",
				"_count": {
					"ads": 1
				}
			});
			server.create("game", {
				"id": "e6c83575-8bb4-4215-a48a-eca8a3f97150",
				"title": "VALORANT",
				"banner": "https://static-cdn.jtvnw.net/ttv-boxart/516575_IGDB-300x360.jpg",
				"_count": {
					"ads": 0
				}
			});
		},

		routes() {
			this.urlPrefix = 'http://localhost:3333';

			this.get("/games", (schema) => {
				const games = schema.all("game");
				return games.models;
			})

			this.post("/games/:id/ads", (schema, request) => {
				let game = schema.find("game", request.params.id);
				console.warn(game);

				let attrs = JSON.parse(request.requestBody);
				attrs.gameId = game;
				console.warn(attrs);

				return schema.create("ad", attrs);
			})
		},
	})
}