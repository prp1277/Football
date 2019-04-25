import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div id="App" className="App bg-light">
        <div id="Header" className="navbar navbar-dark bg-dark">
          <a href="/"><button className="btn btn-link">Home</button></a>
        </div>

        {/* <div id="Body" className="container-fluid text-center my-2">
          <iframe title="stream" allowfullscreen="true" src="https://mixer.com/embed/player/CeriseSand49169?disableLowLatency=1" width="750" height="500"></iframe>
          <iframe title="chat" allowfullscreen="true" src="https://mixer.com/embed/chat/CeriseSand49169" width="378" height="500"></iframe>
        </div> */}

        <div id="Body" className="col-12 text-center my-2"><iframe title="wowt" className="container-fluid" src="https://www.wowt.com/templates/2015_JW_frame?name=Livestream_/livestream_embed&token=https://ad-playlistserver.aws.syncbak.com/playlist/898490/master.m3u8?access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6IkdyYXkyMDE2MDgyOSIsInN1YiI6IioiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3OTAzNjkxOTEsImlzcyI6IldMUyIsIm1kNSI6ImE1NGE2ZTlkNDBlOGY3NmYzODU1ZjBlMTY5MmQ5Mzg3IiwibWlkIjoiODk4NDkwIn0.hymud128OYz4fL4MNaQqhoobb6o3Y1Jpg4VXwDpnTGk" width="750" height="500" frameborder="0"></iframe></div>

        <div id="Footer" className="navbar navbar-dark bg-dark">
          <a href="/"><button className="btn btn-link">Home</button></a>
        </div>
      </div>
    );
  }
}
export default App;
