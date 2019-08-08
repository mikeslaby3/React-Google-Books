import React from 'react';
import Book from "../Book/Book";
import "../../App.css";

const SearchResults = (props) => {
    const messageStyling = {
        marginBottom: "20px",
        fontSize: "18px"
    }
    return (
        <div>
            <div className="container component-container">
                <h1 className="section-title has-text-info">Book Results</h1>
                <h2 style={messageStyling}>{props.message}</h2>
                <Book />
            </div>
        </div>
    )
}

export default SearchResults;