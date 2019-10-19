import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

class Header extends Component {
  render() {
    return (
      <div id="Header" className="navbar navbar-dark bg-dark justify-content-center">
        <a href="/" className="text-light btn btn-link" >Home</a>
        <SocialMedia />
      </div>
    );
  }
}

export default Header;
