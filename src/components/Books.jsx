import Book from './Book';
import NewBookForm from './NewBookForm';

function Books() {
  return (
    <>
      <div className="books-container">
        <Book title="Book1" author="amine" />
        <Book title="Book2" author="ahmed" />
        <Book title="Book3" author="jhon" />
      </div>
      <NewBookForm />
    </>
  );
}

export default Books;
