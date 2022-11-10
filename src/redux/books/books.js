import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addBookAPI, fetchBooksFromAPI, removeBookAPI } from '../../api/APICalls';

const FETCH_BOOKS = 'handleBook/fetchBooks';
const ADD_BOOK = 'handleBook/addBook';
const REMOVE_BOOK = 'handleBook/removeBook';

const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  async () => {
    const response = await fetchBooksFromAPI();
    return response;
  },
);

const addBook = createAsyncThunk(
  ADD_BOOK,
  async (Obj) => {
    await addBookAPI(Obj);
    return Obj;
  },
);

const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => {
    await removeBookAPI(id);
    return id;
  },
);

const initialState = {
  status: null,
  entities: [],
};

const handleBookSlice = createSlice({
  name: 'handleBook',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const newBookList = [];
      Object.entries(action.payload).forEach((item) => {
        newBookList.push({
          id: item[0],
          title: item[1][0].title,
          author: item[1][0].author,
        });
      });
      // eslint-disable-next-line no-param-reassign
      state.entities = newBookList;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.entities.push({
        id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
      });
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.entities = state.entities.filter((book) => book.id !== action.payload);
    });
  },
});

export default handleBookSlice.reducer;
export { fetchBooks, addBook, removeBook };
