import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div id="App" className="App bg-light">
        <div id="Header" className="navbar navbar-dark bg-dark">
          <a href="/"><button className="btn btn-info">Home</button></a>
        </div>

        <div id="Body" className="container">
          <div className="Page row text-center bg-light">

            <div className="media container-fluid my-2">
              <div className="media-body">
                <img className="media-object" src="https://avatars0.githubusercontent.com/u/36834793?s=460&v=4" alt="" />
                <h4 className="media-title">Patrick Powell</h4>
                <p className="media-content">Celebrating Alex's wedding day</p>
              </div>
            </div>
          </div>

        </div>
        <div id="Footer" className="navbar navbar-dark bg-dark">
          <a href="/"><button className="btn btn-info">Home</button></a>
        </div>

      </div>
    )
  }
}
export default App;
