import React from 'react';
import '../styles.css';

const successPage = () => {
  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Success!</h3>
          <p className="card-text">Your submission has been received</p>
        </div>
      </div>
    </div>
  );
};

export default successPage;
