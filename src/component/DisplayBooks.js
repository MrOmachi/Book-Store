import React from 'react';
import Book from './Book';
import Form from './Form';
import NavBar from './NavBar';

function DisplayBooks() {
  return (
    <div className="bookDsipalyContainer">
      <NavBar />
      <div className="BooksDisplay">
        <div className="authorsTitle">
          <h2>Action</h2>
          <Book title="Suzanne Collins" author="The Hunger Game" />
          <div className="btns">
            <button type="submit" className="btn">
              Comments
            </button>
            <button type="submit" className="btn">
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
            <h2>60%</h2>
            <p>completed</p>
          </div>
        </div>

        <div className="chapter">
          <h2>CURRENT CHAPTER</h2>
          <p>Chapter 17</p>
          <button type="submit" className="progressBtn">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default DisplayBooks;
