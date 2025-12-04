//what are tuples in typescript
// Tuple type for fixed-size array with different types
let tupleExample: [string, number, boolean];
tupleExample = ["Hello", 42, true]; // valid
console.log("Tuple Example:", tupleExample);

// Accessing tuple elements
let firstElement: string = tupleExample[0];
let secondElement: number = tupleExample[1];

console.log("First Element:", firstElement);
console.log("Second Element:", secondElement);
// tupleExample[3] = "extra"; // invalid, will cause a TypeScript error
// Function that accepts a tuple as a parameter
function displayTuple(tupleParam: [string, number, boolean]): void {
    console.log(`String: ${tupleParam[0]}, Number: ${tupleParam[1]}, Boolean: ${tupleParam[2]}`);
}
displayTuple(tupleExample); // valid

// Tuple with optional elements
let optionalTuple: [string, number, boolean?];
optionalTuple = ["Test", 100]; // valid
console.log("Optional Tuple:", optionalTuple);
optionalTuple = ["Test", 100, false]; // valid
console.log("Optional Tuple with Boolean:", optionalTuple); 
// Tuple with rest elements
let restTuple: [string, ...number[]];
restTuple = ["Numbers", 1, 2, 3, 4, 5]; // valid
console.log("Rest Tuple:", restTuple);

// Function that processes a tuple with rest elements
function processRestTuple(tupleParam: [string, ...number[]]): void {
    const [label, ...numbers] = tupleParam; 
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(`${label} Sum:`, sum);
}
processRestTuple(restTuple); // valid
// Tuple with readonly elements
let readonlyTuple: readonly [string, number];   
readonlyTuple = ["ReadOnly", 999];