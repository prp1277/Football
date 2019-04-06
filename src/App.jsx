import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div id="App" className="container-fluid">
        {/*
* @todo Modular-ize repositories
* @body The use "App" as a function for specific purposes
* ie - OCR, GPS, Flows etc
*/}
        <div id="header" className="navbar navbar-dark bg-dark">
          {/* Navigation Header - dark */}
          <a href="/">Home</a>
          <img src="https://api.netlify.com/api/v1/badges/32847038-cdba-4a05-9fb0-423598ae5736/deploy-status" alt="deployStatus" />
        </div>

        <div id="Page" className="container-fluid mx-auto my-3">
          {/* Page container - this should probably hold the state */}

          <h1>Page Title</h1>
          <iframe title="GMap" src="https://www.google.com/maps/d/u/0/embed?mid=1ts0GXU6ELLcgGxS0sxHQ6n9jeQ3yhaMV" width="640" height="480"></iframe>

        </div>

        <div id="footer" className="navbar navbar-dark bg-dark">
          <p>thanks for visiting</p>
        </div>

      </div>
    );
  }
}
