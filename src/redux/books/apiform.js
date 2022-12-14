import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { asyncAdd } from './apiThunks';

function Form() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const alert = document.getElementById('alert');
    e.preventDefault();
    if (e.target.title.value && e.target.author.value) {
      const book = {
        item_id: v4(),
        title: e.target.title.value,
        author: e.target.author.value,
        category: 'Fiction',
      };

      dispatch(asyncAdd(book)).then((response) => {
        e.target.title.value = '';
        e.target.author.value = '';
      });
    } else {
      alert.innerHTML = 'Please fill Book Title and Author.';
      setTimeout(() => {
        alert.innerHTML = '';
      }, 3000);
    }
  };

  return (
    <div className="form-container">
      <form className="form" id="add-book" onSubmit={handleSubmit}>
        <h1 className="form-title"> ADD NEW BOOK </h1>
        <input
          type="text"
          placeholder="Title"
          className="new-book"
          id="title"
          name="title"
        />
        <input
          type="text"
          placeholder="Author"
          className="new-author"
          name="author"
          id="author"
        />
        <button type="submit" className="add-book" id="submit-book">
          Add Book
        </button>
      </form>
      <div id="alert" />
    </div>
  );
}

export default Form;
