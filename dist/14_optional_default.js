//working with optional default parameters in typescript
// Function with optional parameter and default value
function buildName(firstName, lastName) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    else {
        return firstName;
    }
}
let fullName1 = buildName("John", "Doe");
console.log("Full Name 1:", fullName1);
let fullName2 = buildName("Jane");
console.log("Full Name 2:", fullName2);
// Function with default parameter
function createGreeting(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
let greeting1 = createGreeting("Alice", "Hi");
console.log("Greeting 1:", greeting1);
let greeting2 = createGreeting("Bob");
console.log("Greeting 2:", greeting2);
// Function with both optional and default parameters
function formatDate(date, format, locale = "en-US") {
    if (format) {
        return date.toLocaleDateString(locale, { dateStyle: format });
    }
    else {
        return date.toLocaleDateString(locale);
    }
}
let formattedDate1 = formatDate(new Date(), "full", "fr-FR");
console.log("Formatted Date 1:", formattedDate1);
let formattedDate2 = formatDate(new Date());
console.log("Formatted Date 2:", formattedDate2);
// Function with optional parameter only
function logMessage(message, level) {
    if (level) {
        console.log(`[${level.toUpperCase()}]: ${message}`);
    }
    else {
        console.log(`[INFO]: ${message}`);
    }
}
//using '??' for default options
logMessage("This is a debug message", "debug");
logMessage("This is an info message");
// Function with default and optional parameters combined
function calculateArea(width, height, unit = "cm") {
    if (height) {
        return `Area: ${width * height} ${unit}²`;
    }
    else {
        return `Area: ${width * width} ${unit}² (assuming square)`;
    }
}
export {};
//# sourceMappingURL=14_optional_default.js.map