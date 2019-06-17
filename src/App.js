import React, { Component } from 'react';
import SocialMedia from './components/SocialMedia';
import './styles.css';


class App extends Component {
  render() {
    return (
      <div id="App">

        <div id="Header" className="navbar navbar-dark bg-dark justify-content-center">
          <SocialMedia />
        </div>

        <div className="container-fluid col-10 mx-auto">
          <div>

            <div className="card my-3 text-center">
              <h4 className="card-header">
                Alex's Wedding
            </h4>

              <div className="card-img my-2">
                <img src="https://avatars0.githubusercontent.com/u/36834793?s=460&v=4" alt="" />
              </div>

              <div className="card-body">
                <p>A Year ago today (6/16/19) Alex got married</p>
              </div>

            </div>

          </div>

          {/* <div className="media container-fluid my-2">
              <div className="media-body">
                <img className="media-object" src="https://avatars0.githubusercontent.com/u/36834793?s=460&v=4" alt="" />
                <h4 className="media-title">Patrick Powell</h4>
                <p className="media-content">Celebrating Alex's wedding day</p>
              </div>
            </div> */}
        </div>

        <div id="Footer" className="navbar navbar-dark bg-dark">
          <a href="/"><button className="btn btn-link">Home</button></a>
        </div>
      </div>
    )
  }
}
export default App;
