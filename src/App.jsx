import React from "react";
import ReactDOM from "react-dom";


import "./styles.css";

export default function App() {
  return (
    <div id="App">

      <div id="Header" className="navbar navbar-dark bg-dark text-light">
        <h1>App Header</h1>
      </div>

      <div id="Page" className="container mx-3 my-2 text-center">

      </div>

      <div id="Footer" className="navbar navbar-dark bg-dark text-light">
        <h5>H5</h5>
      </div>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
