import React, { Component } from 'react';
import '../styles.css';
//import Playlists from './Playlists.jsx'

class SocialMedia extends Component {
  render() {
    return (
      <div id="SocialMedia">
        <div className="row">
          <div className="container py-2">
            <a className="text-light btn-link mx-2" href="https://linkedin.com/in/prp1277" >LinkedIn</a>
            <a className="text-light btn-link mx-2" href="https://github.com/prp1277" >GitHub</a>
            <a className="text-light btn-link mx-2" href="https://twitter.com/prp1277" >Twitter</a>
            <a className="text-light btn-link mx-2" href="https://facebook.com/patrick.powell1" >Facebook</a>
          </div>
        </div>
      </div>
    );
  }
}
export default SocialMedia
