import { useState } from "react"

function Taskfour(){

    const [count,setcount] = useState(0)  
      
    const click=(operate)=>{
        if(operate == "increment"){
            setcount(count+1)

        }
        else{
            setcount(count-1)
        }
    }

    return(
        <>
        <h1>set={count}</h1>
        <button onClick={()=>{click('increment')}} >increment</button>
        <button  onClick={()=>{click('decrement')}}>decrement</button>
        </>
    )
}

export default Taskfour