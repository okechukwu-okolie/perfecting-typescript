// working with types with objects
// Define an object type
interface User {
    id: number;
    name: string;
    email?: string; // optional property;
    getDetails: () => string|null; // method that returns a string
}   

// Create an object of type User
let user: User = {
    id: 1,  
    name: "John Doe",
    getDetails: function() {
        return `User ID: ${this.id}, Name: ${this.name}`;
    },
    email: 'shade@gmail.com'
};
console.log(user.email)//Optional Chaining
console.log(user.getDetails());// Calling the method

// Modifying object properties
user.email = "john.doe@example.com";
console.log("User Email:", user.email);

// Nested objects       
interface Address {
    street: string;
    city: string;
    country: string;
}
interface Employee {
    id: number;
    name: string;
    address: Address; // nested object
}   

let employee: Employee = {
    id: 101,
    name: "Jane Smith",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

console.log(`Employee: ${employee.name}, Address: ${employee.address.street}, ${employee.address.city}, ${employee.address.country}`);

// Using index signatures for dynamic properties
interface Product {
    id: number;
    name: string;
    [key: string]: any; // index signature for additional properties
}   
let product: Product = {
    id: 501,
    name: "Laptop",
    price: 999.99,
    stock: 50
};
console.log("Product:", product.name, "Price:", product.price, "Stock:", product.stock);

// Function that takes an object as parameter   
function printUserInfo(user: User): void {
    console.log(`User Info - ID: ${user.id}, Name: ${user.name}, Email: ${user.email ?? "N/A"}`);
}

printUserInfo(user);

// You can uncomment the lines below to see how TypeScript enforces object types
// user.id = "wrong type"; // This will cause a TypeScript error
// employee.address.zipCode = "12345"; // This will cause a TypeScript error since zipCode is not defined in Address interface
// product.discount = "10%"; // This is allowed due to index signature, but be cautious with types

// Feel free to experiment with the code and see how TypeScript helps manage object types effectively.

// here i am defining a dictionary object with string keys and values that can be either string or number
type Dictionary = {
    [key: string]: string | number;
};
let dict: Dictionary = {
    "first": "Hello",
    "second": 2
};
console.log("Dictionary:", dict);

type Count1<T> = {
    [P in keyof T]: number;
};
type Sample = {
    a: string;
    b: string;  
    c: string;
};
type SampleCount = Count1<Sample>; // { a: number; b: number; c: number; }  