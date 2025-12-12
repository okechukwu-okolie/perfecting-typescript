

function describeTypeof(x:unknown){
    if(typeof x === 'string'){
        return 'string'
    }
    if(typeof x === 'number'){
        return 'number'
    }

     if(typeof x === 'boolean'){
        return 'boolean'
    }

     if(typeof x === 'bigint'){
        return 'bigInt'
    }

     if(typeof x === 'symbol'){
        return 'symbol'
    }
     if(typeof x === 'undefined'){
        return 'undefined'
    }

     if(typeof x === 'function'){
        return 'function'
    }
    //checking explicitly for null otherwise the type of null is object
     if( x === null){
        return 'null'
    }

     if(typeof x === 'object'){
        return 'object'
    }
}
console.log(
   //describeTypeof('hi')
    //  describeTypeof(23)
    // describeTypeof(true)
    // describeTypeof(10n)
    // describeTypeof(Symbol('sam'))
    // describeTypeof(undefined)
   // describeTypeof(()=>{})
    // describeTypeof(null)
    // describeTypeof({})
)


function info(z:unknown){
    if(Array.isArray(z)) return 'this is an array'
    if(z instanceof Date) return new Date().toDateString()
    if(z instanceof Error) return new Error(' this is an error!!')
        if(typeof z === 'object') return 'this is an object'
}

console.log(
    //info([1,2,3,4,5])
     //info(new Date())
    info(new Error('oopss!!!, Error Occurred'))
    //info({x:1})
   
)