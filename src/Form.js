// Pure Component 
// helps in render()

// hooks component 

//import React, {Component, PureComponent} from 'react';

//class Form extends React.PureComponent{
//
//    constructor()
//    {
//        super();
//        this.state={
//                data:10
//        }
//    }
//    render(){
//
//        console.warn(this.state)
//        return(
//            <div>
//                <h1>Pure Component{this.state.data}</h1>
//                <button onClick={()=>{this.setState({data:10})}}>Update State</button>
//            </div>
//        )
//    }
//}
//

// hooks form here 
import React,{useEffect, useState} from "react";


 
const Form = () =>{
    const[count,setCount]=useState(1)
    useEffect(()=>{
        console.warn(count)
    },[count==5])
    return(
        <div>
            <h1>Use effect hooks in reactjs   {count}</h1>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}
export default Form;