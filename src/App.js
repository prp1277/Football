import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Football from './football';

class App extends Component {
  render() {
    return (
      <div className="App bg-light">
        <nav className="navbar navbar-dark bg-secondary">
          <a className="nav-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img src={logo} className="navbar-brand" alt="logo" />
          </a>
        </nav>
        <body>
          <Football />
        </body>
      </div>
    );
  }
}

export default App;
