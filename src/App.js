import React from 'react';
import SocialMedia from './components/SocialMedia';
import Disclaimer from './components/Disclaimer';
import Form from './components/inputForm'
import './styles.css';


const App = () => {
  return (
    <div id="root">

      <div id="Header" className="navbar navbar-dark bg-dark justify-content-center shadow-lg">
        <a href="/" className="text-light btn btn-link" >Home</a>
        <SocialMedia />
      </div>

      <div id="Page" className="container col-10">

        <Disclaimer />

        <div className="card bg-light my-3 py-2 text-center shadow-sm">
          <h1>Hi there</h1>
          <p>My name is Patrick Powell and this is my website.</p>


          {/* <div className="card-img text-center mx-auto my-1">
            <iframe title="powerbi" width="933" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiNzNmZjc2ODEtMDE3OC00NTQxLWIzZmItMWYyNDk4Y2MxYzVlIiwidCI6ImM5ZjZiMDRkLWZlNDYtNGJhMS1iZDNlLWE4ODU5MzIyNjJkOSIsImMiOjJ9"></iframe>
          </div> */}

          <Form />
        </div>


        <br />

      </div>

      <div id="Footer" className="navbar navbar-dark bg-dark">
        <a className="text-light btn-link mx-2" href="/">Home</a>
      </div>
    </div>

  )
}
export default App;
