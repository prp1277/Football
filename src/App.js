import React, { Component } from 'react';
import SocialMedia from './components/SocialMedia';
import Disclaimer from './components/Disclaimer';
import './styles.css';
import Spotify from './components/spotify';


class App extends Component {
  render() {
    return (
      <div id="App">

        <div id="Header" className="navbar navbar-dark bg-dark text-center">
          <SocialMedia />
        </div>


        <div id="Page" className="container-fluid col-10 mx-auto">
          <div id="disclaimer"><Disclaimer /></div>
          <div className="card my-3 text-center">
            <h4 className="card-header">
              Alex's Wedding
            </h4>

            <div className="card-img mx-2 my-1">
              <img src="https://avatars0.githubusercontent.com/u/36834793?s=460&v=4" alt="" />
            </div>

            <div className="card-body">

            </div>

          </div>
          <Spotify></Spotify>

        </div>

        <div id="Footer" className="navbar navbar-dark bg-dark">
          <a href="/"><button className="btn btn-link">Home</button></a>
        </div>
      </div>

    )
  }
}
export default App;
