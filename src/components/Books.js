import { useSelector } from 'react-redux';
import Book from './Book';
import NewBookForm from './NewBookForm';

function Books() {
  const books = useSelector((state) => state.handleBook);
  return (
    <>
      <div className="books-container">
        {
          books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
            />
          ))
        }
      </div>
      <NewBookForm />
    </>
  );
}

export default Books;
