import { configureStore } from '@reduxjs/toolkit';
import handleBook from './books/books';
import handleStatus from './categories/categories';

const store = configureStore({
  reducer: {
    handleBook,
    handleStatus,
  },
});

export default store;
