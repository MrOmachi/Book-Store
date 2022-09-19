import React from 'react';
import NavBar from '../books/NavBar';

function Category() {
  return (
    <div>
      <NavBar />
      <div className="category">
        <button type="submit">Show Status</button>
      </div>
    </div>
  );
}

export default Category;
