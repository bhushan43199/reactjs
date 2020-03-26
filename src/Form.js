// Pure Component 

import React, {Component, PureComponent} from 'react';

class Form extends React.PureComponent{

    constructor()
    {
        super();
        this.state={
                data:10
        }
    }
    render(){

        console.warn(this.state)
        return(
            <div>
                <h1>Pure Component{this.state.data}</h1>
                <button onClick={()=>{this.setState({data:10})}}>Update State</button>
            </div>
        )
    }
}

export default Form;