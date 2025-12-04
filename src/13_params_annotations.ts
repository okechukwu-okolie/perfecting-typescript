//working with params annotations in typescript
// Function with typed parameters and return type
function greet(name: string, age: number): string {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

let greetingMessage: string = greet("Alice", 30);
console.log(greetingMessage);
// Function with optional parameter
function introduce(name: string, age?: number): string {
    if (age) {
        return `Hi, I'm ${name} and I'm ${age} years old.`;
    } else {
        return `Hi, I'm ${name}.`;
    }
}

let introMessage1: string = introduce("Bob", 25);
console.log(introMessage1);

let introMessage2: string = introduce("Charlie");
console.log(introMessage2);
// Function with default parameter
function welcome(name: string, country: string = "USA"): string {
    return `Welcome, ${name}, from ${country}!`;
}
let welcomeMessage1: string = welcome("David", "Canada");
console.log(welcomeMessage1);
let welcomeMessage2: string = welcome("Eva");
console.log(welcomeMessage2);
// Function with rest parameters
function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}   
let totalSum: number = sumNumbers(1, 2, 3, 4, 5);
console.log("Total Sum:", totalSum); 
let totalSum2: number = sumNumbers(10, 20, 30);
console.log("Total Sum 2:", totalSum2);
// Function type annotation
type MathOperation = (x: number, y: number) => number;
let multiply: MathOperation = (a: number, b: number): number => {
    return a * b;
};
let product: number = multiply(5, 6);
console.log("Product:", product);   
let divide: MathOperation = (a: number, b: number): number => {
    return a / b;
};
let quotient: number = divide(20, 4);
console.log("Quotient:", quotient); 
// Example of using function types as parameters
function performOperation(x: number, y: number, operation: MathOperation): number {
    return operation(x, y);
}       
let operationResult1: number = performOperation(8, 2, multiply);
console.log("Operation Result 1 (Multiply):", operationResult1); 
let operationResult2: number = performOperation(8, 2, divide);
console.log("Operation Result 2 (Divide):", operationResult2);
// Example of union types in function parameters
type Cat = {
    name: string;
    meow: () => void;

}
type Dog = {    
    name: string;
    bark: () => void;
}
type Pet = Cat | Dog;

function makeSound(pet: Pet): void {    
    if ('meow' in pet) {
        pet.meow();
    } else {
        pet.bark();
    }
}