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

// Initialize player stats
const playerStats = {
  health: 100,
  mana: 50,
  stamina: 75,
  experience: 0,
  level: 1,
  gold: 0,
  inventory: []
};

// Display player stats
console.log(`\n=== ${playerName}'s Stats ===`);
console.log(`Health: ${playerStats.health}`);
console.log(`Mana: ${playerStats.mana}`);
console.log(`Stamina: ${playerStats.stamina}`);
console.log(`Level: ${playerStats.level}`);
console.log(`Experience: ${playerStats.experience}`);
console.log(`Gold: ${playerStats.gold}\n`);

