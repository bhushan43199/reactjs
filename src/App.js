import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Fcomponent from './Fcomponent';
import Prop from './Prop';

import Pstate from './Pstate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bhushan First React App
        </a> 
        
        <Prop text= {{name: "Montu"}} data= "Profile Data"/>
        <Home />
        <Profile />
        <Fcomponent text = "Function component text" />
        <Pstate />
        
      </header>
    </div>
  );
}

export default App;
