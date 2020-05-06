import React, { Component } from 'react';

class User extends Component {
    render() {
        if(true)
        {
            throw new Error('Custom Error')
        }
        return (
            <div>

                <h1>
                    User Component 
                </h1>
            </div>
        );
    }
}

export default User;