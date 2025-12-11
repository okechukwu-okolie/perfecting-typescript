//working with unions in typescript
// Union type for variable that can hold string or number
let identifier;
identifier = "user_123"; // valid
console.log("Identifier as string:", identifier);
identifier = 456; // valid
console.log("Identifier as number:", identifier);
// identifier = true; // invalid, will cause a TypeScript error 
// Function that accepts a union type parameter
function displayId(id) {
    console.log(`The ID is: ${id}`);
}
displayId("abc123"); // valid
displayId(789);
// valid
// displayId(true); // invalid, will cause a TypeScript error
// Union type with arrays   
let mixedArray = [];
mixedArray.push("hello");
mixedArray.push(42);
console.log("Mixed Array:", mixedArray);
let response1 = {
    status: 'success',
    data: "Here is your data"
};
let response2 = {
    status: 'error',
    data: null
};
console.log("Response 1:", response1);
console.log("Response 2:", response2);
function makeSound(pet) {
    if ('meow' in pet) {
        pet.meow();
    }
    else {
        pet.bark();
    }
}
const myCat = {
    name: "Whiskers",
    meow: () => console.log("Meow!")
};
const myDog = {
    name: "Rex",
    bark: () => console.log("Woof!")
};
makeSound(myCat);
makeSound(myDog); // Type narrowing with union types
function printValue(value) {
    if (typeof value === 'string') {
        console.log("String value:", value.toUpperCase());
    }
    else {
        console.log("Number value:", value.toFixed(2));
    }
}
//using 'in' operator for type narrowing
printValue("hello world");
printValue(123.456);
// Example of union type with null and undefined
let optionalValue;
optionalValue = "I have a value";
console.log("Optional Value:", optionalValue);
optionalValue = null;
console.log("Optional Value after setting to null:", optionalValue);
optionalValue = undefined;
console.log("Optional Value after setting to undefined:", optionalValue); // optionalValue = 100; // invalid, will cause a TypeScript error
// Example of union type with null and undefined
//array of unions and union of arrays
let arrayOfUnions = ["text", 100, "more text", 200];
console.log("Array of Unions:", arrayOfUnions);
let unionOfArrays;
unionOfArrays = ["only strings", "more strings"];
console.log("Union of Arrays (strings):", unionOfArrays);
unionOfArrays = [1, 2, 3, 4];
console.log("Union of Arrays (numbers):", unionOfArrays);
export {};
// unionOfArrays = ["text", 100]; // invalid, will cause a TypeScript error
//# sourceMappingURL=08_unions.js.map