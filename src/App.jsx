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
        <iframe width="933" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiODE2MmRiZDYtZTI2Ny00MzI5LWI5ZjktMzllNDQ5NDBkNDNjIiwidCI6ImY1MmY5MWI0LTc1YzAtNGUwZC04MjkzLTZhYjQ5ZTViZjgwZiJ9" frameborder="0" allowFullScreen="true"></iframe>
      </div>
    )
  }
}
export default App;
