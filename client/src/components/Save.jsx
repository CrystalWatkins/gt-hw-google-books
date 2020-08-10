import React, { Component } from "react";
import Jumbotron from "./common/Jumbotron";
import { getAllBooks } from "../services/bookService";
import { deleteBookById } from "../services/bookService";

class Save extends Component {
  state = {
    savedBooks: [],
  };
  componentDidMount() {
    getAllBooks().then((response) => {
      console.log(response.data);
      const booksFromDB = [];
      response.data.forEach((value, index) => {
        const authors = value.authors;
        const title = value.title;
        const description = value.description;
        const image = value.image;
        const link = value.link;
        const id = value._id;
        const object = { authors, title, description, image, link, id };
        console.log(object);
        booksFromDB.push(object);
      });
      this.setState({ savedBooks: booksFromDB });
    });
  }
  deleteBook = (id) => {
      console.log(id);
      deleteBookById(id)
      .then(deletedBook => {
          console.log("deletedBook", deletedBook);
        const books = this.state.savedBooks.filter(value => value.id !== deletedBook.data._id);
        console.log("books",books);
        this.setState({savedBooks: books})
      })
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <div className="jumbotron">
          {this.state.savedBooks.map((book) => (
            <div className="jumbotron">
              <div className="row">
                <div className="col d-flex justify-content-around">
                  <div>{book.title}</div>
                  <div>
                    <button className="btn btn-secondary">
                      <a href={book.link}></a>View
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-start">
                  Written By: {book.authors}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <img src={book.image} />
                </div>
                <div className="col-sm-9">{book.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Save;
