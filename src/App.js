import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Fcomponent from './Fcomponent';
import Prop from './Prop';

import Pstate from './Pstate';
import User from './User';
import Form from './Form'
import Button from './Button'
// this constructor is for hide and show click me button and state 



class App extends React.Component {
  constructor() {
    // super() needed because state will use "this" keyword
    super();
    // Video 12 ComponentDidMount

    this.state = {
      // 12. ComponentDidMount   data: null
      active: null,
      who: null,
      toggle:true,
      // video 20. form validation
      name: "",
      password: "",
      nameError:"",
      passwordError:"",
    
    }
    console.warn('constructor')
  }


// react lifecycle
  // 12.method calling componentDidMount
  componentDidMount() {
    this.setState({ data: "Updated" })
    console.warn("componentDidMount")
  }

  componentDidUpdate(){
    console.warn("Update")
    // to call setState method must use condition 
    if(this.state.who==null){
      this.setState({who:"Montu Patel"})
    }
  }

  valid(){
    if(!this.state.name.includes("@") && this.state.password.length<5)
    {
      this.setState({nameError:"Invalid Name", passwordError:"Length should be more then 5"})
    }
    else if(!this.state.name.includes("@") )
    {
      this.setState({nameError:"Invalid Name"})
    }
    else if(this.state.password.length<5)
    {
      this.setState({passwordError:"Length should be more then 5"})
    }
    else{
      return true;
    }
  }

  submit(){
    
    {
      this.setState({nameError:"", passwordError:""})
    }
    if(this.valid())
    {
    alert("form submited")
    }
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
          {/* Video 13 ComponentDidUpdate*/}
          <h1>React ComponentDidUpdate {this.state.who}</h1>
          <button onClick={() => {this.setState({active:"yes"})}}>Click Me</button>
          {
            this.state.toggle?
            <User />:null

            
          }
          {/**ComponentWillUnmount */}
          <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete User</button>
          <Form />
          <Button />
          {/**Video 20. form validation  */}


          <h1>Video 20 Form Handleling </h1>

        <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}}/>
        <p>{this.state.nameError}</p>
        <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}/>
        <p>{this.state.passwordError}</p>
        <button onClick={()=>this.submit()}>Submit</button>
        </header>
      </div>
    );
  }
}

export default App;
