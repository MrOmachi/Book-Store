import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addBookToAPI,
  getStateFromAPI,
  removeBookFromAPI,
} from "../../component/api/actioApi";
import { GET, ASYNC_ADD, ASYNC_REMOVE, addBook, removeBook } from "./apiBooks";

const asyncAdd = createAsyncThunk(ASYNC_ADD, async (book, { dispatch }) => {
  const answer = await addBookToAPI(book);
  dispatch(addBook(book));
  return answer;
});

const asyncRemove = createAsyncThunk(
  ASYNC_REMOVE,
  async (book, { dispatch }) => {
    const answer = await removeBookFromAPI(book);
    dispatch(removeBook(book));
    return answer;
  }
);

const asyncGet = createAsyncThunk(GET, async () => {
  const answer = await getStateFromAPI();
  return answer.books;
});

export { asyncAdd, asyncGet, asyncRemove };
