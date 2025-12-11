// working with literals
// String literal types
let direction;
direction = 'north'; // valid
// direction = 'up'; // invalid, will cause a TypeScript error
console.log("Direction:", direction);
// Numeric literal types
let diceRoll;
diceRoll = 4; // valid
// diceRoll = 7; // invalid, will cause a TypeScript error
console.log("Dice Roll:", diceRoll);
// Boolean literal types
let isActive;
isActive = true;
console.log("Is Active:", isActive);
// isActive = null; // invalid, will cause a TypeScript error       
// Using literal types in function parameters
function move(direction) {
    console.log(`Moving ${direction}`);
}
move('east'); // valid
let currentStatus;
currentStatus = 'success';
console.log("Current Status:", currentStatus);
currentStatus = 404;
console.log("Current Status:", currentStatus);
export {};
// currentStatus = true; // invalid, will cause a TypeScript error
//# sourceMappingURL=05_literals.js.map