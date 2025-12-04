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

