// working with return types in TypeScript
// Function that returns a string
function greet(name: string): string {
    return `Hello, ${name}!`;
}
let greeting: string = greet("World");
console.log(greeting);

// Function that returns a number
function add(a: number, b: number): number {
    return a + b;
}
let sum: number = add(5, 10);
console.log(sum);

// Function that returns a boolean
function isEven(num: number): boolean {
    return num % 2 === 0;
}
let evenCheck: boolean = isEven(4);
console.log(evenCheck);
// Function that returns void
function logMessage(message: string): void {
    console.log("Log:", message);
}   
logMessage("This is a test message.");

// Function that returns an array of numbers
function getNumbers(): number[] {
    return [1, 2, 3, 4, 5];
}
let numbersArray: number[] = getNumbers();
console.log(numbersArray);
// Function that returns a tuple
function getTuple(): [string, number, boolean] {
    return ["Tuple", 42, true];
}
let myTuple: [string, number, boolean] = getTuple();
console.log(myTuple);
// Function that returns an object
type User = {
    id: number;
    name: string;
    isActive: boolean;
};
function getUser(): User {
    return { id: 1, name: "Alice", isActive: true };
}
let user: User = getUser();
console.log(user);
// Function that returns a Promise
function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    })
};
fetchData().then((data) => {  
fetchData().then((data) => console.log(data));
// Function that returns never
function throwError(message: string): never {
    throw new Error(message);
}
})// Uncommenting the following line will cause the program to throw an error
// throwError("This is a critical error!");
