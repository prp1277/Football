import React, { Component } from 'react';
import SocialMedia from './components/SocialMedia';
import Disclaimer from './components/Disclaimer';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div id="App" className="bg-white">

        <div id="Header" className="navbar navbar-dark bg-dark justify-content-center">
          <SocialMedia />
        </div>

        <div id="Page" className="container-fluid col-10 mx-auto">

          <div id="disclaimer" className="my-2 shadow-sm"><Disclaimer /></div>

          <div className="card my-3 text-center shadow-sm">
            <h1>Hi there</h1>
            <p>My name is Patrick Powell and this is my website.</p>

            <div className="card-img mx-2 my-1">
              <img src="https://avatars0.githubusercontent.com/u/36834793?s=250&v=4" alt="Patrick" />
            </div>

            <div className="card-body">
              <h3>There isn't much to see here yet.</h3>
              <p>For now, take a look at what I've been up to on GitHub.</p>
            </div>
          </div>
          <br />
          <iframe title="Powerbi" width="800" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiNzNmZjc2ODEtMDE3OC00NTQxLWIzZmItMWYyNDk4Y2MxYzVlIiwidCI6ImM5ZjZiMDRkLWZlNDYtNGJhMS1iZDNlLWE4ODU5MzIyNjJkOSIsImMiOjJ9" frameborder="0" allowFullScreen="true"></iframe>

        </div>

        <div id="Footer" className="navbar navbar-dark bg-dark">
          <a className="text-light btn-link mx-2" href="/">Home</a>
        </div>
      </div>

    )
  }
}
export default App;
