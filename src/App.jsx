import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";


export default function App() {
  return (
    <div id="App">
      <div className="container-fluid bg-dark">

      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
