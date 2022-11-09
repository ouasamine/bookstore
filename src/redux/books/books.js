import { createSlice } from '@reduxjs/toolkit';

// const apiBaseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/';
// const appKey = 'iuHjMJWK2TfVCI2xE22B/';
// const apiURL = apiBaseURL + appKey;
// const ADD_BOOK = 'bookstore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
// const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS/fulfilled';

// // const addBookAPI = async (data) => {
// //   const fetchedData = await fetch(apiURL, {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(data),
// //   }).then((response) => response.json());
// //   return fetchedData;
// // };

// const fetchBooksFromAPI = async () => {
//   const fetchedData = await fetch(`${apiURL}books/`)
//     .then((response) => response.json());
//   return fetchedData;
// };

// const fetchBooks = createAsyncThunk(
//   FETCH_BOOKS,
//   async () => {
//     const data = await fetchBooksFromAPI();
//     return data;
//   },
// );

// console.log(fetchBooks());

const initialState = {
  status: 'idle',
  entities: [
    {
      id: 'sdnkjqsd',
      title: 'First Book',
      author: 'Author 1',
    },
    {
      id: 'qlkndsd',
      title: 'Second Book',
      author: 'Author 2',
    }, {
      id: 'qkdsldhuqsb',
      title: 'Third Book',
      author: 'Author 3',
    },
  ],
};

const handleBookSlice = createSlice({
  name: 'handleBook',
  initialState,
  reducers: {
    addBook(state, action) {
      state.entities.push(action.payload);
    },
    removeBook(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export default handleBookSlice.reducer;
export const { addBook, removeBook } = handleBookSlice.actions;
