//working with arrays in typescript
// Array of strings
let stringArray: string[] = ["apple", "banana", "cherry"];
stringArray.push("date");
console.log("String Array:", stringArray);

// Array of numbers
let numberArray: number[] = [1, 2, 3, 4, 5];
numberArray.push(6);
console.log("Number Array:", numberArray);

// Array of booleans
let booleanArray: boolean[] = [true, false, true];
booleanArray.push(false);
console.log("Boolean Array:", booleanArray);

// Array of objects
type Person = {
    name: string;
    age: number;
};

let peopleArray: Person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
peopleArray.push({ name: "Charlie", age: 35 });
console.log("People Array:", peopleArray);
// Multidimensional array
let multiArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
multiArray.push([10, 11, 12]);
console.log("Multidimensional Array:", multiArray);
// Function that processes an array of numbers and returns their sum
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}   
let total = sumArray(numberArray);
console.log("Sum of Number Array:", total); 

// Generic function to create an array of a specified type
function createArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let stringList = createArray<string>(["one", "two", "three"]);
console.log("Generic String Array:", stringList);   
let numberList = createArray<number>([10, 20, 30]);
console.log("Generic Number Array:", numberList);

// Using ReadonlyArray to create an immutable array
let readonlyArray: ReadonlyArray<string> = ["red", "green", "blue"];
console.log("Readonly Array:", readonlyArray);
// readonlyArray.push("yellow"); // invalid, will cause a TypeScript error
// readonlyArray[0] = "purple"; // invalid, will cause a TypeScript error

// Tuple type for fixed-size array with different types
let tupleArray: [string, number, boolean] = ["tuple", 100, true];
console.log("Tuple Array:", tupleArray);
// tupleArray.push("extra"); // valid, but not recommended as it breaks the fixed size concept
// tupleArray[0] = 200; // invalid, will cause a TypeScript error
// Function that accepts a tuple and logs its contents
function displayTuple(tuple: [string, number, boolean]): void {
    console.log(`String: ${tuple[0]}, Number: ${tuple[1]}, Boolean: ${tuple[2]}`);
}