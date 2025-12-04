//rest tuples in typescript

function sumAllNumbers(...xs: number[]):number {
    return xs.reduce((acc, curr) => acc + curr, 0);
}
let totalSum: number = sumAllNumbers(1, 2, 3, 4, 5);
console.log("Total Sum using rest tuples:", totalSum);

// Tuple with rest elements
let restTuple: [string, ...number[]];
restTuple = ["Values", 10, 20, 30, 40];
console.log("Rest Tuple:", restTuple);

// Function that processes a tuple with rest elements
function processRestTuple(tupleParam: [string, ...number[]]): void {
    const [label, ...numbers] = tupleParam;
    console.log(`Label: ${label}, Numbers: ${numbers.join(", ")}`);
}
processRestTuple(["Numbers", 1, 2, 3, 4, 5]);

// Function that sums numbers from a rest tuple
function sumFromRestTuple(...args: [string, ...number[]]): number {
    const [label, ...numbers] = args;
    console.log(`Label: ${label}`);
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

let sumResult: number = sumFromRestTuple("Sum these numbers", 5, 10, 15);
console.log("Sum from Rest Tuple:", sumResult);