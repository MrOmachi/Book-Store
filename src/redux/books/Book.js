import React from 'react';

function Book({ author, title }) {
  return (
    <div>
      <h1 className="bookTitle">{title}</h1>
      <p className="bookAuthor">{author}</p>
    </div>
  );
}

export default Book;
