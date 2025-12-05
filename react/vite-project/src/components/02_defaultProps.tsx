import React, { type ReactNode } from 'react'


type GreetProps = {
    name?: string;
    shout?: boolean;
    designation?:ReactNode
}




export default function GreetA({name , shout=false, designation}:GreetProps){
  return (
    <div>
        <h1>my name is {name ?? 'Guest'}</h1>
        <h3>{shout ? name ?? 'guest'.toUpperCase() : name}</h3>
        {designation ? <div>{designation}</div> : null}
    </div>
  )
}

export const GreetB = ({name = 'Guest', shout = false, designation}:GreetProps) => {
    return (
        <div> 
            <h1>my name is {name}</h1>
            <h3>{shout ? name.toUpperCase() : name}</h3>
            {designation ? <div>{designation}</div> : null}
        </div>
    )
}


