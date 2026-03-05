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