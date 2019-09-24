import React from 'react';
import SocialMedia from './components/SocialMedia';
import './styles.css';


const App = () => {
  return (
    <div id="App">

      <div id="Header" className="navbar navbar-dark bg-dark justify-content-center">
        <a href="/" className="text-light btn btn-link" >Home</a>
        <SocialMedia />
      </div>

      <section className="container col-10 my-3 bg-light shadow-lg text-center">
        <h3>There isn't much to see here</h3>
        <p>As a placeholder, here's a PowerBI report showing some information from GitHubs API.</p>
        <iframe title="GitHubStats" width="933" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiNzNmZjc2ODEtMDE3OC00NTQxLWIzZmItMWYyNDk4Y2MxYzVlIiwidCI6ImM5ZjZiMDRkLWZlNDYtNGJhMS1iZDNlLWE4ODU5MzIyNjJkOSIsImMiOjJ9" frameborder="0" allowFullScreen="true"></iframe>
      </section>

      <div id="Footer" className="navbar navbar-dark bg-dark">
        <a className="text-light btn-link mx-2" href="/">Home</a>
      </div>
    </div>

  )
}
export default App;
