// class component 

import React from 'react'

class Profile extends React.Component{

    // in class component you can create constructor
    constructor()
    {
        super()
    }
    componentDidMount()
    {
        console.warn("Called life cycle")
    }
    // when you create class component render method is needed
    render()
        {
            return(
                <div>
                    <h1> Profile Component</h1>
                </div>
            )
        }
    
}

export default Profile;