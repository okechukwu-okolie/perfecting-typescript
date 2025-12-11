//situations where we use type aliases
//what are type aliases?
//type aliases are used to create a new name for a type
//they are useful when we want to create a complex type and give it a name
//they can also be used to create union types, intersection types, and mapped types

type Person1 = {
    id: string;
    address:string;
    salary:number;
}

const person1:Person1 = {
    id: '123',
    address: '123 main st',
    salary: 50000,
}
//union type aliases example
 type Status = 'new' | 'paid' | 'pending'

 function nextActionCheck(s:Status):string{

    switch (s) {
        case 'new':
            return 'this is the new parameter';
           
        case 'paid':
            return 'paid';
          
        case 'pending':
            return 'pending';
    
        default:
           return 'default';
    }
 }


 console.log(nextActionCheck('pending'))

 type ToMerge1 = {
    price:number
 }

 type ToMerge2 ={
    stock:number
 }

 //here we are combining the properties from the different types to this type
 type MergedProductInfo = Person1 & ToMerge1 & ToMerge2

 const product:MergedProductInfo ={
    address:'1 shade street',
    id:'1',
    price: 1000,
    salary:15000,
    stock:0,

 }
 console.log(product.salary + product.price + product.stock)