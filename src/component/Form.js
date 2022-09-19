import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from './redux/books/books';

function Form() {
  const bookList = useSelector((state) => state.books.value);
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  return (
    <div className="booksForm">
      <form>
        <input
          type="text"
          placeholder="Book title"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Book Author"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          onClick={() => dispatch(
            addBook({
              id: bookList.length ? bookList[bookList.length - 1].id + 1 : 0,
              author,
              title,
            }),
          )}
          type="button"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
