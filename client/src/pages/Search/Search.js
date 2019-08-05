import React, { Component } from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";

class Search extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <SearchResults />
            </div>
        )
    }
}

export default Search;