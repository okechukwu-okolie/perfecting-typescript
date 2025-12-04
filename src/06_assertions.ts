//working with assertions
// Type assertions using 'as' syntax
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
console.log("String Length using 'as':", strLength);

// Type assertions using angle-bracket syntax
let anotherValue: any = 42;
let numValue: number = <number>anotherValue;
console.log("Number Value using angle-bracket:", numValue);

// Asserting to a more specific type
interface Car {
    make: string;
    model: string;
    year: number;
}

let vehicle: any = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

let myCar = vehicle as Car;
console.log(`Car Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);

// Double assertions (from one type to another via 'any')
let unknownValue: unknown = "12345";
let numericValue: number = (unknownValue as any) as number;
console.log("Numeric Value from double assertion:", numericValue);

// Non-null assertion operator
let possiblyNull: string | null = "Hello, World!";
console.log("Length of possiblyNull string:", possiblyNull!.length);    
// Uncommenting the next line will cause a runtime error
// let definitelyNull: string | null = null;
// console.log("Length of definitelyNull string:", definitelyNull!.length);
// Type assertion in DOM manipulation
let inputElement = document.createElement("input");
inputElement.value = "TypeScript is awesome!";
let inputValue: string = (inputElement as HTMLInputElement).value;
console.log("Input Element Value:", inputValue);
// You can uncomment the lines above one at a time to see their effects and TypeScript's type checking in action.
// Note: The non-null assertion operator should be used with caution, as it can lead to runtime errors if the value is actually null or undefined.
//  
//asertion with json
let jsonString: string = '{"name": "Bob", "age": 25}';
interface Person {
    name: string;
    age: number;
}
let personObj: Person = JSON.parse(jsonString) as Person;
console.log(`Person Name: ${personObj.name}, Age: ${personObj.age}`);
// Uncommenting the next line will cause a TypeScript error
// let invalidPersonObj: Person = JSON.parse('{"name": "Bob"}') as Person;
