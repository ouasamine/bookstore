import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="book-placeholder">
      <div>
        <span className="category-placeholder">Category</span>
        <h2>{title}</h2>
        <span className="author-placeholder">{author}</span>
        <div className="buttons">
          <button type="submit">Comments</button>
          <button onClick={handleSubmit} type="submit">Remove</button>
          <button type="submit">Edit</button>
        </div>
      </div>
      <div className="book-details">
        <div className="chart-col">
          <div className="pie" style={{ '--p': 28, '--b': '5px', '--c': 'cyan' }} />
          <div className="chart-desc">
            <span className="perc">28%</span>
            <span className="status">Not completed</span>
          </div>
        </div>
        <div className="chapter-col">
          <h3>CURRENT CHAPTER</h3>
          <p>Chapter 5</p>
          <button type="submit">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
