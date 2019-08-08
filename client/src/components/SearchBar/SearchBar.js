import React, { Component } from 'react';
import API from "../../utils/API";
import "../../App.css";

class SearchBar extends Component {


    render() {
        return (
            <div>
                <div className="component-container">
                    <h1 className="section-title has-text-info">Book Search</h1>
                    <label className="label">Book Name</label>
                    <div className="field-body">
                        <div className="field is-grouped">
                            <div className="control is-expanded">
                                <input className="input" value={this.state.bookName} onChange={this.handleChange} type="text" placeholder="Ready Player One"/>
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.handleOnClick}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default SearchBar;