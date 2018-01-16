import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App container is-fluid">
        <NavBar />
        <br />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
