import React from "react";
import Second from "./classtwo";
class First extends React.Component{
    name = 'vimal'
    state ={count:0}
    demo=()=>{
        return 'hello are you studing?'
    }

    
    
    componentDidMount(){
        document.body.style.backgroundColor = 'red'
    //  var add = this.demo()
    // console.log("this is first class component",add)
        }

        componentDidUpdate(){
            document.body.style.backgroundColor = 'blue'

            // console.log("this is update")
        }

        componentWillUnmount(){
            document.body.style.backgroundColor = 'green'

            // console.log("this is will amount")
        }

    val=()=>{
   this.setState({count:this.state.count+1})

    }

    render(){
        return(
            <>
            <p>we will do it this is class component {this.state.count}</p>
            <button onClick={this.val}>class button</button>
            {/* <p>hi iam fine and {this.demo()} can we talk now ?{this.name}</p> */}
            {/* <Second/> */}
            </>
        )
    }

}

export default First