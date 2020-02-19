import React from 'react';
import Header from './components/Header';
import './styles.css';


const App = () => {
  return (
    <div id="App" className="text-primary">

      <Header />

      <div id="404" className="bg-light my-3 mx-5 shadow-lg text-center">
        <h3>There isn't much to see here</h3>
        <p>Check back later to see if anything is added</p>
      </div>

      <div className="navbar bg-dark text-light text-center fixed-bottom">
        <a className="text-light btn-link mx-2" href="/">Home</a>
      </div>

    </div>
  )
}
export default App;
