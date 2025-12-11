//working with read only arrays in typescript
// Readonly array of strings
let readonlyStringArray = ["alpha", "beta", "gamma"];
console.log("Readonly String Array:", readonlyStringArray);
// readonlyStringArray.push("delta"); // invalid, will cause a TypeScript error
// readonlyStringArray[0] = "omega"; // invalid, will cause a TypeScript error  
// Readonly array of numbers
let readonlyNumberArray = [10, 20, 30, 40];
console.log("Readonly Number Array:", readonlyNumberArray);
// readonlyNumberArray.push(50); // invalid, will cause a TypeScript error
// readonlyNumberArray[0] = 5; // invalid, will cause a TypeScript error
// Function that processes a ReadonlyArray of numbers and returns their average
function averageArray(numbers) {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    return total / numbers.length;
}
let avg = averageArray(readonlyNumberArray);
console.log("Average of Readonly Number Array:", avg);
const yss = [1, 2, 3, 4, 5];
console.log("YSS Readonly Array:", yss);
let readonlyCarArray = [
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Honda", model: "Accord", year: 2019 }
];
console.log("Readonly Car Array:", readonlyCarArray);
export {};
// readonlyCarArray.push({ make: "Ford", model: "Focus", year: 2018 }); // invalid, will cause a TypeScript error
// readonlyCarArray[0] = { make: "Chevrolet", model: "Malibu", year: 2021 }; // invalid, will cause a TypeScript error
//# sourceMappingURL=11_readonly_arrays.js.map