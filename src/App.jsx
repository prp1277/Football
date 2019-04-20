import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div id="App" className="App bg-light">
        <div id="Header" className="navbar navbar-dark bg-dark">
          <a href="/"><button className="btn btn-link">Home</button></a>
        </div>

        <div className="container-fluid bg-secondary btn-group py-2">

          <button id="linkedin" className="btn btn-primary mx-2"><a className="text-light" href="https://linkedin.com/in/prp1277" >LinkedIn</a></button>
          <button id="resume" className="btn btn-primary mx-2"><a className="text-light" href="https://1drv.ms/w/s!AoLkNBOSNnKylb1v8s3pCQn2LR-f-g" >Resume</a></button>
          <button id="github" className="btn btn-primary mx-2"><a className="text-light" href="https://github.com/prp1277" >GitHub</a></button>
          <button id="twitter" className="btn btn-primary mx-2"><a className="text-light" href="https://twitter.com/prp1277" >Twitter</a></button>
          <button id="reddit" className="btn btn-primary mx-2"><a className="text-light" href="https://reddit.com/u/patp0w" >Reddit</a></button>

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
          <a href="/"><button className="btn btn-link">Home</button></a>
        </div>

      </div>
    )
  }
}
export default App;
