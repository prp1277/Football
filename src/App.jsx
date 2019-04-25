import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div id="App" className="App bg-light">

        <div id="Header" className="navbar navbar-dark bg-dark">
          <img className="navbar-brand" src="https://github.com/prp1277/Pay-LESS/raw/master/payless-webstores/Pay-LESS.png" alt="" />
        </div>

        <div id="Body" className="container text-center">

          <div>
            <h4>Kansas City</h4>
            <iframe title="KansasCity" width="933" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiZDA1NWYwNzktMjE1Ny00MTkxLWE0NTctYjc5ZWE0MjU2Njk5IiwidCI6ImY1MmY5MWI0LTc1YzAtNGUwZC04MjkzLTZhYjQ5ZTViZjgwZiJ9" frameborder="0" allowFullScreen="true"></iframe><br />
          </div>

          <div>
            <h4>ESRI-DBConnection File</h4>
            <iframe title="ESRI-DBConnection" width="933" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiMGRmNjAxOGUtMjU2ZS00ZGZmLTkyZmYtODBkODNkNGExYzI1IiwidCI6ImY1MmY5MWI0LTc1YzAtNGUwZC04MjkzLTZhYjQ5ZTViZjgwZiJ9" frameborder="0" allowFullScreen="true"></iframe><br />
          </div>

          <div>
            <h4>Des Moines Chains</h4>
            <iframe title="DesMoinesChains" width="933" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiMzZlMTRjMjktZGViMi00ODNlLWE2NTQtMzg0NTFmN2NhY2U3IiwidCI6ImY1MmY5MWI0LTc1YzAtNGUwZC04MjkzLTZhYjQ5ZTViZjgwZiJ9" frameborder="0" allowFullScreen="true"></iframe><br />
          </div>

          <div>
            <h4>Des Moines Clusters</h4>
            <iframe title="DesMoines-Chains" width="933" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiZWJmNjIxMjEtNjc5NS00ZWEwLTgxOTEtMTYzZGNhZDQzNmE4IiwidCI6ImY1MmY5MWI0LTc1YzAtNGUwZC04MjkzLTZhYjQ5ZTViZjgwZiJ9" frameborder="0" allowFullScreen="true"></iframe><br />
          </div>

        </div>

        <div id="Footer" className="navbar navbar-dark bg-dark">
          <a href="/"><button className="btn btn-link">Home</button></a>
        </div>

      </div>
    )
  }
}
export default App;
