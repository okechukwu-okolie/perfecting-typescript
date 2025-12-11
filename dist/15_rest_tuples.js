//rest tuples in typescript
function sumAllNumbers(...xs) {
    return xs.reduce((acc, curr) => acc + curr, 0);
}
let totalSum = sumAllNumbers(1, 2, 3, 4, 5);
console.log("Total Sum using rest tuples:", totalSum);
// Tuple with rest elements
let restTuple;
restTuple = ["Values", 10, 20, 30, 40];
console.log("Rest Tuple:", restTuple);
// Function that processes a tuple with rest elements
function processRestTuple(tupleParam) {
    const [label, ...numbers] = tupleParam;
    console.log(`Label: ${label}, Numbers: ${numbers.join(", ")}`);
}
processRestTuple(["Numbers", 1, 2, 3, 4, 5]);
// Function that sums numbers from a rest tuple
function sumFromRestTuple(...args) {
    const [label, ...numbers] = args;
    console.log(`Label: ${label}`);
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
let sumResult = sumFromRestTuple("Sum these numbers", 5, 10, 15);
console.log("Sum from Rest Tuple:", sumResult);
export {};
//# sourceMappingURL=15_rest_tuples.js.map