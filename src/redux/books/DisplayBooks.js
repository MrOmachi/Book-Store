import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncRemove } from './apiThunks';

import Book from './Book';
// import Form from './Form';
import NavBar from './NavBar';
import Form from './apiform';
// import { removeBook } from "./books";

function DisplayBooks() {
  // const bookList = useSelector((state) => state.books.value);
  // const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemove = (book) => {
    dispatch(asyncRemove(book)).then((response) => {});
  };

  return (
    <div className="bookDsipalyContainer">
      <NavBar />

      {books.map((book) => (
        <div className="BooksDisplay" key={book.id}>
          <div className="authorsTitle">
            <h2 className="actiontype">Action</h2>
            <Book title={book.title} author={book.author} />
            <div className="btns">
              <button type="submit" className="btn">
                Comments
              </button>
              <button
                onClick={() => handleRemove(book)}
                type="button"
                className="btn"
              >
                Remove
              </button>
              <button type="submit" className="btn">
                Edit
              </button>
            </div>
          </div>

          <div className="progressContainer">
            <div className="progressParent">
              <div className="progressChild" />
            </div>
            <div className="progressStat">
              <h2 className="h2">60%</h2>
              <p className="par">completed</p>
            </div>
          </div>

          <div className="chapter">
            <h2 className="h2">CURRENT CHAPTER</h2>
            <p className="par">Chapter 17</p>
            <button type="submit" className="progressBtn">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      ))}
      <Form />
    </div>
  );
}

export default DisplayBooks;
