//working with arrays in typescript
// Array of strings
let stringArray = ["apple", "banana", "cherry"];
stringArray.push("date");
console.log("String Array:", stringArray);
// Array of numbers
let numberArray = [1, 2, 3, 4, 5];
numberArray.push(6);
console.log("Number Array:", numberArray);
// Array of booleans
let booleanArray = [true, false, true];
booleanArray.push(false);
console.log("Boolean Array:", booleanArray);
let peopleArray = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
peopleArray.push({ name: "Charlie", age: 35 });
console.log("People Array:", peopleArray);
// Multidimensional array
let multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
multiArray.push([10, 11, 12]);
console.log("Multidimensional Array:", multiArray);
// Function that processes an array of numbers and returns their sum
function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
let total = sumArray(numberArray);
console.log("Sum of Number Array:", total);
// Generic function to create an array of a specified type
function createArray(items) {
    return new Array().concat(items);
}
let stringList = createArray(["one", "two", "three"]);
console.log("Generic String Array:", stringList);
let numberList = createArray([10, 20, 30]);
console.log("Generic Number Array:", numberList);
// Using ReadonlyArray to create an immutable array
let readonlyArray = ["red", "green", "blue"];
console.log("Readonly Array:", readonlyArray);
// readonlyArray.push("yellow"); // invalid, will cause a TypeScript error
// readonlyArray[0] = "purple"; // invalid, will cause a TypeScript error
// Tuple type for fixed-size array with different types
let tupleArray = ["tuple", 100, true];
console.log("Tuple Array:", tupleArray);
// tupleArray.push("extra"); // valid, but not recommended as it breaks the fixed size concept
// tupleArray[0] = 200; // invalid, will cause a TypeScript error
// Function that accepts a tuple and logs its contents
function displayTuple(tuple) {
    console.log(`String: ${tuple[0]}, Number: ${tuple[1]}, Boolean: ${tuple[2]}`);
}
export {};
//# sourceMappingURL=10_arrays.js.map