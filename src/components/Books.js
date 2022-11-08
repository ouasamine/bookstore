import Book from './Book';
import NewBookForm from './NewBookForm';

function Books() {
  return (
    <>
      <div className="books-container">
        <Book title="Book1" author="amine" />
        {/* { state.forEach((book) => {
          <Book title={book.title} author={book.author} />;
        })} */}
      </div>
      <NewBookForm />
    </>
  );
}

export default Books;
