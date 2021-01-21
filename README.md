[![Netlify Status](https://api.netlify.com/api/v1/badges/391cd143-e6ff-4fbc-be29-89cee61b5467/deploy-status)](https://tennis-game-senior-project.netlify.app/)

# Tennis Game

## Primary Objective

Keep the ball from passing your player while trying to make your opponent miss the ball and score on them. The player with the highest score wins.

## How to Win

The player wins by achieving a predetermined amount of points, or by having the highest score after a preset time. Games should ideally be around 3-5 minutes.

## Detailed Description

The game will be a pong clone. It will have a tennis aesthetic though instead of the barebones blocks and balls aesthetic of pong. The player will play against an opponent and try to get the ball past them to score a point. The player will block the ball from passing them to avoid getting scored on as well. There will be a score limit which will be selected by the player to determine how long of a game they want to play.

## Rules

1. Games can be score or time based
2. Players score by getting the ball past their opponent
3. Player can get scored on if the ball gets past them
4. Characters can only be moved vertically
5. The ball is always in movement and never goes out of play unless a player scores
6. After the game is over, the player will receive a coupon, based on the score, for one of the stores at the airport.

## Gameplay

The player controls an in-game tennis player by moving it vertically across the left or right side of the screen. They can compete against another player controlling a second tennis player on the opposing side, or an AI controlled opponent. Players use the tennis players to hit a ball back and forth with the objective of trying to get the ball past the opponent to score. The objective is to score more than your opponent to get to a specified score, or have the highest score after a set amount of time.

## Developer Notes

Make sure you have npm installed. If you need help, follow [these directions](https://www.npmjs.com/get-npm). After downloading or cloning the project, run this in the directory:

```
npm install
```

The project's dependencies will be installed, including Phaser and the HTTP server to run the project in a browser. To build the project using the source files, run:

```
npm run dev
```

To check for syntax errors, run:

```
npm run test
```

To build for deployment, run:

```
npm run deploy
```
