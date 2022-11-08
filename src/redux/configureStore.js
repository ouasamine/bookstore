/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import handleBook from './books/books';

const reducers = combineReducers({
  handleBook,
});
const store = configureStore({
  reducer: reducers,
});
