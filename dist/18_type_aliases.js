//situations where we use type aliases
//what are type aliases?
//type aliases are used to create a new name for a type
//they are useful when we want to create a complex type and give it a name
//they can also be used to create union types, intersection types, and mapped types
const person1 = {
    id: '123',
    address: '123 main st',
    salary: 50000,
};
function nextActionCheck(s) {
    switch (s) {
        case 'new':
            return 'new';
        case 'paid':
            return 'paid';
        case 'pending':
            return 'pending';
        default:
            return 'default';
    }
}
console.log(nextActionCheck('new'));
export {};
//# sourceMappingURL=18_type_aliases.js.map