// what are index signatures? provide examples


// in this situation, we are dynamically defining what the name of the property of this object will be.
type NumberDict = {[k:string]: number}

//this defines  the variable to be of the object type
const counters: NumberDict = {}

//here we can define the property name dynamically
// if we define the value of the property as any data type asides from numbers, an erroe will be thrown.
//counters['likes'] = question

counters['likes'] = 20
counters['Comments'] = 100

console.log(counters)

//AN ALTERNATE WAYS TO CRREATE INDEX SIGNATURES IS TO USE RECORDS
//here the properties have been predefined and are of the type number.

//here we are saying that three object properties are likes views and shares and they are of the type numbers. they have the type name of Metrics
type Metrics = Record<'likes'|'views'|'shares', number>


//unlike the first example where the property names were defined, this second example allows for flexibility in naming, the number of properties defined and options in the datatype of the property
type LooseMap = Record<string, number | undefined>
const checking:LooseMap ={}
checking['start'] = 1

const details:Metrics = { likes:1, views:100, shares:1000}
//provides notes that explains records well


//using maps for the same purpose.
const priceMap = new Map<string, number>()
priceMap.set('likes',1)
priceMap.set('halle',12345)

console.log(priceMap)