import React from "react";
import "./Book.css";

const book = props => {
  return (
    <div className="book-container">
      <div className="columns book-content">
          <div className="column">
            <strong>{props.title}</strong>
            <h2>{props.authors}</h2>
          </div>
          <div className="column is-one-third">
            <button onClick={props.save} className="button is-success book-button is-pulled-right">Save</button>
            <a 
            className="button is-info book-button is-pulled-right" 
            href={props.link} 
            target="_blank" 
            rel="noopener noreferrer">View</a>
          </div>
      </div>
      <div className="columns book-content">
        <div className="column is-two-fifths">    
            <img 
            src={props.image} 
            alt={props.alt} />
        </div>
        <div className="column">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default book;
