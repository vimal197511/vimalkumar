import React from "react"

function Login(props){
    console.log("this is login component" ,props)
    return(
        <h1>
        this {props.parent} is login {props.name}
        <button onClick={props.fun}>calling</button>
        </h1>
    )
}

export default React.memo(Login)