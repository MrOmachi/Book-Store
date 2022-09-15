import React from "react";

function Form() {
  return (
    <div className="booksForm">
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Book Author" />
        <button>ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
