import React from 'react';

function Book({ author, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
    </div>
  );
}

export default Book;
