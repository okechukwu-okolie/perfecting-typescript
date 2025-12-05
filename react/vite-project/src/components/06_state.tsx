import { useState } from "react";



export function Counter(){
    const [count,setCount] = useState(0);
    const handleMinus = ()=>{
        if(count === 0) return setCount(0)
        setCount(count - 1);
    }
   
    return <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>add 1</button>
        <button onClick={handleMinus}>subtract 1</button>
    </div>
}


export const LoaderDemo = ()=>{
     
}