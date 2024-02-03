import { useState } from "react"
import Second from "./two"
 
const Same=()=>{

     const [timer,settime] = useState(0)
  
     const hanelclick=(res)=>{
    
        if(res == "inc"){
          settime(timer+1)
        }
        else{
            settime(timer-1)
        }
     }
    
     
    return(
 <>
 <button onClick={()=>{hanelclick('inc')}}>increment</button>
 <button onClick={()=>{hanelclick('dec')}}>decrement</button>

 <Second set={timer}/>
 </>
    )
}

export default Same