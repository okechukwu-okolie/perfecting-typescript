// Create an object of type User
let user = {
    id: 1,
    name: "John Doe",
    getDetails: function () {
        return `User ID: ${this.id}, Name: ${this.name}`;
    },
    email: 'shade@gmail.com'
};
console.log(user.email); //Optional Chaining
console.log(user.getDetails()); // Calling the method
// Modifying object properties
user.email = "john.doe@example.com";
console.log("User Email:", user.email);
let employee = {
    id: 101,
    name: "Jane Smith",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
console.log(`Employee: ${employee.name}, Address: ${employee.address.street}, ${employee.address.city}, ${employee.address.country}`);
let product = {
    id: 501,
    name: "Laptop",
    price: 999.99,
    stock: 50
};
console.log("Product:", product.name, "Price:", product.price, "Stock:", product.stock);
// Function that takes an object as parameter   
function printUserInfo(user) {
    console.log(`User Info - ID: ${user.id}, Name: ${user.name}, Email: ${user.email ?? "N/A"}`);
}
printUserInfo(user);
let dict = {
    "first": "Hello",
    "second": 2
};
console.log("Dictionary:", dict);
export {};
//# sourceMappingURL=04_objects.js.map