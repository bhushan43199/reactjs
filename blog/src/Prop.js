// props in react
import React from 'react';

//     // using function component 
//export default function Prop(Prop){
//    return(
//        <div>
//            <h1>{Prop.text.name}</h1>
//            <h1>{Prop.data}</h1>
//        </div>
//    )
//}

export default class Prop extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello Prop using class</h1>
        {/*<h1>{this.Prop.data}</h1>*/}
            </div>
        )
            
        
    }
}