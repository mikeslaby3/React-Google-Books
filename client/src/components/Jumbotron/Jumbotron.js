import React from "react";

const Jumbotron = () => {

  const owl = {
    height: "150px"
  }

  return (
    <div>
      <section className="hero is-small is-info is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">React Google Books Search</h1>
            <h2 className="subtitle is-size-3">Search for and Save Books of Interest</h2>
            <img
                style={owl}
                src={process.env.PUBLIC_URL + './images/book-owl.png'}
                alt="book-owl"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jumbotron;
