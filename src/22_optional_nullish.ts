
//use of IN operator
 type Exp1 = {role:'admin',permission:string[]}
 type Exp2 = {role:'user',expiresAt:Date}

 type Example = Exp1 | Exp2

function describeUser(u:Example){

    if('permission' in u){
        return `Admin ${u.permission.join(',')}`
    }
    return `User ${u.expiresAt.toISOString()}`
}

console.log(describeUser({role:'admin', permission:['read', 'write', 'delete']}))

//optional nullish falsey and optional chaining


//optional chaining
type ProfileN3 = {
    name: string;
    contact?:{email?: string, address?: string}
}

const person1:ProfileN3 = {
    name:'samuel okolie',
    contact:{address:'15, jaiyeola street'}
    
}
const person2:ProfileN3 = {
    name:'princewill okolie',
    contact:{email:'princewill@gmail.com'}
}


//OPTIONAL CHAINNING is typically used when we are trying to access a property from a object type that was defined as an optional property.

const person1Email = person1.contact?.email
const person1EAddress = person1.name
console.log(person1Email)
console.log(person1EAddress)
const person2Email = person2.contact?.email
console.log(person2Email)


//OPTIONAL NULLISH ?? USES THE RIGHT SiDE WHEN THE LEFT IS NULL OR UNDEFINED
const countFromServer: (number |null |boolean) = false
const labelFromServer: string| undefined=''


//OPTIONAL NULLISH ?? USES THE RIGHT SiDE WHEN THE LEFT IS NULL OR UNDEFINED
const test1 = countFromServer ?? 100
console.log(test1)

//FALSEY USES THE DEAULT WHEN THE LEFT IS ANY FALSEY VALUE(0,'', false,)

const test2 = countFromServer || 'nothing'
console.log('TEST 2',test2)

const test3 = labelFromServer || 'another nothing'
console.log('TEST 3',test3)