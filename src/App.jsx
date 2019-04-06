import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  state = { count: 0 };
  handleCount(value) {
    this.setState((prevState) => {
      return ({ count: prevState.count + value });
    });
  }
  render() {
    return (
      <div>
        <iframe id="App" title="App" className="container-fluid bg-danger">{this.state.count}</iframe>
      </div>
    )
  }
}
export default App;
