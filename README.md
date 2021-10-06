# Guess My Card

The game uses JavaScript popup windows - [confirm, prompt
and alert](https://javascript.info/alert-prompt-confirm) to play the game with the user.

It randomly selects a
suit of cards (Clubs, Diamonds, Hearts, Spades) and
has the user guess which suit it is.

If the guess matches the selected suit, the user is the
winner. Otherwise the user is the loser.

## ViteJS

The project uses ViteJS to build the site and run the
server during development. Refer to [ViteJS](https://vitejs.dev/) for more information.

## Installation

```
npm install
```

## VS Code Extensions

1. Prettier
2. ESLint
3. Better Comments
4. Live Server

## Write Code

1. getRandomInt(min, max) in random.js
2. Card game logic in app.js

## Test getRandomInt(min, max)

1. Run Jest from test/random.test.js
2. Run Jest at command line

```
npm test
```

## Run the Vite Server to Test

```
npm run dev
```

The server is configured to open the page at http://localhost:3000

When the server is running, go to that url for testing.

## Stop the Vite Server When Saving Changes

The Vite server normally is able to continue running as files are edited and save.

For this project you may find that each time you make a change to the code, you need to stop and restart the Vite server.server.

To stop the server hit Ctrl-C in the terminal.
