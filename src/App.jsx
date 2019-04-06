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
        <div className="navbar navbar-dark bg-dark">
          {/* Navigation Header - dark */}
        </div>

        <div className="Page container-fluid">
          {/* Page container - this should probably hold the state */}
          <img src="https://api.netlify.com/api/v1/badges/32847038-cdba-4a05-9fb0-423598ae5736/deploy-status" alt="deployStatus" />

        </div>

      </div>
    );
  }
}
