//situations where we use types or interfaces


interface Box1{
    width:number
}
//i can reopen the same interface and add new properties. the TYPE aliasing does not allow this
interface Box1{
    height:number
}

const boxDemo:Box1 ={
    width:10,
    height:20
}
function area(dimension:Box1){
    return (dimension.width * dimension.height)
}

console.log(area(boxDemo))

