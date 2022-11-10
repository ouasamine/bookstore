import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const apiBaseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appKey = '5nwPDFe9MjFbkJMCzkXg/';
const apiURL = apiBaseURL + appKey;
const FETCH_BOOKS = 'handleBook/fetchBooks';
const ADD_BOOK = 'handleBook/addBook';

const addBookAPI = async (data) => {
  const response = await fetch(`${apiURL}books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  }).then((response) => response.text());
  return response;
};

const fetchBooksFromAPI = async () => {
  const fetchedData = await fetch(`${apiURL}books/`)
    .then((response) => response.json());
  return fetchedData;
};

const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  fetchBooksFromAPI,
);

const addBook = createAsyncThunk(
  ADD_BOOK,
  addBookAPI,
);

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
      return state.entities.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      console.log(current(state).entities);
      Object.entries(action.payload).forEach((item) => {
        console.log(item[0], '->', item[1][0]);
        // state.entities.push({
        //   id: item[0],
        //   title: item[1][0].title,
        //   author: item[1][0].author,
        // });
      });
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default handleBookSlice.reducer;
export { fetchBooks, addBook };
