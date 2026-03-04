/*
Adventure Game
This will be a text-based adventure game where the player will be able to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change based on their decisions.
*/
// Display the game title
console.log("Welcome to the Adventure Game!");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

const readline = require("readline-sync");

// Get player name
const playerName = readline.question("What's your name, adventure? ");
console.log(`welcome, ${playerName}! Your adventure begins now.`);

// Information about the player 
const playerHealth = 100;
const playerGold = 20;
const currentLocation = "village";
const gameRunning = true;

let inventory = [];

// Create variables for player stats