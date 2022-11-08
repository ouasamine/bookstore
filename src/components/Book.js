import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  return (
    <div className="book-container">
      <h2>{title}</h2>
      <span>{author}</span>
      <button type="submit">Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
