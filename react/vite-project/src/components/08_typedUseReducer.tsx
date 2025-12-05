import { useReducer } from "react"


//first define the state and action types
type CounterState = {
    count: number;
    step:number;
}
//define action types
type Action = 
    | {type: 'INCREMENT'}
    | {type: 'DECREMENT'}
    | {type:'RESET',to?: number };

//initializer function
function init(initialCount:number):CounterState
{
    return {
        count: initialCount,
        step: 1
    }
}
//
function counterReducer(state:CounterState, action: Action):CounterState{
switch(action.type){
    case 'INCREMENT':
        return { ...state, count: state.count + state.step };
    case 'DECREMENT':
        return { ...state, count: state.count - state.step };
    case 'RESET':
        return { ...state, count: action.to ?? 0 };
    default:
        return state;
}
} 


//
export function TypedReducer({initial = 0}:{initial?:number}){
    const [state, dispatch] = useReducer(counterReducer, initial, init)
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'RESET', to:10})}>Reset to 10</button>
        
        </div>
    )
}
//define a new type for dispatch
type CounterDispatch = React.Dispatch<Action>;



export function SmallChild({dispatch}:{dispatch:CounterDispatch}){
    return (
        <div>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Child Increment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Child Decrement</button>
        </div>
    )
}