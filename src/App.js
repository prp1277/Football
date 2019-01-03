import React from 'react';
import logo from './favicon.png';
import './App.css';
import Odds from './data/Odds';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      odds1: {
        type: `sr:sport:16`,
        date: `2018-12-30`,
      },
    }
    console.log(this.state);
  }
  render() {
    return (
      <div id="root" className="container-fluid bg-transparent">

        <body id="App">

          <section id="navbar">
            <nav className="navbar navbar-dark bg-secondary justify-content-center">
              <a className="nav-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                <img src={logo} className="navbar-brand" alt="logo" />
              </a>
            </nav>
          </section>

          <article id="main">
            <Odds />
          </article>

        </body>

      </div>
    );
  }
}

export default App;
