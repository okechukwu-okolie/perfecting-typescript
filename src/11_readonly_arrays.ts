//working with read only arrays in typescript
// Readonly array of strings
let readonlyStringArray: ReadonlyArray<string> = ["alpha", "beta", "gamma"];
console.log("Readonly String Array:", readonlyStringArray); 

// readonlyStringArray.push("delta"); // invalid, will cause a TypeScript error
// readonlyStringArray[0] = "omega"; // invalid, will cause a TypeScript error  
// Readonly array of numbers
let readonlyNumberArray: ReadonlyArray<number> = [10, 20, 30, 40];
console.log("Readonly Number Array:", readonlyNumberArray);
// readonlyNumberArray.push(50); // invalid, will cause a TypeScript error
// readonlyNumberArray[0] = 5; // invalid, will cause a TypeScript error
// Function that processes a ReadonlyArray of numbers and returns their average
function averageArray(numbers: ReadonlyArray<number>): number {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    return total / numbers.length;
}

let avg = averageArray(readonlyNumberArray);
console.log("Average of Readonly Number Array:", avg);  

const yss:ReadonlyArray<number>=[1,2,3,4,5];
console.log("YSS Readonly Array:", yss);
// yss.push(6); // invalid, will cause a TypeScript error   
// yss[0]=10; // invalid, will cause a TypeScript error
// Using ReadonlyArray with custom object types
type Car = {
    make: string;
    model: string;
    year: number;
};
let readonlyCarArray: ReadonlyArray<Car> = [
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Honda", model: "Accord", year: 2019 }
];
console.log("Readonly Car Array:", readonlyCarArray);
// readonlyCarArray.push({ make: "Ford", model: "Focus", year: 2018 }); // invalid, will cause a TypeScript error
// readonlyCarArray[0] = { make: "Chevrolet", model: "Malibu", year: 2021 }; // invalid, will cause a TypeScript error