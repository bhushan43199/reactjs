// state in reactjs

import React from 'react';

export default class Pstate extends React.Component
{
    constructor()
    {
        super();
        //state declaration 
        this.state={
                name:'Montu',
                // he we declare state named: name and its value it Montu
                email: 'montupatidar43@gmail.com',
                count:0
        }
    }

    updateState(){
        this.setState({
            name:'Bhushan',
            count:this.state.count+1
        }
        )
    }
    render()
    {   // Whenever you update setState > render will call again 
        console.warn("Render");
        return(
            <div>
                    <h1>Hello State {this.state.name}</h1>
                    <h1>{this.state.name} Email address is : {this.state.email}</h1>
                    <h1>Count: {this.state.count}</h1>
                    {/*how to update state */}
                    <button onClick ={()=>{this.updateState()}}>Update Name: </button>
                    
            </div>
        );
    }
}
