import { useState } from "react"
import First from "./first"
import Second from "./two"

function Taskthree(){
    const [set,setcount] = useState(0)

     const incre =()=>{
        setcount(set+1)
     }

     const decre =()=>{
        setcount(set-1)
     }

    return(
        <>
        <h1>counts {set} </h1>
        <First add={incre} sub={decre} />
        </>
    )
}

export default Taskthree