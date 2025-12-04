// when defining a varianle in typescript, it caninfer on the data type of the variable
let count = 2 + 2;
console.log("Count is:", count);
let name = "John Doe";
console.log("Name is:", name);
let isActive = true;
console.log("Is Active:", isActive);
// count is inferred as number
// name is inferred as string
// isActive is inferred as boolean
// we can also define arrays and objects
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers are:", numbers);
let user = {
    id: 1,
    username: "johndoe",
    email: "johndoe@example.com"
};
console.log("User is:", user);
// numbers is inferred as number[]
// user is inferred as { id: number; username: string; email: string; }
// functions can also have inferred return types
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
;
console.log("Sum is:", sum);
// add function is inferred to return a number
function greet(userName) {
    return `Hello, ${userName}!`;
}
let greeting = greet("Alice");
console.log(greeting);
export {};
// greet function is inferred to return a string
// TypeScript's type inference helps catch errors early and improves code readability
// For example, uncommenting the following line would cause a type error
// count = "four"; // Error: Type 'string' is not assignable to type 'number'
//# sourceMappingURL=01_inference.js.map