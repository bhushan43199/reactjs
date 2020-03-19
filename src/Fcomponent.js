// function component 

import React from 'react'

export default function Fcompnent(prop)
{   
    const red=()=>{
        console.log("Clicked")
        alert("red function called")
    }
    return <div>
       <h1 onClick ={red}> {prop.text} </h1> 
    </div>
}

