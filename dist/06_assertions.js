//working with assertions
// Type assertions using 'as' syntax
let someValue = "This is a string";
let strLength = someValue.length;
console.log("String Length using 'as':", strLength);
// Type assertions using angle-bracket syntax
let anotherValue = 42;
let numValue = anotherValue;
console.log("Number Value using angle-bracket:", numValue);
let vehicle = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
let myCar = vehicle;
console.log(`Car Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);
// Double assertions (from one type to another via 'any')
let unknownValue = "12345";
let numericValue = unknownValue;
console.log("Numeric Value from double assertion:", numericValue);
// Non-null assertion operator
let possiblyNull = "Hello, World!";
console.log("Length of possiblyNull string:", possiblyNull.length);
// Uncommenting the next line will cause a runtime error
// let definitelyNull: string | null = null;
// console.log("Length of definitelyNull string:", definitelyNull!.length);
// Type assertion in DOM manipulation
let inputElement = document.createElement("input");
inputElement.value = "TypeScript is awesome!";
let inputValue = inputElement.value;
console.log("Input Element Value:", inputValue);
// You can uncomment the lines above one at a time to see their effects and TypeScript's type checking in action.
// Note: The non-null assertion operator should be used with caution, as it can lead to runtime errors if the value is actually null or undefined.
//  
//asertion with json
let jsonString = '{"name": "Bob", "age": 25}';
let personObj = JSON.parse(jsonString);
console.log(`Person Name: ${personObj.name}, Age: ${personObj.age}`);
export {};
// Uncommenting the next line will cause a TypeScript error
// let invalidPersonObj: Person = JSON.parse('{"name": "Bob"}') as Person;
//# sourceMappingURL=06_assertions.js.map