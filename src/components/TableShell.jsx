import React from "react";

/**
 * This component is used by News.js in the
 *  renderItems() and maps each story as it's own list item
*/
const TableShell = ({ item }) => (
  <div className="row">
    <div className="container">
      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title} />
          <span className="card-title">{item.source.name}</span>
        </div>
        <div className="card-content">
          <p className="flow-text">{item.title}</p>
        </div>
        <div className="card-action">
          <a href={item.url} target="blank">
            Full Article
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TableShell;
