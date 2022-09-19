import { createSlice } from '@reduxjs/toolkit';
import BooksData from '../Fakedat';

export const bookSlice = createSlice({
  name: 'books',
  initialState: { value: [] },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },

    removeBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
