import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    value: [
      { id: 1, author: 'By authot one', title: 'Book one' },
      { id: 2, author: 'By authot two', title: 'Book two' },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      const x = [...state.value];
      x.push(action.payload);
      return x;
    },

    removeBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
