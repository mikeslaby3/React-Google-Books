import React, { Component } from 'react';
import SearchResults from "../../components/SearchResults/SearchResults";
import Book from "../../components/Book/Book";
import API from "../../utils/API";

class Search extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            books: [],
            q: '',
            message: "No results to show"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q).then(res => this.setState({ books: res.data }))
        .catch(() => this.setState({ books: [], message: "No books found, try a different query" }));
    };

    handleOnClick = (event) => {
        event.preventDefault();
        this.getBooks();
    }

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
    
        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            mage: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
    };
    
    render() {
        return (
            <div>
                <div className="component-container">
                    <h1 className="section-title has-text-info">Book Search</h1>
                    <label className="label">Book Name</label>
                    <div className="field-body">
                        <div className="field is-grouped">
                            <div className="control is-expanded">
                                <input className="input" value={this.state.bookName} onChange={this.handleInputChange} type="text" placeholder=""/>
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.handleOnClick}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  
                <SearchResults
                    message={this.state.message}>
                        {this.state.books.map(book => (
                            <Book
                                key={book.id}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                link={book.volumeInfo.infoLink}
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                save={() => this.handleBookSave(book.id)}
                            />
                        ))}
                </SearchResults>
            </div>
        )
    }
}

export default Search;