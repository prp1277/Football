import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div id="App" className="App bg-light">
        <div id="Header" className="navbar navbar-dark bg-dark">
          <a href="/"><button className="btn btn-link">Home</button></a>
        </div>

        <div id="Body" className="container-fluid text-center my-2">
          <iframe title="stream" allowfullscreen="true" src="https://mixer.com/embed/player/CeriseSand49169?disableLowLatency=1" width="750" height="500"></iframe>
          <iframe title="chat" allowfullscreen="true" src="https://mixer.com/embed/chat/CeriseSand49169" width="378" height="500"></iframe>
        </div>

        <div id="Footer" className="navbar navbar-dark bg-dark">
          <a href="/"><button className="btn btn-link">Home</button></a>
        </div>
      </div>
    );
  }
}
export default App;
