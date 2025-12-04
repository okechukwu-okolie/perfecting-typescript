// working with intersections in TypeScript
// Intersection type for variable that must hold both string and number properties
type StringAndNumber = {
    str: string;
    num: number;
};

let combined: StringAndNumber = { str: "Hello", num: 42 };
console.log("Combined Object:", combined);

// Function that accepts an intersection type parameter 
function displayCombined(value: StringAndNumber): void {
    console.log(`String: ${value.str}, Number: ${value.num}`);
}

displayCombined(combined);

// Intersection type with arrays
type StringArray = string[];
type NumberArray = number[];
type StringAndNumberArray = StringArray & NumberArray;

let mixedArray: StringAndNumberArray = [] as StringAndNumberArray;
mixedArray.push("hello" as any);;
mixedArray.push(42 as any);
console.log("Mixed Array:", mixedArray); 