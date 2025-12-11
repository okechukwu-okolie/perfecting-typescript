let userName = "Alice";
let userAge = 30;
let isMember = true;
let userScore = 9007199254741991n;
let userSymbol = Symbol("uniqueIdentifier");
let userNullable = null;
console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Is Member:", isMember);
console.log("Score:", userScore);
console.log("Symbol:", userSymbol.toString());
console.log("Nullable:", userNullable);
// console.log(userScore + userAge); // This will cause a TypeScript error due to type mismatch
//i can use the methods that apply to the primitive data types
console.log("Name in uppercase:", userName.toUpperCase());
console.log("Is member as string:", isMember.toString());
export {};
// userNullable = "Now I have a value!";
// console.log("Nullable after assignment:", userNullable); 
//# sourceMappingURL=02_primitives.js.map