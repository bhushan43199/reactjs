import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Alert, variant, idx, Form, Modal } from 'react-bootstrap'
import { render } from 'react-dom';
import User from './User'
import ErrorBound from "./ErrorBound"

class App extends React.Component{

  constructor()
  {
    super();
    this.state={
      show:false,
    }

  }
  handleModal()
  {
    this.setState({show: !this.state.show})
  }

render() {
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
          Learn React
        </a>

        {/* Video 26 Bootstarp in React */}
        <h1>Bootstarp in React</h1>
        <Button onClick={()=>this.handleModal()}>Click Me</Button>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
    </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>

        {/* Video 27: Bootstrap with modal */}

        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <Modal.Header closeButton>Modal Heading</Modal.Header>
          <Modal.Body>
            Hello Everyone
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>this.handleModal()}>Close</Button>
            <Button onClick={()=>this.handleModal()}>Save</Button>
          </Modal.Footer>
        </Modal>


        {/* Video 26 ERROR Boundry   */}
        <ErrorBound><User/></ErrorBound>
        
        
      </header>
    </div>
  );
}
}
export default App;
