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
import Style from './Style'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
      toggle: true,
      // video 20. form validation
      name: "",
      password: "",
      nameError: "",
      passwordError: "",
      list: [
        { name1: 'Montu', phone: '951-7726450', email: "montupatidar43@gmail.com" },
        { name1: 'Suchhu', phone: '951-7726450', email: "montupatidar43@gmail.com" },
        { name1: 'Yashvi', phone: '951-7726450', email: "montupatidar43@gmail.com" },

      ],
      // Fetch API Video no 23
      user: null

    }
    console.warn('constructor')
  }


  // react lifecycle
  // 12.method calling componentDidMount
  componentDidMount() {
    this.setState({ data: "Updated" })
    console.warn("componentDidMount")
    // fetch api video 23
    fetch('https://reqres.in/api/users?page=2').then((resp) => {
      resp.json().then((result) => {
        //console.warn(result.data)
        this.setState({user:result.data})
      })
    })
  }

  componentDidUpdate() {
    console.warn("Update")
    // to call setState method must use condition 
    if (this.state.who == null) {
      this.setState({ who: "Montu Patel" })
    }
  }

  valid() {
    if (!this.state.name.includes("@") && this.state.password.length < 5) {
      this.setState({ nameError: "Invalid Name", passwordError: "Length should be more then 5" })
    }
    else if (!this.state.name.includes("@")) {
      this.setState({ nameError: "Invalid Name" })
    }
    else if (this.state.password.length < 5) {
      this.setState({ passwordError: "Length should be more then 5" })
    }
    else {
      return true;
    }
  }

  submit() {

    {
      this.setState({ nameError: "", passwordError: "" })
    }
    if (this.valid()) {
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
          <button onClick={() => { this.setState({ active: "yes" }) }}>Click Me</button>
          {
            this.state.toggle ?
              <User /> : null


          }
          {/**ComponentWillUnmount */}
          <button onClick={() => { this.setState({ toggle: !this.state.toggle }) }}>Delete User</button>

          <Button />
          {/**Video 20. form validation  */}


          <h1>Video 20 Form Handleling </h1>

          <input type="text" onChange={(event) => { this.setState({ name: event.target.value }) }} />
          <p>{this.state.nameError}</p>
          <input type="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
          <p>{this.state.passwordError}</p>
          <button onClick={() => this.submit()}>Submit</button>
          <h1>Listing with map video 21</h1>
          {
            this.state.list.map((item1) =>
              <div>Name: <span>{item1.name1}
           Phone: {item1.phone}
           Email: {item1.email}</span>
              </div>
            )

          }
          <Style data="apply" />
          {/*Router*/}
          <Router>
            <Link to="">Home </Link>
            <Link to="/profile">Profile</Link>
            <Link to="/form">Form</Link>

            <Route exact path="/" component={Home}></Route>
            <Route path="/profile" component={Profile} />
            <Route path="/form" component={Form} />

            {/* <Home />
        <Profile />
        <Form /> */}

          </Router>

        {/* Map function for video 23 fetch api */}

        {
          this.state.user ?
          this.state.user.map((item,i)=>
          <div>
            <p>{i}--- {item.email}</p>
          </div>    
          )
          :
          null
        }

        </header>
      </div>
    );
  }
}

export default App;
