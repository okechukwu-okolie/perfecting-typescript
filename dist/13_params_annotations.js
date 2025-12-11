//working with params annotations in typescript
// Function with typed parameters and return type
function greet(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}
let greetingMessage = greet("Alice", 30);
console.log(greetingMessage);
// Function with optional parameter
function introduce(name, age) {
    if (age) {
        return `Hi, I'm ${name} and I'm ${age} years old.`;
    }
    else {
        return `Hi, I'm ${name}.`;
    }
}
let introMessage1 = introduce("Bob", 25);
console.log(introMessage1);
let introMessage2 = introduce("Charlie");
console.log(introMessage2);
// Function with default parameter
function welcome(name, country = "USA") {
    return `Welcome, ${name}, from ${country}!`;
}
let welcomeMessage1 = welcome("David", "Canada");
console.log(welcomeMessage1);
let welcomeMessage2 = welcome("Eva");
console.log(welcomeMessage2);
// Function with rest parameters
function sumNumbers(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
let totalSum = sumNumbers(1, 2, 3, 4, 5);
console.log("Total Sum:", totalSum);
let totalSum2 = sumNumbers(10, 20, 30);
console.log("Total Sum 2:", totalSum2);
let multiply = (a, b) => {
    return a * b;
};
let product = multiply(5, 6);
console.log("Product:", product);
let divide = (a, b) => {
    return a / b;
};
let quotient = divide(20, 4);
console.log("Quotient:", quotient);
// Example of using function types as parameters
function performOperation(x, y, operation) {
    return operation(x, y);
}
let operationResult1 = performOperation(8, 2, multiply);
console.log("Operation Result 1 (Multiply):", operationResult1);
let operationResult2 = performOperation(8, 2, divide);
console.log("Operation Result 2 (Divide):", operationResult2);
function makeSound(pet) {
    if ('meow' in pet) {
        pet.meow();
    }
    else {
        pet.bark();
    }
}
export {};
//# sourceMappingURL=13_params_annotations.js.map