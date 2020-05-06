import React, { Component } from 'react';

class Home extends Component {
    render() {
        console.warn("Inner Component")
        return (
            <div>
                <h1>HOME COMPONENT</h1>
            </div>
        );
    }
}

export default Home;