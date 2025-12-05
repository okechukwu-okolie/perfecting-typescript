import { useRef } from "react"



function getString(fd:FormData, key:string):string|null{
    const result = fd.get(key);

    return typeof result === 'string' ? result : null;
}
function getNumberValue(fd:FormData, key:string):number|null{
    const extractStringValueFirst = getString(fd, key);

    if(extractStringValueFirst === null)return null;

    const convertToNumber = Number(extractStringValueFirst);

    return Number.isFinite(convertToNumber) ? convertToNumber : null;
}



export function UncontrolledForm(){

const formRef = useRef<HTMLFormElement | null>(null);

function  handleFormSubmit(event:React.FormEvent){
    event.preventDefault();
    // if(formRef.current){
    //     const formData = new FormData(formRef.current);
    //     const entries = Array.from(formData.entries());
    //     console.log('Form Data Entries:', entries);
    // }
    const fd = new FormData(event.currentTarget)
    const extractName = getString(fd, 'name')??'Anonymous';
    const extractAge = getNumberValue(fd, 'age');
}
    return(
        <form onSubmit={handleFormSubmit} ref={formRef}>
            <input name="name" defaultValue='Guest'/>
            <input name="age" type="number" defaultValue='18' min={0}/>
            <button type="submit">Submit</button>
        </form>
    )
}