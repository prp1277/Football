import React from 'react';

class Disclaimer extends React.Component {
  render() {
    return (
      <div className="alert alert-warning alert-dismissible fade show">
        <button type="button" className="close" data-dismiss="alert">&times;</button>
        <p>We and our partners use cookies to personalize your experience, to show you ads based on your interests, and for measurement and analytics purposes. By using our website and our services, you agree to our use of cookies as described in our Cookie Policy.</p>
        {/* <strong>Warning!</strong> This alert box could indicate a warning that might need attention. */}
      </div>
    )
  }
};
export default Disclaimer;
