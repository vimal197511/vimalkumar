import { useState } from "react"

function Tasktwo(){
  const [counts,less] = useState(0)
    
    const calls=()=>{
        less(counts+1)
    }

     const call =()=>{
        less(counts-1)
     }
    return(
      <>
      <h1>counting {counts}</h1>
      <button onClick={calls}>increment</button>
      <button onClick={call}>decrement</button>
      </>
    )
}
 
export default Tasktwo