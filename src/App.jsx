import React, { Component } from 'react';
import hello from '.netlify/functions/hello.js';

// https://socket.io/get-started/chat/
//https://open.spotify.com/user/12180741876?si=Y2bV_jJzS5uBx70rf7rmHg
//spotify:user:12180741876

const App = () => ({
  render() {
    return (
      <div>{hello}</div>
    );
  }
})
export default App;
