<p align="center">Next Level Week #9</p>

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

# 💻 About this project

You know when you are playing a game really cool and you want a friend to play it with you? Here it is.

In this version of NLW, we are going to build an application to find game duos!

To find a duo, the person will create an ad to a game, providing the required info. The ones interested in playing the same game will check the ad details, if it's a duo match, they connect over Discord and start playing together. 

This is an entirely complete application, which includes the development of the server, web and mobile applications.


# Backend

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

# Front-end

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

# Mobile

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


# 🔖 Application layout

You can check the layout of this project clicking in the link below:

 - [Check on Figma](https://www.figma.com/file/pvnBIymuQKg2QIe5pYtEOE/NLW-eSports-(Community)?node-id=6%3A23)

You must have Figma account to access it!

# 📝 License

This project is under MIT license.
