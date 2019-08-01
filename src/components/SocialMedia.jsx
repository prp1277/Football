import React, { Component } from 'react';
import '../styles.css';
//import Playlists from './Playlists.jsx'

class SocialMedia extends Component {
  render() {
    return (
      <div id="SocialMedia">
        <div className="row">
          <div className="container-fluid py-2">
            <button id="linkedin" className="btn btn-primary mx-2"><a className="text-light" href="https://bit.ly/powell-linkedin" >LinkedIn</a></button>
            <button id="github" className="btn btn-primary mx-2"><a className="text-light" href="https://bit.ly/Powell-GitHub" >GitHub</a></button>
            <button id="twitter" className="btn btn-primary mx-2"><a className="text-light" href="https://bit.ly/Powell-Twitter" >Twitter</a></button>
            <button id="spotify" className="btn btn-primary mx-2"><a className="text-light" href="http://bit.ly/Powell-Spotify" >Spotify</a></button>
            <button id="dev" className="btn btn-primary mx-2"><a className="text-light" href="https://dev.to/prp1277">Dev.To</a></button>
            <button id="reddit" className="btn btn-primary mx-2"><a className="text-light" href="http://bit.ly/Powell-Reddit" >Reddit</a></button>
          </div>
        </div>
      </div>
    );
  }
}
export default SocialMedia
