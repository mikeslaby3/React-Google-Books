import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {

    const logoStyling = {
        height: "35px",
        margin: "6px"
    }

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <a className="navbar-brand" href="/">
                    <img
                        style={logoStyling}
                        src={process.env.PUBLIC_URL + './images/google-books.png'}
                        alt="google-books-logo"/>
                </a>
                <button id="navbar-burger-btn" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </button>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/search" className="navbar-item">
                        Search
                        </Link>
                        <Link to="/saved" className="navbar-item">
                        Saved
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;