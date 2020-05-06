//ComponentWillUnmount

import React from 'react';

class User extends React.Component
{   
    componentWillUnmount()
    {
        alert("user has been deleted");
    }
    render()
    {
        return(
            <div>
                <ul>
                   <li>Name:Montu</li>
                   <li>Email:montupatidar43@gmail.com</li>
                   <li>Contact:000000000</li>

                </ul>
            </div>
            
        );
    }
}
export default User;