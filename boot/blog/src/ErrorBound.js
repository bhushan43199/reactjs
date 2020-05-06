import React, { Component } from 'react';

class ErrorBound extends Component {
    constructor(){
        super()   
        this.state={
            error:null
        }
    }
    static getDerivedStatFromError()
    {
        return{
            error:true
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.error ? <h1>Custom page for error handling</h1>: this.props.children
                }
            </div>
        );
    }
}

export default ErrorBound;