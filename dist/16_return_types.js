// working with return types in TypeScript
// Function that returns a string
function greet(name) {
    return `Hello, ${name}!`;
}
let greeting = greet("World");
console.log(greeting);
// Function that returns a number
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log(sum);
// Function that returns a boolean
function isEven(num) {
    return num % 2 === 0;
}
let evenCheck = isEven(4);
console.log(evenCheck);
// Function that returns void
function logMessage(message) {
    console.log("Log:", message);
}
logMessage("This is a test message.");
// Function that returns an array of numbers
function getNumbers() {
    return [1, 2, 3, 4, 5];
}
let numbersArray = getNumbers();
console.log(numbersArray);
// Function that returns a tuple
function getTuple() {
    return ["Tuple", 42, true];
}
let myTuple = getTuple();
console.log(myTuple);
function getUser() {
    return { id: 1, name: "Alice", isActive: true };
}
let user = getUser();
console.log(user);
// Function that returns a Promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
;
fetchData().then((data) => {
    fetchData().then((data) => console.log(data));
    // Function that returns never
    function throwError(message) {
        throw new Error(message);
    }
}); // Uncommenting the following line will cause the program to throw an error
export {};
// throwError("This is a critical error!");
//# sourceMappingURL=16_return_types.js.map