import React from 'react';
import NewsFeed from './ui/NewsFeed.js';

export default class App extends React.Component {
  render() {
    return (
      <div id="App" className="container-fluid">

        <div>
          <NewsFeed />
        </div>
      </div>
    );
  }
}
