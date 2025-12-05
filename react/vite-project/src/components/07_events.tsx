import { useState, type ChangeEvent } from "react";



export function FormExample(){
const [name,setName] = useState('');  

function handleChange(e: ChangeEvent<HTMLInputElement>){
    setName(e.currentTarget.value);

}
console.log(name)  
    return(
       <>
        <form>
            <input value={name} placeholder="enter your name here" onChange={handleChange}/>
            <button>click</button>
        </form>
        <h1>{name}</h1>
        </>
    )
}