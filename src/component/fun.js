import { BrowserRouter, Link, Route, Routes, useFormAction, useNavigate } from "react-router-dom"
import Home from "../route.js/home"
import Register from "../route.js/register"
import Login from "../route.js/login"
import { useCallback } from "react"
import Pure from "./pure"

function New(){
  
    let rout = useNavigate()
    const handle =(pass)=>{
 rout(pass)
    }
 
return(
    <div>
        {/* <h1>this is heading tag</h1> */}
        {/* <Pure/> */}
        <ul>
            {/* <button onClick={()=> handle('home')}>Home</button>
            <button onClick={()=> rout('login')}>Login</button>
            <button onClick={()=> handle('res')}>Register</button> */}

        </ul>

    </div>
)

}

export default New