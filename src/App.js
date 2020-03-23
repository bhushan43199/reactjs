import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Fcomponent from './Fcomponent';
import Prop from './Prop';

import Pstate from './Pstate';
// this constructor is for hide and show click me button and state 



class App extends React.Component {
  constructor()
  {
    super();
    // Video 12 ComponentDidMount

    this.state={
      data:null
    }
    console.warn('constructor')
  }


  // react lifecycle
  // 12.method calling componentDidMount
  componentDidMount()
  { 
    this.setState({data:"Updated"})
    console.warn("componentDidMount")
  }

  render() {
    console.warn('render')
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

          <Prop text={{ name: "Montu" }} data="Profile Data" />
          <Home />
          <Profile />
          <Fcomponent text="Function component text" />
          <Pstate />

          {/*  {
          this.state.show ?
          <h1>Hide and</h1>
          :null
        }
      */}
          <button onClick={() => { alert('Clicked') }}>Click Me</button>

        </header>
      </div>
    );
  }
}

export default App;
