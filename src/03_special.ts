//strict null checks CAN MAKE USE OF UNIONS
let title: string = 'intro to special types';
let description: string | undefined = undefined;
let rating: number | null = null;

console.log("Title:", title);
console.log("Description:", description);
console.log("Rating:", rating);

//calling a function that has no return value
function logMessage(message: string): void {
    console.log("Log:", message);
}
logMessage("This is a test message.");

//function that never returns
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}   
// avoid the use of the ANY type
let data: any = "This can be anything";
console.log("Data before:", data);
data = 42;
console.log("Data after:", data);
// Using 'unknown' type
let input: unknown = "Could be any type";
if (typeof input === "string") {
    console.log("Input is a string of length:", input.length);
}
input = 100;
if (typeof input === "number") {
    console.log("Input is a number:", input.toFixed(2));
}
// Uncommenting the next line will cause a TypeScript error
// console.log("Input as string:", input.toUpperCase());
// Uncommenting the next line will cause the program to throw an error
// throwError("This is a critical error!");

// You can uncomment the lines above one at a time to see their effects and TypeScript's type checking in action.
