import React, { Component } from 'react';

class SocialMedia extends Component {
  render() {
    return (
      <div id="SocialMedia">
        <div className="row">
          <div className="container-fluid py-2">
            <button id="linkedin" className="btn btn-primary mx-2"><a className="text-light" href="https://linkedin.com/in/prp1277" >LinkedIn</a></button>
            <button id="resume" className="btn btn-primary mx-2"><a className="text-light" href="https://1drv.ms/w/s!AoLkNBOSNnKylb1v8s3pCQn2LR-f-g" >Resume</a></button>
            <button id="github" className="btn btn-primary mx-2"><a className="text-light" href="https://github.com/prp1277" >GitHub</a></button>
            <button id="twitter" className="btn btn-primary mx-2"><a className="text-light" href="https://twitter.com/prp1277" >Twitter</a></button>
            <button id="reddit" className="btn btn-primary mx-2"><a className="text-light" href="https://reddit.com/u/patp0w" >Reddit</a></button>
          </div>

        </div>

      </div>
    );
  }
}
export default SocialMedia
