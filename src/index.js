import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { asyncGet } from './redux/books/apiThunks';
import bookReducer from './redux/books/apiBooks';

const preloadedState = {
  books: [],
};

const store = configureStore({
  reducer: {
    books: bookReducer,
    preloadedState,
  },
});

store.dispatch(asyncGet());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
