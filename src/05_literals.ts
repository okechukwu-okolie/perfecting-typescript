// working with literals
// String literal types
let direction: 'north' | 'south' | 'east' | 'west';
direction = 'north'; // valid
// direction = 'up'; // invalid, will cause a TypeScript error
console.log("Direction:", direction);
// Numeric literal types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 4; // valid
// diceRoll = 7; // invalid, will cause a TypeScript error
console.log("Dice Roll:", diceRoll);

// Boolean literal types
let isActive: true | false;
isActive = true;

console.log("Is Active:", isActive);
// isActive = null; // invalid, will cause a TypeScript error       
// Using literal types in function parameters
function move(direction: 'north' | 'south' | 'east' | 'west') {
    console.log(`Moving ${direction}`);
}

move('east'); // valid
// move('up'); // invalid, will cause a TypeScript error
// Using literal types in union with other types
type Status = 'success' | 'error' | number;
let currentStatus: Status;
currentStatus = 'success';
console.log("Current Status:", currentStatus);
currentStatus = 404;
console.log("Current Status:", currentStatus);
// currentStatus = true; // invalid, will cause a TypeScript error