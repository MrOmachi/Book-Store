// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Book from './Book';
// import Form from './Form';
// import NavBar from './NavBar';
// import { removeBook } from './redux/books/books';

// function DisplayBooks() {
//   const bookList = useSelector((state) => state.books.value);
//   const dispatch = useDispatch();

//   return (
//     <div className="bookDsipalyContainer">
//       <NavBar />

//       {bookList.map((book) => (
//         <div className="BooksDisplay" key={book.id}>
//           <div className="authorsTitle">
//             <h2>Action</h2>
//             <Book title={book.title} author={book.author} />
//             <div className="btns">
//               <button type="submit" className="btn">
//                 Comments
//               </button>
//               <button
//                 onClick={() => {
//                   dispatch(removeBook({ id: book.id }));
//                 }}
//                 type="button"
//                 className="btn"
//               >
//                 Remove
//               </button>
//               <button type="submit" className="btn">
//                 Edit
//               </button>
//             </div>
//           </div>

//           <div className="progressContainer">
//             <div className="progressParent">
//               <div className="progressChild" />
//             </div>
//             <div className="progressStat">
//               <h2>60%</h2>
//               <p>completed</p>
//             </div>
//           </div>

//           <div className="chapter">
//             <h2>CURRENT CHAPTER</h2>
//             <p>Chapter 17</p>
//             <button type="submit" className="progressBtn">
//               UPDATE PROGRESS
//             </button>
//           </div>
//         </div>
//       ))}
//       <Form />
//     </div>
//   );
// }

// export default DisplayBooks;
