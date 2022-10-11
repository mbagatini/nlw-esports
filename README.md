<p align="center">Next Level Week #9 - Ignite</p>

<h3 align="center">
  NLW eSports - Find your duo
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="NLW" src="https://img.shields.io/badge/NLW-08-%2304D361">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<img alt="NLW eSports" src="https://user-images.githubusercontent.com/17517028/194944504-f638f8ed-1942-4f0a-aaed-6eb601a74a2c.png" />

# 🎮 About this project

You know when you are playing a game really cool and you want a friend to play it with you? Here it is.

In this version of NLW, we are going to build an application to find game duos!

To find a duo, the person will create an ad to a game, providing the required info. The ones interested in playing the same game will check the ad details, if it's a duo match, they connect over Discord and start playing together. 

This is an entirely complete application, which includes the development of the server, web and mobile applications.


# ⚙ Backend

### Technology Stack

<p align="left">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
 </p>
 
 ### How to run it?

Clone the repository to your machine.

Enter on server folder:
```bash
$ cd server
```

Install the dependencies:

```bash
$ npm install
```

We need to save the records in the database, so in order to do it correctly, check the .env file wich contains the URL for the database connection. 

```env
$ DATABASE_URL="mysql://my_connection"
```

Change it to the database you want to connect. After that, it's time to run the migration:

```bash
$ npx prisma migrate dev
```

If the configuration is ready and connected to the database, let's start the application:
```bash
$ npm run dev
```

### API routes

Inside root folder, there is a file called `requests.http`. This file contains examples of requests to all API routes, as shown below:

```txt
# List all games
GET http://localhost:3333/games HTTP/1.1

# List all ads
GET http://localhost:3333/ads HTTP/1.1

# List ads for a specific game
GET http://localhost:3333/games/80848e26-164b-4e28-8d01-64028fe5f3d4/ads HTTP/1.1

# Get the discord username for the given ad
GET http://localhost:3333/ads/4524a2eb-61f8-4b76-aa52-524c898a918c/discord HTTP/1.1

# Create an ad
POST http://localhost:3333/games/80848e26-164b-4e28-8d01-64028fe5f3d4/ads HTTP/1.1
content-type: application/json

{
	"name": "player00",
	"yearsPlaying": 4,
	"discord": "letsplay",
	"weekDays": [3,4,5],
	"hourStart": "00:00",
	"hourEnd": "06:00",
	"useVoiceChannel": false
}
```

# 💻 Front-end

### Technology Stack

<p align="left">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
 </p>
 
 ### How to run it?

Clone the repository to your machine.

Enter on web folder:
```bash
$ cd web
```

Install the dependencies:

```bash
$ npm install
```

Let's start the application:
```bash
$ npm run dev
```

### Important note

In order to deploy the application without deploying the backend server, [Mirage JS ](https://miragejs.com/) was used to mock the backend API.

If you want to connect to the backend project, comment the call to the function `createFakeAPI` on `App.tsx`.

# 📱 Mobile

### Technology Stack

<p align="left">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" />
 </p>


### How to run it?

Clone the repository to your machine.

Enter on mobile folder:
```bash
$ cd mobile
```

Install the dependencies:

```bash
$ npm install
```

Let's start the application:
```bash
$ expo start
```

You can run the application directly on your phone, using the Expo Go app, or use an emulator.


# 🎨 Application layout

You can check the layout of this project clicking in the link below:

 - [Check on Figma](https://www.figma.com/file/pvnBIymuQKg2QIe5pYtEOE/NLW-eSports-(Community)?node-id=6%3A23)

You must have Figma account to access it!

# 🚀 Online app

Wanna see the application online? 

- [https://nlw-esports-morgs.vercel.app](https://nlw-esports-morgs.vercel.app)


# 📝 License

This project is under MIT license.
