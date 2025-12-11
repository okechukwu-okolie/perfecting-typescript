//strict null checks CAN MAKE USE OF UNIONS
let title = 'intro to special types';
let description = undefined;
let rating = null;
console.log("Title:", title);
console.log("Description:", description);
console.log("Rating:", rating);
//calling a function that has no return value
function logMessage(message) {
    console.log("Log:", message);
}
logMessage("This is a test message.");
//function that never returns
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// avoid the use of the ANY type
let data = "This can be anything";
console.log("Data before:", data);
data = 42;
console.log("Data after:", data);
// Using 'unknown' type
let input = "Could be any type";
if (typeof input === "string") {
    console.log("Input is a string of length:", input.length);
}
input = 100;
if (typeof input === "number") {
    console.log("Input is a number:", input.toFixed(2));
}
export {};
// Uncommenting the next line will cause a TypeScript error
// console.log("Input as string:", input.toUpperCase());
// Uncommenting the next line will cause the program to throw an error
// throwError("This is a critical error!");
// You can uncomment the lines above one at a time to see their effects and TypeScript's type checking in action.
//# sourceMappingURL=03_special.js.map