import React, { Component } from "react";
import Jumbotron from "./common/Jumbotron";
import { searchResults } from "../services/apiService";
import { saveBook } from "../services/bookService";

class Search extends Component {
  state = {
    searchValue: "",
    booksSearched: [],
  };
  handleSearch = (event) => {
    console.log(event.currentTarget.value);
    this.setState({ searchValue: event.currentTarget.value });
  };
  handleSearchAPI = async () => {
    const { data } = await searchResults(this.state.searchValue);
    console.log(data);
    const booksSearched = [];
    data.items.forEach((value, index) => {
      const authors = value.volumeInfo.authors;
      const title = value.volumeInfo.title;
      const description = value.volumeInfo.description;
      const image = value.volumeInfo.imageLinks.thumbnail;
      const link = value.volumeInfo.infoLink;
      const object = { authors, title, description, image, link };
      console.log(object);
      booksSearched.push(object);
    });
    this.setState({ booksSearched: booksSearched });
  };

  saveBook = async(book) => {
    console.log(book);
    const result = await saveBook(book.title, book.authors, book.description, book.image, book.link)
    console.log(result)
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <div className="jumbotron">
          <h1> Book Search</h1>
          <div className="form-group">
            <label> Book</label>
            <input
              className="form-control"
              type="text"
              value={this.state.searchValue}
              onChange={this.handleSearch}
            />
            <button className="btn btn-primary" onClick={this.handleSearchAPI}>
              Search
            </button>
          </div>
        </div>
        <div className="jumbotron">
          {this.state.booksSearched.map((book) => (
            <div className="jumbotron">
              <div className="row">
                <div className="col d-flex justify-content-around">
                  <div>{book.title}</div>
                  <div>
                    <button className="btn btn-secondary">
                      <a href={book.link}></a>View
                    </button>
                    <button className="btn btn-primary" onClick= {() => this.saveBook(book)}>Save</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-start">
                  Written By: {book.authors}
                </div>
              </div>
              <div className="row">
                <div className= "col-sm-3"><img src={book.image}/></div>
                <div className="col-sm-9">{book.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
