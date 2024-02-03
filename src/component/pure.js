import { useState } from "react"
import Login from "../route.js/login"

function Pure(){
    const [count,set] = useState(0)
     const [names,setname]= useState('vimal')
     let alpha = "vicky"

     const add=()=>{
        console.log("calling function")
       set(count+1)
     }

     

return(
    <>
    <h1>this is pure component</h1>
    <button onClick={add}>this is count {count}</button>
    <Login value={count} name={names} parent={alpha} fun={add}/>
    </>
)
}

export default Pure