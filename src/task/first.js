const First=(props)=>{
    return(
         <>
          <button onClick={props.add}>increment </button>

          <button onClick={props.sub}>decrement</button>
         </>
    )
}

export default First